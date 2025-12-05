const changeColor = function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalId;
const startChangingColor = function(){
    intervalId = setInterval(changeingColor,1500)
    function changeingColor(){
        document.body.style.backgroundColor = changeColor()
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId=null;
}

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)

