img = "";
status = "";

function setup()
{
    canvas = createCanvas(500, 700);
    canvas.position(400, 20);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload()
{
    img = loadImage('fridge.JPG');
}

function draw()
{
    image(img, 0, 0, 500, 700);
    fill("#3366cc");
    text("Refrigerator", 45, 75);
    noFill();
    stroke("#3366cc");
    rect(50, 60, 400, 250);

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