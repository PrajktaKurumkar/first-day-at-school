class Classroom{
    constructor(){
        this.startButton = createButton('START');
        this.text = createElement("h3");
        this.text1 = createElement("h1");
        this.teacherImg = loadImage("sprites/teacher1.png");
        this.tomStandingImg = loadAnimation("tom/boy3.png");
        this.tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" );
        this.leaveButton = createButton('Leave Class');
    }
    display(){
        gameState = "classroom";

        tom = createSprite(400,650,40,40);
        tom.addAnimation("stand",tomStandingImg);
        tom.scale = 0.7;
    
        teacher = createSprite(650, 380, 40, 40);
        teacher.addImage(teacherImg);
        teacher.scale = 0.6;

        this.startButton.position(400,400);
        this.startButton.mousePressed(()=>{
            this.startButton.hide();
            this.text.html("May I go to the bathroom?");
            this.text.position(450,500);
            this.text1.html("Yes");
            this.text1.position(800,200);
            this.leaveButton.position(450,600);
        })

        this.leaveButton.mousePressed(()=>{
          //  image( tomWalkAnimation,400,200);
            tom.changeAnimation("walk",tomWalkAnimation);
            gameState = "artClass";
            this.teacherImg.hide();
        })

    }
    walkAway(){
        tom.changeAnimation("walk animation",tomWalkAnimation);
        gameState = "artClass";
    }
}