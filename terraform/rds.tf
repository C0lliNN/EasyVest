# resource "aws_db_instance" "db_instance" {
#   engine                 = "mysql"
#   engine_version         = "8.0"
#   instance_class         = var.rds_instance_class
#   db_name                   = "${local.app_name}-db"
#   storage_type           = "gp2"
#   storage_encrypted      = false
#   allocated_storage      = 20
#   username               = "foo"
#   password               = "foobarbaz"
#   vpc_security_group_ids = [aws_security_group.db_access.id]
#   db_subnet_group_name   = aws_db_subnet_group.subnet_group.name
#   skip_final_snapshot    = true

#   tags = {
#     Terraform   = "true"
#     Environment = var.env
#   }
# }

resource "aws_db_subnet_group" "subnet_group" {
  name       = "${local.app_name}-group"
  subnet_ids = module.vpc.private_subnets

  tags = {
    Terraform   = "true"
    Environment = var.env
  }
}

resource "aws_security_group" "db_access" {
  name        = "${local.app_name}-db-access"
  description = "Allow Traffic in the 3306 port"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.web_access.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Terraform   = "true"
    Environment = var.env
  }
}
