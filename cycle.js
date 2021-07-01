img = "";
status = "";
objects = [];

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
    fill("#3366cc");
    text("cycle", 45, 75);
    noFill();
    stroke("#3366cc");
    rect(30, 60, 210, 270);

    fill(" #ff0000");
    text("cycle", 290, 70);
    noFill();
    stroke("#ff0000");
    rect(230, 50, 250, 280);

    if(status != "")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("staus").innerHTML = "Status : Object Detected";

            fill("#0099ff");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%" + objects[i].x, objects[1].y);
            noFill();
            stroke("#0099ff");
            rect(objects[i].x, objectsi[i].y, objects[i].width, objects[i].height);

        }
    }
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
    object = results;
}