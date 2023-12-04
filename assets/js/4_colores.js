        
        
        const divA = document.querySelector("#a")
        const divB = document.querySelector("#b")
        const divC = document.querySelector("#c")
        const divD = document.querySelector("#d")
        const keyDiv = document.querySelector("#key");
        
        const changeBackgroundColor = (event) => {
            event.target.style.backgroundColor = "black";
        };

        divA.addEventListener("click", changeBackgroundColor)
        divB.addEventListener("click", changeBackgroundColor)
        divC.addEventListener("click", changeBackgroundColor)
        divD.addEventListener("click", changeBackgroundColor)
        
        
        let color = ""
        document.addEventListener('keydown', function (event) {
            if (event.key === 'a') {
                keyDiv.style.backgroundColor = "pink";
            } else if (event.key === 's') {
                keyDiv.style.backgroundColor = "orange";
            } else if (event.key === 'd') {
                keyDiv.style.backgroundColor = "skyblue";
            } else if (event.key === 'q') {
                createNewDiv("purple");
            } else if (event.key === 'w') {
                createNewDiv("gray");
            } else if (event.key === 'e') {
                createNewDiv("brown");
            }
        });

        function createNewDiv(color) {
            const newDiv = document.createElement("div");
            newDiv.style.width = "200px";
            newDiv.style.height = "200px";
            newDiv.style.margin = "50px";
            newDiv.style.backgroundColor = color;
            document.body.appendChild(newDiv);
        }