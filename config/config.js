module.exports = {
    aws_table_name: 'Portfolio',
    aws_remote_config: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    }
}