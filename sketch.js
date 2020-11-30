var myengine ,myworld,mybodies
const engine=Matter.Engine
const bodies=Matter.Bodies 
const  world =Matter.World



function setup() {
  createCanvas(800,400);
  
myengine=engine.create()
 myworld=myengine.world  
 mybodies=bodies.rectangle(400,350,800,2,{isStatic:true})
 ball=bodies.circle(200,200,21,{restitution:1})
 world.add(myworld,mybodies)
 world.add(myworld,ball)

}

function draw() {
    background(255,255,255);
  engine.update(myengine)
  rectMode(CENTER)
  rect(mybodies.position.x,mybodies.position.y,800,2)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y, 21,21)
  
  
}