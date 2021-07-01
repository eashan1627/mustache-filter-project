function setup(canvas) { 
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);

 }
 
 function modelLoaded() {
    console.log("Model is loaded sucessfully");
 }

 function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, nose_x - 25, nose_y, 50, 30);
 }
 
 function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
 }

 function take_snapshot() {
    save('mustache_face.jpg');
 }

 function gotposes(results) {
    if (results.length > 0){
       console.log(results);
       nose_x = results[0].pose.nose.x;
       nose_y = results[0].pose.nose.y;
       console.log("nose x = " + nose_x);
       console.log("nose y = " + nose_y);
    }
 }

 var nose_x = 0;
var nose_y = 0;