terraform {
  cloud {
    organization = "C0llliNN"

    workspaces {
      name = "easy-vest"
    }
  }
}

provider "aws" {
  region = var.region
  access_key = var.aws_access_key_id
  secret_key = var.aws_secret_access_key
}

locals {
  app_name = "easy-vest"
}

resource "aws_key_pair" "key" {
  key_name   = "${local.app_name}-key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCurItyUaxrdoK/vj5wxcuQK+1P1Zm9kq0Q8TQv19G63psIXXhupV4WaKaBEHZmv/K2RtsN5eCQEL5hyTOde95ZPvEFqP+++CHFY285AHrj/e6rHVjEnKpS2rKhSPT+3iLoryvU5U8idhJRkw7k0eZ83FQ6HOdP4vg70N4Ui5yutGC0ZxZXLhok/gHWHga3awmYCvypmAV8A5NUnYwmOvpSVgGGd+ENB0o8K5wc3RKF+FtaypryfHktsYAoaS8dLJRn8q7uPJVvv48numfrsHldMouapTDK1ppzw/z3T6MflTt7qgGwFqMUNG1VxZbF7GBpuxpSA+BQMlAGfE3TFqVidAVGZi7yfmEKFCmtZuhEfYga1a6ibdd87/B+QA5kKlmyUkVSE9eZu+aheh3lc+C302C3f1fMUUonhFXLQZSlZNotlkK4i2bnmqmZqnxNB5zkeDrfwWDDfJcBTIT6OAmlfcSKTS1QsjM3yEGvt3Cz4n4n5kn2kEi9JiDOCkKqLtM= collin@PC"
}

resource "aws_instance" "app" {
  ami           = "ami-0aa7d40eeae50c9a9"
  instance_type = "t3.micro"
  key_name = aws_key_pair.key.key_name
  associate_public_ip_address = true
  iam_instance_profile = aws_iam_instance_profile.instance_profile.id
  security_groups = [aws_security_group.web_access.id]
  subnet_id = module.vpc.public_subnets[0]
  user_data = <<-EOF
    #!/bin/bash

    # Update the system and install necessary packages
    yum update -y
    yum install -y amazon-linux-extras
    sudo amazon-linux-extras enable php7.4
    yum install -y php-cli php-pdo php-mbstring php-xml php-redis php-json php-fpm php-mysqlnd php-gd git

    # Clone the Laravel repository
    git clone ${var.code_repository_url} /var/www/${local.app_name}

    cd /var/www/${local.app_name}

    # Install dependencies using Composer
    curl -sS https://getcomposer.org/installer | php
    php composer.phar install

    # Configure the Laravel application
    cp .env.example .env
    php artisan key:generate

    # Start the Apache web server
    yum install -y httpd
    systemctl start httpd
    systemctl enable httpd

    # Serve the Laravel application using the Apache web server
    echo "<VirtualHost *:80>
      DocumentRoot /var/www/${local.app_name}/public
      <Directory /var/www/${local.app_name}/public>
        AllowOverride All
        DirectoryIndex index.php
        Require all granted
        Order allow,deny
        Allow from all
      </Directory>
    </VirtualHost>" | tee /etc/httpd/conf.d/laravel.conf

    chmod -R 775 /var/www/${local.app_name}
    chown -R apache:root /var/www/${local.app_name}

    systemctl restart httpd
  EOF
}