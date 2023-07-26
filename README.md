# create svelte@latest 
# vitest, eslint, typescript

# npm i

# npm i firebase firebase-admin

# added dotenv.example and service-account.example for .. examples

# https://firebase.google.com/ - get started - add a project - enter project name - finish

# click on the web icon, enter app name

# paste the sdk config to /lib/firebase.ts
# this apiKey should be public, read more in /lib/firebase.ts

# project overview / settings / service accounts / generate new private key / download
# paste into /service-account.json

# copy project_id from service-account.json to FB_PROJECT_ID="" in .env
# copy client_email from service-account.json to FB_CLIENT_EMAIL="" in .env
# copy private_key from service-account.json to FB_PRIVATE_KEY="" in .env
