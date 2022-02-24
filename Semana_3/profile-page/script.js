console.log("page loaded...");

function request()
{
	var cant_request = document.querySelector("#cant-request");
	var value = cant_request.innerText;
    if(value > 0)
    {
        value--;
        cant_request.innerText = value;
    }
    var card = document.querySelector(".card-list-item");
    card.remove();
}

function requestA()
{
	var cant_request = document.querySelector("#cant-request");
    var cant_connections = document.querySelector("#cant-connections");
    
	var value = cant_request.innerText;
    var value_2 = cant_connections.innerText;
    if(value > 0)
    {
        value--;
        cant_request.innerText = value;
        value_2++;
        cant_connections.innerText = value_2;
    }
    var card = document.querySelector(".card-list-item");
    card.remove();
}