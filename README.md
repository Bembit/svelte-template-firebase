# create svelte@latest 
###### vitest, eslint, typescript

###### npm i

###### npm i firebase firebase-admin

# basic config and start of firebase setup

###### added dotenv.example and service-account.example for .. examples

###### https://firebase.google.com/ - get started - add a project - enter project name - finish

###### click on the web icon, enter app name

###### paste the sdk config to /lib/firebase.ts
###### this apiKey should be public, read more in /lib/firebase.ts

###### project overview / settings / service accounts / generate new private key / download
###### paste into /service-account.json

###### copy project_id from service-account.json to FIREBASE_PROJECT_ID="" in .env
###### copy client_email from service-account.json to FIREBASE_CLIENT_EMAIL="" in .env
###### copy private_key from service-account.json to FIREBASE_PRIVATE_KEY="" in .env

# setting up the firebase admin sdk

###### /lib/server/admin.ts

# login methods

### google
###### no extra setup needed, just enable google auth in firebase / authentication / providers

###### /login /routes/login/+page.svelte

###### login errors out from 127.0.0.1:5173, use localhost or add the ip to firebase authorised domains


### facebook login

###### create app on facebook dev, copy app ID and app secret to firebase auth methods 

###### moved FACEBOOK_APP_ID="123" and FACEBOOK_API_VERSION="v1.0" to .env

###### https://developers.facebook.com/apps/app_id123here/fb-login/settings/
###### https://sveltekit-template-firebase.firebaseapp.com/__/auth/handler