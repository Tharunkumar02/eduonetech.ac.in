// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlBh6uhSaE3PofmBq6ty63oNbSbE9wKlA",
  authDomain: "user-login-2b536.firebaseapp.com",
  projectId: "user-login-2b536",
  storageBucket: "user-login-2b536.appspot.com",
  messagingSenderId: "657616935324",
  appId: "1:657616935324:web:a734e57c5b4684ad0cd059",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function save() {
  var firstName = document.querySelector("[data-first-name]").value;
  var lastName = document.querySelector("[data-last-name]").value;
  var email = document.querySelector("[data-email]").value;
  var password = document.querySelector("[data-signUp-pwd]").value;
  var signinEmail = document.querySelector("[data-signin-email]").value;
  var signinPassword = document.querySelector("[data-signin-pwd]").value;

  database.ref("users/" + email).set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    signinEmail: signinEmail,
    signinPassword: signinPassword,
  });
}

function update() {
  var firstName = document.querySelector("[data-first-name]").value;
  var email = document.querySelector("[data-email]").value;
  var password = document.querySelector("[data-signUp-pwd]").value;

  var updates = {
    email: email,
    password: password,
  };

  database.ref("users/" + firstName).update(updates);
}

function remove() {
  var firstName = document.querySelector("[data-first-name]").value;
  var signinEmail = document.querySelector("[data-signin-email]").value;

  database.ref("users/" + firstName).remove();
  database.ref("users/" + signinEmail).remove();
}
