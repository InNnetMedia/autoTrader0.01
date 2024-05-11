const btnSettings = document.createElement("button");
const btnAccept = document.createElement("button");
const cookieContainer = document.createElement("div");
let policyText = document.createElement("p");

policyText.textContent = "We use cookie that are strictly necessary for this website to function as well as for advertising purposes. Please refer to our cookie policy";




let timer = setTimeout(() => {
    btnAccept.textContent = "Accept all cookies";
    btnSettings.textContent = "Cookie settings";
    cookieContainer.appendChild(policyText);
    //console.log("Timer 8 seconds reached");
    cookieContainer.appendChild(btnAccept);
    cookieContainer.appendChild(btnSettings);

    let container = cookieContainer.classList;
    let btn1 = btnSettings.classList;
    let btn2 = btnAccept.classList;
    btn1.add("btnAccept");
    btn2.add("btnSettings");
    container.add("cookieContainer");
    document.body.appendChild(cookieContainer);
}, 9000);

btnAccept.addEventListener("click",() => {
    document.body.removeChild(cookieContainer);
    
    //Some functions to get cookies from the user
})
