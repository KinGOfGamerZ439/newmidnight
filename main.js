function setup()
{
  canvas=createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  classsifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LjKcXWFVT/model.json', modelLoaded);
}
function modelLoaded()
  {
console.log('model is loaded')
  }

function draw()
{
  image(video,0,0,300,300);
classsifier.classify(video, gotresult);
}
function gotresult(error, results)
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
    document.getElementById("Corona_Voice_Rec").innerHTML=results[0].label;
    document.getElementById("Devam_Moring").innerHTML=results[0].confidence.toFixed(3);
  }
}
