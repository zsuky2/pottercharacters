var input = document.getElementById("character-name");
var img = document.getElementById("character-img");
var character = document.getElementById("character");
var house = document.getElementById("character-house");

document.getElementById("btn").addEventListener("click", function () {

    var url = `http://hp-api.herokuapp.com/api/characters/${input.value}`;

    var xhr = new XMLHttpRequest();
    

    xhr.open("GET", url, true);

    xhr.onload = function () {

        if (xhr.status === 200) {

            var potter = JSON.parse(xhr.responseText);


            var output="";

            for(var i in potter){

                output+=`
                
                    <div>
                        <h3>${potter[i].name}</h3>
                        <p>${potter[i].house}</p>
                        <img src='${potter[i].image}'>
                    </div>
                
                `;

            }

            document.getElementById("character-result").innerHTML = output;


        }
    }
    xhr.send();
})