//variables for backgrounds
var artClassImg, classroomImg, gymImage, hallwayImg, lunchroomImg;
//variables for sprites
var boyStudentImg, girlStudentImg, meanTeacherImg, teacherImg, tomWalkAnimation, tomStandingImg, basketballImg;
//variables for objects
var classroom, artClassroom, gym;
//variables for normal class
var tom, teacher;
//variables for art class
var girlStudent, artTeacher;
//variables for gym class
var boyStudent, gymTeacher, basketball;
var gameState;


function preload(){
    artClassImg = loadImage("artClassroom.png");
    classroomImg = loadImage("classroom1.jpg");
    gymImage = loadImage("gym.jpg");
    hallwayImg = loadImage("hallway.png");
    lunchroomImg = loadImage("lunchroom.jpg");

    boyStudentImg = loadImage("boyStudent.png");
    girlStudentImg = loadImage("girlStudent.png");
    meanTeacherImg = loadImage("meanTeacher.png");
    teacherImg = loadImage("teacher1.png");
    basketballImg = loadImage("basketball.png");

    tomWalkAnimation = loadAnimation("boy1.png","boy2.png", "boy3.png", "boy4.png", "boy5.png", "boy6.png" )
    tomStandingImg = loadAnimation("boy3.png");
}

function setup(){
    createCanvas(1000,800);
    gameState = "classroom";

    canvas = createSprite(500,400,1000,800);
    canvas.addImage(classroomImg);

    classroom = new Classroom();

    artClassroom = new ArtClassroom();

    gym = new Gym();
}

function draw(){
    background(0);

    if(gameState==="classroom"){
        canvas.addImage(classroomImg);
        canvas.scale = 1.7;
        console.log(gameState);
        classroom.display();
    }

    if(gameState==="artClass"){
        canvas.addImage(artClassImg);
        canvas.scale=0.8;
        artClassroom.display();
       // artClassroom.walkAway();
    }
    if(gameState==="gymClass"){
        canvas.addImage(gymImage);
        gym.display();
       // gym.walkAway();
    }
    
    drawSprites();
}