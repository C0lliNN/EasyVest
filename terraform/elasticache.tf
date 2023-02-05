resource "aws_elasticache_cluster" "cache" {
  cluster_id         = "${local.app_name}-cache"
  engine             = "redis"
  engine_version     = "5.0.6"
  node_type          = var.elasticcache_instance_class
  num_cache_nodes    = 1
  security_group_ids = [aws_security_group.cache_access.id]
  subnet_group_name  = aws_elasticache_subnet_group.subnet_group.name

  tags = {
    Terraform   = "true"
    Environment = var.env
  }
}

resource "aws_elasticache_subnet_group" "subnet_group" {
  name       = "${local.app_name}-group"
  subnet_ids = module.vpc.private_subnets

  tags = {
    Terraform   = "true"
    Environment = var.env
  }
}

resource "aws_security_group" "cache_access" {
  name        = "${local.app_name}-cache-access"
  description = "Allow Traffic in the 6379 port"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port       = 6379
    to_port         = 6379
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

