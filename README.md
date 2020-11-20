# Hello Express Serverless

This is a simple example deploys an Express app as a Lambda function.

## A Few Pitfalls I Feel For
1. The AWS Creds need to be named as 'default' in the .aws/credentials
2. Claudia needs a IAM profile with full Access to IAM, Lambda, and API Gateway
3. The JS File needs to be ES5 syntax
    - So like "const express = require('express')" and "module.exports = app" NOT "export default"
    - You can use babel to compile it down, but i didn't want to do that for a 'hello' type 
4. For some reason being on my corporate VPN caused issues

## Running the example

1. run `npm install` to grab the dependencies
2. run `npm run generate-proxy` to create a simple proxy API for the express app
3. run `npm run deploy` to send everything up to AWS Lambda

The third step will print out a URL you can use to access the express app.

## Updating the app

1. Change [`app.js`](app.js)
2. (Optionally) use `npm install <PACKAGE NAME> -S` to install additional dependencies (always save them to `package.json` using `-S`)
3. Run `npm run update` to send the new version up to AWS. No need to generate the proxy again

## More information and limitations

See the [Running Express Apps in AWS Lambda](https://claudiajs.com/tutorials/serverless-express.html) tutorial.