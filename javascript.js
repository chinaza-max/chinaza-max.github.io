    let i=0;
    function display(){
        document.getElementById("first_display").innerHTML="";
        if(i==0){
            document.getElementById("second_display").innerHTML="<h2 style='font-family:'>I thought you read the instruction up there dont press the button</h2>"
            i++;
        }    
        else if(i==1){
            document.getElementById("second_display").innerHTML="<h2> dont press the button again</h2>"
            i++;
        }
        else if(i==2){
            document.getElementById("second_display").innerHTML="<h2>can't you read simple instruction</h2>"
            i++;
        }
        else if(i==3){
            document.getElementById("second_display").innerHTML="<h2>This peanut head i said dont press the button</h2>"
            i++;
        }
        else if(i==4){
            document.getElementById("second_display").innerHTML="<h2>Who the hell are you</h2>"
            i++;
        }
        else if(i==5){
            document.getElementById("second_display").innerHTML="<h2>Are you alway such an idiot</h2>"
            i++;
        }
        else if(i==6){
            document.getElementById("second_display").innerHTML="<h2>Im not a protologist, but i know an asshole when i see one </h2>"
            i++;
        }
        else if(i==7){
            document.getElementById("second_display").innerHTML="<h2>Why don't you check ebay and see if they have senes for sale </h2>"
            i++;
        }
        else if(i==8){
            document.getElementById("second_display").innerHTML="<h2>Are you tire of pressing me</h2>"
            i++;
        }
        else if(i==9){
            document.getElementById("second_display").innerHTML="<h2>I guess not ,jerkass </h2>"
            i++;
        }
        else if(i==10){
            document.getElementById("second_display").innerHTML="<h2> You have your entire life to be a jerk. Why not take today off?</h2>"
            i=i-10;
        }
    }

