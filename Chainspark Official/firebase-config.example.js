// firebase-config.example.js
// Copy this file to firebase-config.js and add your actual credentials
// DO NOT commit firebase-config.js to GitHub!

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.FIREBASE_CONFIG = firebaseConfig;
}

