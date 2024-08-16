window.addEventListener("Keydown", function(e){
    if(e.key == 'q'){
        console.log("Apertou a letra q");
    }
});

window.addEventListener("Keyup", function(e){
    if(e.key == "Enter"){
        console.log("Soltou o enter");
    }
})