resource "aws_iam_role" "instance_role" {
  name               = "${local.app_name}-instance-role"
  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Action" : "sts:AssumeRole",
        "Principal" : {
          "Service" : "ec2.amazonaws.com"
        },
        "Effect" : "Allow",
        "Sid" : ""
      }
    ]
  })
}


resource "aws_iam_policy" "instance_role_policy" {
  name        = "${local.app_name}-instance-role-policy"
  description = "Allow S3, RDS and Elasticcache access"
  policy      = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "Stmt1674840832992",
        "Action" : "rds:*",
        "Effect" : "Allow",
        "Resource" : "*"
      },
      {
        "Sid": "Stmt1674841846576",
        "Action": "cloudwatch:*",
        "Effect": "Allow",
        "Resource": "*"
      },
      {
        "Sid": "Stmt1674841846578",
        "Action": "s3:*",
        "Effect": "Allow",
        "Resource": "*"
      },
      {
        "Sid": "Stmt1676841846578",
        "Action": "elasticcache:*",
        "Effect": "Allow",
        "Resource": "*"
      }
    ]
  })
}

resource "aws_iam_policy_attachment" "instance_role_policy_attachment" {
  name       = "${local.app_name}-instance-role-policy-attachment"
  roles      = [aws_iam_role.instance_role.name]
  policy_arn = aws_iam_policy.instance_role_policy.arn
}

resource "aws_iam_instance_profile" "instance_profile" {
  name = "${local.app_name}-ec2-profile"
  role = aws_iam_role.instance_role.name
}
