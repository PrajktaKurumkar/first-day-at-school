class Gym{
    constructor(){
        this.tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" );
        this.basketballButton = createButton('      ');
        this.text1 = createElement("h3");
        this.text2 = createElement("h3");
        this.text3 = createElement("h3");
        this.text4 = createElement("h3");

    }
    display(){
        basketball = createSprite(100,650,40,40);
        basketball.addImage("basketball", basketballImg);
        this.basketballButton.position("100,650");

        boyStudent = createSprite(400,650,40,40);
        boyStudent.addImage("boy student",boyStudentImg);
        gymTeacher = createSprite(200,650,40,40);
        teacher.addImage("teacher", teacherImg);
        
        this.text1.html("Tom go back to class.");
        this.text1.position(300,600);

        this.text2.html("I am trying to find the bathroom, teacher.");

        this.text3.html("You can go after you find the basketball.");

        this.basketballButton.mousePressed(()=>{
            this.basketballButton.hide();
            basketball.hide();
            this.text4.html("Thank you for finding my ball!");
            this.text4.position(300,500);
            tom.walkAway();
        })

        
    }
    walkAway(){
        tom.changeAnimation("walk animation",tomWalkAnimation);
        //gameState = "gymClass";
    }
}