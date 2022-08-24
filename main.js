var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
var vi="";
function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;

       document.getElementById("textbox").innerHTML = Content;
       console.log(Content);


       if(Content=="take my selfie")
       {
        console.log("taking selfie*** ");
       speak();
       }
}





function speak(){

    var synth = window.speechSynthesis;

    speak_data=document.getElementById("textbox").value ;
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
   
    setTimeout(function()
{

    take_snapshot();
     vi="selfie1"
}, 4000); 

   
setTimeout(function()
{

    take_snapshot();
     vi="selfie2"
}, 8000);

   
setTimeout(function()
{

    take_snapshot();
     vi="selfie3"
}, 12000);



}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:500,
    image_format : 'jpeg',
    jpeg_quality:90

});


function take_snapshot()
{
    
    Webcam.snap(function(data_uri){
       if (vi ="selfie1"){
        document.getElementById("result1").innerHTML ='<img id="selfie1_image" src="'+data_uri+'"/>  ';
       }
       
       if (vi ="selfie2"){
        document.getElementById("result2").innerHTML ='<img id="selfie2_image" src="'+data_uri+'"/>  ';
       }
      
       if (vi ="selfie3"){
        document.getElementById("result3").innerHTML ='<img id="selfie3_image" src="'+data_uri+'"/>  ';
       }

});
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();

}