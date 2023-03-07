function abc(){
    console.log(localStorage.length)
    for(var i=0;i<localStorage.length;i++){
        console.log(localStorage.getItem(`Image-${i+1}`))
    }
}