const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');


console.log(`${mode}`);

if(!(mode == "human" || mode == "ai")){
    window.location = "./index.html";
}

