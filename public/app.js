
    const config = {
            apiKey: "AIzaSyA6ll2lfKu0gxOcnlfqb54IRNLaRUUil8Q",
            authDomain: "randtest-e8199.firebaseapp.com",
            databaseURL: "https://randtest-e8199.firebaseio.com",
            storageBucket: "randtest-e8199.appspot.com",
            messagingSenderId: "109752125195"
        };
        firebase.initializeApp(config);



var provider = new firebase.auth.GoogleAuthProvider(); 

    function googleAuth(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user.displayName);
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        });
    }


(function() { 

        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const btnLogin = document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('btnSignUp');
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

        // add signup event
        btnSignUp.addEventListener('click', e => {
        	// Get email and password
        	const email = txtEmail.value;
        	const pass = txtPassword.value;
        	const auth = firebase.auth();
        	//sign in
        	const promise = auth.createUserWithEmailAndPassword(email, pass);
        	promise.catch(e => console.log(e.message));
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
 

