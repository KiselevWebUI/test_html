document.addEventListener("DOMContentLoaded", ()=>{

    const value = document.querySelector("#rangeText");
    const input = document.querySelector("#range");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });

    const valueFile = document.querySelector("#fileText");
    const inputFile = document.querySelector("#file");
    inputFile.addEventListener("input", (event) => {
        if(event.target.files[0]){
            valueFile.innerHTML = "<div>" + event.target.files[0].name + "</div>";
            valueFile.classList.add('file-added');
        }
    });

});