<script lang="ts">

import { auth } from "$lib/firebase";

import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// updateProfile

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

// facebook login starts here

async function signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user)
}

const FacebookLogin = async () => {
    try {
        const user = await signInWithPopup(auth, fbProvider);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

const fbProvider = new FacebookAuthProvider();
    const FacebookProvider = async () => {
        try {
            const result = await signInWithPopup(auth, fbProvider);
            const credential = await FacebookAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
            // await updateProfile(auth.currentUser, { photoURL: photoUrl });
        } catch (error) {
            console.log(error);
        }
    };


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