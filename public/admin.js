
 const config = {
            apiKey: "AIzaSyA6ll2lfKu0gxOcnlfqb54IRNLaRUUil8Q",
            authDomain: "randtest-e8199.firebaseapp.com",
            databaseURL: "https://randtest-e8199.firebaseio.com",
            storageBucket: "randtest-e8199.appspot.com",
            messagingSenderId: "109752125195"
        };
        firebase.initializeApp(config);

(function() {

        // get elements
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const btnLogin = document.getElementById('btnLogin');
        const btnLogout = document.getElementById('btnLogout'); 

        btnLogin.addEventListener('click', e => {
            
            // Get email and password
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();
            
            //sign in
            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
        });

        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut();
        });

        //add realtime listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                console.log(firebaseUser);
                btnLogout.classList.remove('hide');
            } else { 
                console.log('not logged in');
                btnLogout.classList.add('hide');


            }
        });
}());
 

