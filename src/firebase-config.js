/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDOQXX5mymdcG0-xLPruH3iQuJWF17FY2c",
  authDomain: "chat2-7d546.firebaseapp.com",
  projectId: "chat2-7d546",
  storageBucket: "chat2-7d546.appspot.com",
  messagingSenderId: "205229888721",
  appId: "1:205229888721:web:794a0b54634c3d500061f0",
  measurementId: "G-VZC9ZFCBWT"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
