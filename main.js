leftwrist_x = 0;
rightWrist_x = 0;
difference = 0;
noseX=0;
noseY=0;



function setup() 
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

 function draw() 
 {
    background('#969A97');
    //document.getElementById("font_size").innerHTML = "Font size of the text will be = "+difference+"px"; 
    textSize(difference);
    fill("#00ff0a");
    text('hello' , 50,400);
 }

 function modelLoaded() 
 {
    console.log('PoseNet is Initialised');
 }

 function gotPoses(results) 
 {
   if(error) {
      console.error(error);
   }
    if(results.length > 0)
    {
        console.log(results);
         noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
         console.log("noseX = " + noseX+ "noseY = "+noseY);
        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist_x + " rightWrist_y = "+results[0].pose.rightwrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist_x + " leftWrist_y = "+results[0].pose.leftwrist.y);
         leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("leftWristX = " + leftWristX + "rightWristX" +rightWristX + "difference" + difference);

    }
 }