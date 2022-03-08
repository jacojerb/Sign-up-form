const password = document.querySelector("#password")
const passwordCheck = document.querySelector("#passwordConfirm")
passwordCheck.addEventListener("keyup", function() {
    if(password.value===passwordCheck.value) {
        passwordCheck.setCustomValidity("")
    } else {
        passwordCheck.setCustomValidity("Not valid")
    }
})