var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

//when server is down or erroe occur
function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server, try again after some time")
}

btnTranslate.addEventListener("click", function clickHandler(){
   var inputText = textInput.value; // takinig input

    //Calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; // output
         })
    .catch(errorHandler)
    
})

