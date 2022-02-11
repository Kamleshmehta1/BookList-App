const names = document.querySelector("#fname");
const author = document.querySelector("#lname");
const details = document.querySelector("#details");


// ---------------------------prevent default behaviour----------------------------------------------------

[names, author, details].forEach(element => {
    element.addEventListener("keydown", (event) => {
        console.log(event.key);
        if (event.key == "Enter") {
            console.log(true);
            event.preventDefault()
        }
    })
});


// ---------------------------------------------------------------------------------------



window.addEventListener("DOMContentLoaded", () => {
    autoload()
})


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


function submit() {


    if (names.value === "" && author.value === "" && details.value === "") {
        return;
    }

    let section = document.querySelector("table")

    var random = makeid(5);
    var randomNames = makeid(5)
    var randomAuthor = makeid(5)
    var randomDetails = makeid(5)
    var random = document.createElement("tr");

    localStorage.setItem(randomNames, names.value);
    localStorage.setItem(randomAuthor, author.value);
    localStorage.setItem(randomDetails, details.value);



    section.appendChild(random);

    //-----------------------------------------------------------one--------------------------------------------
    let td = document.createElement("td");
    let textNode = document.createTextNode(localStorage.getItem(randomNames));
    td.appendChild(textNode);
    random.appendChild(td);
    //----------------------------------------two---------------------------------------------------------
    let td1 = document.createElement("td");
    let textNode1 = document.createTextNode(localStorage.getItem(randomAuthor));
    td1.appendChild(textNode1);
    random.appendChild(td1);
    // --------------------------------------------------------------------------------------------------------
    let td2 = document.createElement("td");
    let textNode2 = document.createTextNode(localStorage.getItem(randomDetails));
    td2.appendChild(textNode2);
    random.appendChild(td2);
    // -------------------------------------------three----------------------------------------------------------

    let td3 = document.createElement("button");
    let textNode3 = document.createTextNode("cross");
    td3.appendChild(textNode3);
    random.appendChild(td3);
}

function autoload() {


    document.querySelector("table").innerHTML =  JSON.stringify(pn)


}