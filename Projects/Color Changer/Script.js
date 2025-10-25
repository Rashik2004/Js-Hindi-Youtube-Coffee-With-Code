const buttons= document.querySelectorAll(".box")
const body = document.querySelector("body")

buttons.forEach(function (buttons){
    buttons.addEventListener('click', function(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id==='red'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id==='green'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor= e.target.id;
        }
    })
});
