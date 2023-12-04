//function pintar(){
//    ele.style.backgroundColor = 'yellow'
//    }
    
//    const ele = document.getElementById("ele1")
//    ele.addEventListener("click", pintar);

    let ele = document.getElementById("ele1")
    ele.addEventListener("click", () => {
        pintar(ele)
    });
    
    
    function pintar(ele, color = 'yellow') {
        ele.style.backgroundColor = color
    }