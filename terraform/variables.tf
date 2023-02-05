variable "env" {
    type = string
}

variable "aws_access_key_id" {
    type = string
}

variable "aws_secret_access_key" {
    type = string
}

variable "region" {
  type = string
}

variable "rds_instance_class" {
    type = string
    default = "db.t2.micro"
}

variable "elasticcache_instance_class" {
    type = string
    default = "cache.t2.micro"
}

variable "code_repository_url" {
  type = string
}

variable "app_env_variables" {
  type = map(string)
  default = {}
}