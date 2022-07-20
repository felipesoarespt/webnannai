import AWS from 'aws-sdk';

AWS.config.update({
    region: process.env.NEXT_AWS_REGION,
    accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY
});

const SES = new AWS.SES({ apiVersion: "2019-09-01" });

const sendEmail = ({ from, to, html, subject }) => {
    const params = {
        Destination: {
            ToAddresses: [to]
        },
        Message: {
            Body: {
                Html: {
                    Data: html,
                    Charset: 'UTF-8',
                },
            },
            Subject: {
                Data: subject,
                Charset: "UTF-8",
            }
        },
        Source: from
    };
    return SES.sendEmail(params).promise();
}

export { sendEmail }