const body= document.getElementById("body")
const dark_light_div = document.getElementById("dark_light");
const dark_mode = document.createElement("img");
const light_mode = document.createElement("img");
dark_mode.setAttribute('src' , '../moon.png');
light_mode.setAttribute('src', '../sun.png');
light_mode.classList.add("dark_light_img");
dark_mode.classList.add("dark_light_img");
dark_light_div.appendChild(light_mode);

let dark = false;



const onChangeModeHandler = () =>{
    if(dark === false){
        dark_light_div.removeChild(light_mode);
        dark_light_div.appendChild(dark_mode);
        body.style.backgroundColor = "#000";
        dark= true ;
        window.dark = dark;

    }
    else{
        dark_light_div.removeChild(dark_mode);
        dark_light_div.appendChild(light_mode);
        body.style.backgroundColor = "#472183";
        dark=false;
        window.dark = dark;
    }
};

dark_light_div.addEventListener("click", onChangeModeHandler);
<div class="top">
<div id="dark_light">
            </div>
            </div>