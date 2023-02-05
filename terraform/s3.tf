resource "aws_s3_bucket" "bucket" {
  bucket = "${local.app_name}-bucket"

  tags = {
    Terraform   = "true"
    Environment = var.env
  }
}
