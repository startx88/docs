/**
 * Google fireabase authentication
 * Firebase authentication provide backend services, easy to use SDKs to authenticate user to your app.
 * Its support authentication by Mobile, Password or other popular federated identitiy provider.
 * Like: Google, Facebook, Twitter and Github
 */

/**
 * Authenticate via email and password
 * firebase provide build in methods to authenticate via password.
 * Error Codes:
 * 1. auth/email-already-in-use: Thrown if there already exists an account with the given email address.
 * 2. auth/invalid-email: Thrown if the email address is not valid.
 * 3. auth/operation-not-allowed: Thrown if email/password accounts are not enabled.
 * 4. auth/weak-password: Thrown if the password is not strong enough
 */

firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then()
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

firebase
  .auth()
  .then()
  .signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

firebase
  .auth()
  .signOut()
  .then(function() {
    // Sign-out successful.
  })
  .catch(function(error) {
    // An error happened.
  });

/**
 * There are many auth provider
 * 1. EmailAuthProvider
 * 2. FacebookAuthProvider
 * 3. GithubAuthProvider
 * 4. GoogleAuthProvider
 * 5. OAuthProvider
 * 6. PhoneAuthProvider
 * 7. TwitterAuthProvider
 */

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return auth.signInWithPopup(provider);
};

/**
 * Sign in with Faceebook
 */
export const signinWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return auth.signInWithPopup(provider);
};
/**
 * Sign in with github
 */
export const signinWithGitHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return auth.signInWithPopup(provider);
};
/**
 * Auth with mobile
 */
export const signinWithMobile = () => {
  const provider = new firebase.auth.PhoneAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return auth.signInWithPopup(provider);
};

export const Logout = () => {
  return auth.signOut();
};
