importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey:
    "BEisA-_Hil8hoEipviRbSKZOB3ESfnKi68ppXvsyl1xiD30vIAVeMSyPIZTdTsupdxi7h6Cn6U9m85HYFDMAWfI",
  authDomain: "fluid-1f156.firebaseapp.com",
  projectId: "fluid-1f156",
  storageBucket: "fluid-1f156.appspot.com",
  messagingSenderId: "633954875674",
  appId: "1:633954875674:web:7db8d7ad2ae0d659ebd4a3",
  measurementId: "G-PQC14GKLS2",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png", // customize this as needed
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
