function sayHello(){
    var name = document.getElementById("name").nodeValue;
    var message = "<h2>Hello " + name + "!</h2>";
    document.getElementById("content").innerHTML = message;
    if(name === "student"){
        var title = document.querySelector("#title").textContent;
        title += "& Loving it!";
        document.querySelector("#title").textContent = title;
    }
}