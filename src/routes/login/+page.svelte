<script lang="ts">

// /lib/firebase.ts has the exports for firebase
import { auth } from "$lib/firebase";

import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// updateProfile

// GOOGLE login
// login errors out from 127.0.0.1:5173, use localhost or add the ip to firebase authorised domains
async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    // added custom prompt to select account and avoid auto login every time
    // user should be able to select account after logout
    provider.setCustomParameters({ prompt: "select_account" });
    const user = await signInWithPopup(auth, provider);
    // check if user shows up in console
    console.log(user)
}

// FACEBOOK login
async function signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    // customParams need more digging for fb
    // provider.setCustomParameters({ auth_type: "reauthenticate" });
    const user = await signInWithPopup(auth, provider);
    // auth with facebook works. if I relog with same email google, google overwrites facebook
    // after trying to relog with facebook get an error
    // FirebaseError: Firebase: Error (auth/account-exists-with-different-credential).
    // should be able to link accounts by default
    // catch the error, and instead of useful error message "already exists" show "something went wrong"
    console.log(user)
}

// auth provider linking merging wow sounds fun already
// https://firebase.google.com/docs/auth/web/account-linking?hl=en&authuser=0

// create email / pass auth?
async function createUserWithEmailAndPassword() {
    // this requires db write
}

</script>

<h2>Login +page</h2>

<button class="btn" on:click={signInWithGoogle}>Sign in with Google</button>
<button class="btn" on:click={signInWithFacebook}>Sign in with Facebook</button>