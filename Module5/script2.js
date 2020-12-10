document.addEventListener("DOMContentLoaded",
    function (event){
        document.querySelector("button").addEventListener("click",
            function(){
                $ajaxUtils.sendGetRequest("names.json",
                    function(res){
                        var message = res.firstName + " " + res.secondName;
                        if(res.likesChineseFood){
                            message += " likes Chinese food";
                        }
                        else{
                            message += " doesn´t like Chinese food";
                        }
                        message += " and uses ";
                        message += res.numberOfDisplays;
                        message += " displays for coding.";
                        document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
                    }
                );
            }
        );
    }
);