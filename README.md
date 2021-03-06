# ff-test

A backend is currently deployed on AWS so the react + react native apps should work out the box.
If you like you can deploy the the backend yourself with the following steps.

# Serverless backend deployment

[Install serverless](https://www.serverless.com/framework/docs/getting-started/)

```
cd aws-node-rest-api-with-dynamodb
serverless deploy
```

If successful, the terminal output will include your API endpoints. Copy the POST endpoint as we will need that later when configuring our front end. It will look like this where XXXXXXXX is unique to your deployment.

```
https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos
```

# React front-end deployment

At the top of `api.js` in `web-front-end` you will find a variable called `URL_BASE`. replace its value with your endpoint.

```
cd web-front-end
npm install
npm start
```

# React-native deploy guide

In `react-native-frontend` there is also an `api.js` file. Repeat the same process with the `URL_BASE` value like before.

```
npm install -g expo-cli
cd react-native-frontend
npm install
npm start
```

This will start the metro bundler app in a tab in your browser.
Download the Expo app for android or iPhone, scan the QR code in metro bundler to test the react native app.
