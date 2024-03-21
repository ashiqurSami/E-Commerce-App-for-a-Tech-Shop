
export function setEmail(email) {
    sessionStorage.setItem("email", email)
}

export function getEmail (){
    return sessionStorage.getItem('email')
}

export function unauthorized(code){
    if(code===401){
        sessionStorage.clear();
        localStorage.clear();
        window.location.href="/login"
    }
}