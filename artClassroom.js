class ArtClassroom{
    constructor(){
        this.tomStandingImg = loadAnimation("tom/boy3.png");
        this.tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" );
        this.text = createElement("h3");

    }
    display(){

        tom = createSprite(200,650,40,40);
        tom.addAnimation("stand",tomStandingImg);
        tom.scale = 0.7;

        tom.changeAnimation("tom walk", tomWalkAnimation);

        girlStudent = createSprite(400,650,40,40);
        girlStudent.addImage("girl student",girlStudentImg);
        artTeacher = createSprite(600,650,40,40);
        teacher.addImage("mean teacher", meanTeacherImg);
        
        this.text.html("Tom what are you doing here?");
        this.text.position(350,500);
    }
    walkAway(){
        tom.changeAnimation("walk animation",tomWalkAnimation);
        gameState = "gymClass";
    }
}