# provider-email-aws-ses


## Installation
```
# using yarn
yarn add strapi-provider-email-amazon-ses

# using npm
npm install strapi-provider-email-amazon-ses --save
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

