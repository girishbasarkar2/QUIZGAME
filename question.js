class Question {
    constructor(){
    this.optionA = ["red","Jaguar"];
    this.optionB = ["blue","Ford"];
    this.optionC = ["green","Ferrari"]; 
    this.optionD = ["yellow","BMW"];
    this.optionAButton=createButton(this.optionA[count]);
    this.optionBButton=createButton(this.optionB[count]); 
    this.optionCButton=createButton(this.optionC[count]);  
    this.optionDButton=createButton(this.optionD[count]);
    this.question=createElement('h4');
    this.questionBank=["What is Aditya's favourite colour?","What is Aditya's favourite car?"];
    this.solution=["A","C"];
    this.nextButton=createButton('NEXT>>');
    }

display(){
    this.question.html(this.questionBank[count]); 
   this.question.position(50,300);
   
   this.nextButton.position(200,600);
   this.nextButton.mousePressed(()=>{
   result.visible=false;    
   count=count+1;
   console.log(count);   
   this.question.html(this.questionBank[count]);  
   this.optionAButton=createButton(this.optionA[count]);
   this.optionAButton.position(50,350);
    this.optionBButton=createButton(this.optionB[count]); 
    this.optionBButton.position(50,400);
    this.optionCButton=createButton(this.optionC[count]); 
    this.optionCButton.position(50,450); 
    this.optionDButton=createButton(this.optionD[count]);
    this.optionDButton.position(50,500);
   });

   this.optionAButton.position(50,350);
   
   this.optionAButton.mousePressed(()=>{
       if(this.solution[count] === "A"){
        result.visible=true;
        //text("You are right",100,100);
       }
       else{
       result.addImage(youarewrongImage);
       result.visible=true    
       }
   });
   

   this.optionBButton.position(50,400);

   this.optionBButton.mousePressed(()=>{
    if(this.solution[count] === "B"){
        result.visible=true;
       // text("You are right",100,100);
    }
    else{
        result.addImage(youarewrongImage);
        result.visible=true;    
        }
    });
   
  
   this.optionCButton.position(50,450);
   
   this.optionCButton.mousePressed(()=>{
    console.log("C is pressed");
    if(this.solution[count] === "C"){
        result.visible=true;
        console.log("C is right")
       // text("You are right",100,100);
    }
    else{
        result.addImage(youarewrongImage);
        result.visible=true; 
        console.log("C is wrong");    
        }
    });
   

   this.optionDButton.position(50,500);
    
   this.optionDButton.mousePressed(()=>{
      
    if(this.solution[count] === "C"){
    result.visible=true;
   
   // text("You are right",100,100);
    }
    else{
        result.addImage(youarewrongImage);
        result.visible=true;  
        
        }
    });
}
}
   