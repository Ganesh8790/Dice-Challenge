var randomnum1 = Math.floor(Math.random()*6)+1;
var radimg = "dice"+randomnum1+".png";
var imgsrc1="images/"+radimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgsrc1);
var randomnum2=Math.floor(Math.random()*6)+1;
var imgsrc2="images/dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);
if(randomnum1>randomnum2)
{document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";}
else if(randomnum1<randomnum2)
{document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";}
else
{document.querySelector("h1").innerHTML="Draw!";}
