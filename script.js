var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code
btn.innerHTML = "Switch light on";
document.body.style.backgroundColor = "black";

btn.onclick = function(){
    if(btn.innerHTML == "Switch light on"){
        btn.innerHTML = "Switch light off"
        document.body.style.backgroundColor = "yellow";
        console.log("Light is on")
    }else{
        btn.innerHTML = "Switch light on"
        document.body.style.backgroundColor = "black";
        console.log("Light is off")
    }
        
};


// schijf hier tussen je code