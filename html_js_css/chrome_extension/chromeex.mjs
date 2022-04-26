let myleads = [];
const inputbtn = document.querySelector("#input-button");
const deletebtn = document.querySelector("#delete-button")
const inputel = document.querySelector("#input-el");
const tabbtn = document.querySelector("#tab-btn");
const ulel = document.querySelector("#ul-el");



const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"));

if (leadsfromlocalstorage) {
    myleads = leadsfromlocalstorage;
    renderleads(myleads);
}


tabbtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads", JSON.stringify(myleads));
        renderleads(myleads);
    })

})

function renderleads(leads) {

    let listitems = "";
    for (let i = 0; i < leads.length; i++) {
        //     ulel.innerHTML += "<li>" + myleads[i] + "</li >";

        // or
        // const li = document.createElement("li");
        // li.textContent = myleads[i];
        // ulel.append(li);





        // listitems += "<li><a href='" + myleads[i] + "' target='_blank'>" + myleads[i] + "</a></li >";
        // or
        // easy one to use tamplate strings
        listitems += `<li> 

        <a href='${leads[i]}' target='_blank'>
        ${leads[i]}
        </a>
        
                       </li >`;

    }

    ulel.innerHTML = listitems;
}
inputbtn.addEventListener("click", function () {
    myleads.push(inputel.value);
    inputel.value = "";
    localStorage.setItem("myleads", JSON.stringify(myleads));
    renderleads(myleads);
})

deletebtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myleads = [];
    renderleads(myleads);


})


// local storage
// localStorage.setItem("myleads", "www.helloworld.com");
// let hero = localStorage.getItem("myleads");
// localStorage.clear();
// console.log(hero);




