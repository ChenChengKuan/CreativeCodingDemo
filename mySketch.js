var balls = []
var bullets = []
var shipP
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for (var i = 0; i < 50; i++){
		let ball = new Ball({'r':random(5,50),
												 'p':createVector(random(width), random(height))})
		balls.push(ball)
	}
	shipP = createVector(width/2, height/2)
}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
function draw() {
	background(0)
	if (keyIsPressed){
		if (key == 'ArrowLeft'){
			shipP.x -=5
		}
		if (key == 'ArrowRight'){
			shipP.x +=5
		}
		if (key == 'ArrowDown'){
			shipP.y +=5
		}
		if (key == 'ArrowUp'){
			shipP.y -=5
		}
	
	}
	for (let ball of balls){
		ball.draw()
		ball.update()
		
		for (let bullet of bullets){
			if (!ball.dead && !bullet.dead){
				let hitRes = ball.isBallInRange(bullet.p.x, bullet.p.y)
				if (hitRes){
					ball.color = '#41f25e'
					ball.dead = true
					bullet.dead = true
				}			
			}
		}
	}
	for (let bullet of bullets){
		bullet.draw()
		bullet.update()
	}
	rectMode(CENTER)
	fill('#ffc03a')
	rect(shipP.x, shipP.y, 50)
}

function mousePressed(){
	let bullet = new Bullet({})
	bullets.push(bullet)
	// for (let ball of balls){
	// 	ball.escape()
	// 	ball.setHappy()
	// }

}
function keyPressed(){
	print(key)
	if (key == ' '){
		let bullet = new Bullet({})
		bullets.push(bullet)
	}
}