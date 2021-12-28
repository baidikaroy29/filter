nose_X = 0;
nose_Y = 0;

function preload()
{
    lipstik = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("poseNet is initialized!");
}

function gotPoses(results)
{
    if (results > 0)
    {
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
    }
    console.log(results);
    console.log("nose x = " + nose_X );
    console.log("nose y = " + nose_y );
}

function draw()
{
   image(video, 0, 0, 300, 300);
   image(lipstik, nose_X, nose_Y, 20, 20)
}

function take_snapshot()
{
    save("GatuFilterImage.png");
}