# provider-email-aws-ses


A provider for AWS Simple Email Service that uses AWS official node SDK and nodemailer for throttling. Let me know if you run into any issues setting up. It works with Strapi 4 and later


## Installation
```
# using yarn
yarn add strapi-provider-email-aws-ses

# using npm
npm install strapi-provider-email-aws-ses --save
```

**Example**

<code>Path - config/plugins.js</code> 

```
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'aws-ses',
      providerOptions: {
        key: env('AWS_SES_KEY'),
        secret: env('AWS_SES_SECRET'),
        region: 'us-east-1',
      },
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    }
  },
  // ...
});
```

