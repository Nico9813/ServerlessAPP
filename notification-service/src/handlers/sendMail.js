import AWS from 'aws-sdk';

const ses = new AWS.SES();

async function sendMail(event, context) {
  //const record = event.Records[0];
  //console.log('record processing', record);

  //const email = JSON.parse(record.body);
  //const { subject, body, recipient } = email;

  const params = {
    Source: 'nico.gomez.mbc@gmail.com',
    Destination: {
      ToAddresses: ["nico.gomez.mbc@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Prueba",
        },
      },
      Subject: {
        Data: "Prueba mas larga",
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;