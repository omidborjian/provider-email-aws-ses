let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");

module.exports = {

    init: (providerOptions = {}, settings = {}) => {
      
      return {
        send: async options => {

        const ses = new aws.SES({
          apiVersion: "2010-12-01",
          region: providerOptions.region || process.env.AWS_REGION,
          defaultProvider,
        });

        // create Nodemailer SES transporter
        let transporter = nodemailer.createTransport({
          SES: { ses, aws },
        });

        // Default values
        const emailOptions = {
          to: options.to || settings.to,
          from: options.from || settings.defaultFrom,
          replyTo: options.replyTo || settings.defaultReplyTo,
          text: options.text || options.html,
          html: options.html || options.text,
          ses: {
            // optional extra arguments for SendRawEmail
            Tags: [
              {
                Name: "tag_name",
                Value: "tag_value",
              },
            ],
          },
        };

        return transporter.sendMail(emailOptions,
          (err, info) => {
            console.log(err);
            console.log(info);
          }
          );

        },
      };
    },
  };