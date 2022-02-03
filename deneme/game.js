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

   /* if(ball.x+ball.r<stick.x+50px || ball.x-ball.r>stick.x-50px )
    {
        ball.velocityY=-ball.velocityY

    }*/

}


window.onkeydown= function(klavye)
{
    var kutu=document.getElementById("stick");
    if(klavye.keyCode==37)
    {
        kutu.style.left=(kutu.offsetLeft-10)+"px";
    }

    if(klavye.keyCode==39)
    {
        kutu.style.left=(kutu.offsetLeft +10)+"px";
    }

}



const render= () =>{
drawRect(0,0,canvas.width,canvas.height,'#E0E9D3')
drawCircle(ball.x,ball.y,ball.r,ball.color)
//drawRect(170,650,100,30,'#0e3f3f')
drawText(player.score,canvas.width/4*3,100,'#000')
//drawRect(300,50,150,40,"#fff")
}


const game =() =>{
    update()
    render()
    klavye()
}

const fps =50
setInterval(game,1000/fps)
