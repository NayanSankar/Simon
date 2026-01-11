let tiles=[".green",".red",".yellow",".blue"];
let start=1;
let tobe=[];
let level=1;
let i=-1;
let highest=0;
$("body").on("keypress",function(){
    if(start!=0){
        let ran=Math.floor(Math.random()*4);
        i=-1;
        let clr=$(tiles[ran]).css("background-color");
        tobe.push(tiles[ran].slice(1,tiles[ran].length));
        $(tiles[ran]).animate({backgroundColor:"black"},"fast");
        $(tiles[ran]).animate({backgroundColor:clr},"fast");
        $("h1").text("Level 1");
        let audio=new Audio(tiles[ran].slice(1,tiles[ran].length)+".mp3");
        audio.play();
        start=0;}
});
$(".tile").on("click",function(){
    i++;
    if(start==0){
        
        let el="."+this.classList[1];
        $(el).css("box-shadow","0px 0px 20px white");
        setTimeout(function(){$(el).css("box-shadow","")},100);
        let audio=new Audio((this.classList[1])+".mp3");
        audio.play();
        if(i<tobe.length-1){
            if(tobe[i]!=this.classList[1]){
                start=1;
                $("h1").text("Failed!!! press A key to start again");
                $("body").css("background-color","red");
                setTimeout(function(){$("body").css("background-color","rgb(5, 51, 82)");},300);
                let audio=new Audio("wrong.mp3");
                audio.play();
                console.log(level);
                if(level>highest){
                    highest=level;
                    $("h2").text("Highest level : "+highest);
                    
                }
                i=-1;
                tobe=[];
                level=1;
            }
        }
        else if(i==tobe.length-1){
            if(tobe[i]==this.classList[1]){
                level++;
                
                let ran=Math.floor(Math.random()*4);
                let clr=$(tiles[ran]).css("background-color");
                tobe.push(tiles[ran].slice(1,tiles[ran].length));
                setTimeout(function(){$(tiles[ran]).animate({backgroundColor:"black"},"fast");
                $(tiles[ran]).animate({backgroundColor:clr},"fast");
                let audio=new Audio(tiles[ran].slice(1,tiles[ran].length)+".mp3");
                audio.play();
                $("h1").text("Level "+level);
                console.log(tobe);
                i=-1;},700);
                
            }
            else{
                start=1;
                $("h1").text("Failed!!! press A key to start again");
                $("body").css("background-color","red");
                setTimeout(function(){$("body").css("background-color","rgb(5, 51, 82)");},300);
                let audio=new Audio("wrong.mp3");
                audio.play();
                console.log(level);
                if(level>highest){
                    highest=level;
                    $("h2").text("Highest level : "+highest);
                    
                }
                i=-1;
                tobe=[];
                level=1;
            }
        }
         

        // if(tobe.slice(0,cur.length)!=cur){
            // console.log(cur+tobe.slice(0,cur.length));
            // start=1;
            // $("h1").text("Failed!!! press A key to start again");
        // }
        // else if(tobe==cur){
        //     level+=1;
        //     $("h1").text("Level "+level);
        //     let ran=Math.floor(Math.random()*4);
        //     let clr=$(tiles[ran]).css("background-color");
        //     tobe.push(tiles[ran].slice(1,tiles[ran].length));
        //     $(tiles[ran]).animate({backgroundColor:"black"},"fast");
        //     $(tiles[ran]).animate({backgroundColor:clr},"fast");
        //     let audio=new Audio(tiles[ran].slice(1,tiles[ran].length)+".mp3");
        //     audio.play();}

        }
    }
);
