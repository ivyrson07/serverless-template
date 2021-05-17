# Base Serverless Framework Template


## What's included
* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url LINK_OF_TEMPLATE_REPOSITORY
cd YOUR_PROJECT_NAME
npm install
```

## Serverless CLI commands
* sls create --name YOUR_PROJECT_NAME --template [available templates](https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/#available-templates)
* sls deploy -v, to deploy your project and create new stack
* sls remove -v, to remove your stack

You are ready to go!
