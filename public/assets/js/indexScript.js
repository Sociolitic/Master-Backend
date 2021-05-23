var auth = firebase.auth()
var accountImage = document.querySelector('.accountImage')
var accountName = document.querySelector('.accountName')
var mainContainer = document.querySelector('.pcoded-main-container')

auth.onAuthStateChanged(user => {
    if(user){
        Guser=user
        signedIn=true
        console.log("Signed in");
        onSignedIn(user)
    }else{
        signedIn=false
        console.log("Signed Out");
        onSignOut()
    }
})
function onSignedIn(user){
    accountName.innerHTML = user.displayName
    accountImage.src = user.photoURL
    mainContainer.style.display = 'block'
    console.log(user.uid);
    var data = JSON.stringify({
        "user": user.uid
    });
    
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                    console.log(JSON.parse(this.responseText));
            }
    });
    
    xhr.open("POST", "http://localhost:8080/auth/fetch");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.send(data);
}

function onSignOut(){
    mainContainer.style.display = 'none'
    window.location.replace('/auth-signup.html')
}

document.querySelector('.gsignout').addEventListener("click",()=>{
    auth.signOut();
    deleteCookie("SocioliticId")
})