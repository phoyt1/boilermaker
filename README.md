# Photographer


Photographer is an image sharing appliaction for anyone who signs up for an acount! Users can upload images and view other user's accounts.

## Setup

* `npm install`, or `yarn install` - whatever you're into
* Create two postgres databases: `photographer` and `photographer-test`
  * By default, running `npm test` will use `photographer-test`, while regular development uses `photographer`
* Running the app for the first time will require `Force=true` in the syncDb function `(server/index.js)`.. this creates the models and associations in the DB
* You will need your own AWS S3 instance in order to upload photos
* I chose to disable Google OAuth so that users create their own username ... but if you wish to checkout the OAuth stuff you can follow these steps:
  * Create a file called `secrets.js` in the project root
  * This file is `.gitignore`'d, and will *only* be required in your *development* environment
  * Its purpose is to attach the secret env variables that you'll use while developing
  * However, it's **very** important that you **not** push it to Github! Otherwise, *prying eyes* will find your secret API keys!
  * It might look like this:

  ```
    process.env.GOOGLE_CLIENT_ID = 'hush hush';
    process.env.GOOGLE_CLIENT_SECRET = 'pretty secret';
    process.env.GOOGLE_CALLBACK = '/auth/google/callback';
    process.env.AWS_SECRET_ACCESS_KEY = 'dsfdsf';
    process.env.AWS_ACCESS_KEY_ID = 'dsfdf';
    process.env.S3_BUCKET_NAME = 'sdfsdfds';
  ```

* To use OAuth with Google, complete the step above with a real client ID and client secret from Google
  * You can get them here: https://console.developers.google.com/apis/credentials
* A link to "Login with Google" needs to be created in AuthForm.js

## Start

`npm run start-dev` will make great things happen!

If you want to run the server and/or webpack separately, you can also `npm run start-server` and `npm run build-client`.

From there, just follow your bliss.
