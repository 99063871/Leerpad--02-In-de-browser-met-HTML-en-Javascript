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
    }else{
        btn.innerHTML = "Switch light on"
        document.body.style.backgroundColor = "black";}
        
};


// schijf hier tussen je code