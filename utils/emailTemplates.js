exports.contactForm = (user) => {
  
    return {
      Source: process.env.EMAIL_FROM,
      Destination: {
        ToAddresses: ["tgil849@gmail.com"],
      },
      ReplyToAddresses: [process.env.EMAIL_FROM],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
                          <html>
                              <h1>Message de ${user.email}</h1>
                              <p>${user.message}</p>
                          </html>
                      `,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Email de contact thomas-gil.fr",
        },
      },
    };
  };
  