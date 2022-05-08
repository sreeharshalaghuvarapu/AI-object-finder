video = createCapture(VIDEO);
 video.size(380,380);
  video.hide();

function draw() {
    image()
    image(video, 0, 0, 480, 380)
    }
function start() 
{
    objectDetector = ml5.objectDetector('cocossd',modelLoded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoded() {
    console.log("model Loded!")
    status = true
}