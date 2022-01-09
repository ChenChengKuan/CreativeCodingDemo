class Ball{
	constructor(args){
	this.r = args.r||100
	this.p = args.p || createVector(width/2, height/2)
	this.v = args.v || p5.Vector.random2D().mult(3)
	this.a = args.a || createVector(0, 0)
	this.color = args.c || random("7fb7be-d3f3ee-dacc3e-bc2c1a-7d1538".split("-").map(tx=>'#'+tx))
	this.mode = random(['happy','sad'])
	}
	
	draw(){
		if (this.dead){
			return
		}
		push()
			translate(this.p.x, this.p.y)
			fill(this.color)
			noStroke()
			ellipse(0,0, this.r);
			if (this.mode == 'happy'){
				fill(255)
				ellipse(0, 0, this.r/2, this.r/2)
				fill(0)
				ellipse(0, 0, this.r/3, this.r/3)	
			}else{
				fill(255)
				arc(0, 0, this.r/2, this.r/2, 0, PI)
				fill(0)
				arc(0, 0, this.r/3, this.r/3, 0, PI)			
			}
			stroke(this.color)
			strokeWeight(2)
			noFill()
			for (var o =0; o <8; o +=1){
				rotate(PI/4)
				beginShape()
					for(var i = 0; i < 20; i ++){
						vertex(this.r/2 +i ,sin(i/5 - frameCount/5)*3)
					}
				endShape()
			}

		pop()
	}
	update(){
			this.p.add(this.v)
			this.v.add(this.a)
			this.v.mult(0.99)
			// let mouseV = createVector(mouseX, mouseY)
			// let delta = mouseV.sub(this.p).limit(1)
			// this.p.add(delta)
			if (this.mode == 'happy'){
				this.p.y += sin(frameCount/10)*5
			
			}
			if(this.p.y > height){
				this.v.y = -abs(this.v.y)
			}
	}
	escape(){
		this.v.x = random(-10, 10)
	}
	setHappy(){
		this.mode = 'happy'
	}
	isBallInRange(x, y){
		let d = dist(x, y, this.p.x, this.p.y)
		if (d < this.r){
			return true
		}else{
			return false
		}
	}
}