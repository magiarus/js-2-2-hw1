const inputForm = document.getElementById("form")
const inputValue = document.querySelector("#inputEmail")
const errorText = document.createElement("p")

inputForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue.value)){
        alert("Вы успешно зарегались")
        errorText.remove()
        inputValue.style.borderColor = "black"
    }else{
        errorText.textContent = "не правильный Email"
        errorText.style.color = "red"
        inputValue.style.borderColor = "red"
        inputForm.append(errorText)
        
    }
})