img = "";
status = "";

function setup()
{
    canvas = createCanvas(500, 350);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload()
{
    img = loadImage('Cycle.JPG');
}

function draw()
{
    image(img, 0, 0, 500, 350);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}