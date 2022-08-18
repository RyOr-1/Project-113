Webcam.set({
  width: 350,
  height: 350,
  image_format: "jpeg",
  jpeg_quality: 100,
});

Webcam.attach("camera");

function takePicture() {
  Webcam.snap(function (dataUri) {
    document.getElementById("result").innerHTML =
      "<img id='imgResult' src='" + dataUri + "'><br><br>";
  });
}

var classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/Tx2Ch7TDo/model.json",
  modelLoaded
);

function modelLoaded() {
  console.log("he");
}

function idnPicture() {
  var capImg = document.getElementById("imgResult");
  classifier.classify(capImg, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error)
    }
    else{
        console.log(results)
        console.log(results[0].label)
        console.log(results[0].confidence)
        document.getElementById("name").innerHTML = results[0].label
        document.getElementById("acru").innerHTML = results[0].confidence
    }
}
