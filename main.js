function changeImage(){
    var leftImage=document.getElementById("leftImage");
    var rightImage=document.getElementById("rightImage");
    var leftNew=Math.floor(Math.random()*6)+1;
    var rightNew=Math.floor(Math.random()*6)+1;
    leftImage.src=""+leftNew+".png";
    rightImage.src=""+rightNew+".png";
    var a=leftImage.src;
    var b=rightImage.src;
    if(a==b){
        document.getElementById("bigHeading").innerHTML="Draw!"
    } else if(a>b){
        document.getElementById("bigHeading").innerHTML="Player 1 WINS!"
    }else{
        document.getElementById("bigHeading").innerHTML="Player 2 WINS!"
    }
}