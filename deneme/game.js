const canvas= document.getElementById('game')
const context=canvas.getContext('2d')

const drawRect=(x,y,w,h,color)=>{
context.fillStyle= color
context.fillRect(x,y,w,h)
}

const drawCircle=(x,y,r,color)=>{
context.fillStyle=color
context.beginPath()
context.arc(x,y,r,0,2*Math.PI,false)
context.closePath()
context.fill()
}

const drawText=(text,x,y,color)=>
{
context.fillStyle=color
context.font= '30px sans-serif'
context.fillText(text,x,y)

}

const player={
    x:20,
    y: canvas.height/2-50,
    w:300,
    h:100,
    color:'#fff',
    score: 0
}

const ball = {
x: canvas.width/2,
y: canvas.height/2,
r:15,
color: '#000',
speed:5,
velocityX:4,
velocityY:4,
stop: true
}



const update=() =>{
    ball.x += ball.velocityX
    ball.y += ball.velocityY

    if(ball.y+ball.r> canvas.height || ball.y-ball.r < 0){
        ball.velocityY=-ball.velocityY
    }

    if(ball.x+ball.r>canvas.width || ball.x-ball.r<0){
        ball.velocityX=-ball.velocityX
    }
}

var stick=document.querySelector("div");

window.onkeydown= function(olay){
   var x= stick.offsetLeft;
   var kod= olay.keyCode;
   
   if(kod ==37)
   {
       stick.style.left=(x-5) +"px";
   }

}


const render= () =>{
drawRect(0,0,canvas.width,canvas.height,'#E0E9D3')
drawCircle(ball.x,ball.y,ball.r,ball.color)
//drawRect(170,650,100,30,'#000')
drawText(player.score,canvas.width/4*3,100,'#000')
//drawRect(300,50,150,40,"#fff")
}


const game =() =>{
    update()
    render()
}

const fps =50
setInterval(game,1000/fps)
