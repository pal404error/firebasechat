/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyB41nNz0Xym9UTpfCF2LyrdRG8gaAUJsRo",
  authDomain: "chatcafelogic.firebaseapp.com",
  databaseURL: "https://chatcafelogic-default-rtdb.firebaseio.com",
  projectId: "chatcafelogic",
  storageBucket: "chatcafelogic.appspot.com",
  messagingSenderId: "1082856990507",
  appId: "1:1082856990507:web:67c867d596716aa9a9476e",
  measurementId: "G-LZSXMHQGSC"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
