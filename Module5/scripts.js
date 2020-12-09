document.addEventListener("DOMContentLoaded",
    function (event){        
        function sayHello(){
            this.textContent = "Said it!";
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";
            document.getElementById("content").innerHTML = message;
            if(name === "student"){
                var title = document.querySelector("#title").textContent;
                title += "& Loving it!";
                document.querySelector("#title").textContent = title;
            }
        }
        document.querySelector("button").addEventListener("click",sayHello);
        //document.querySelectro("button").onclick = sayHello;
            }
);
