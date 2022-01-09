class Bullet{
	constructor(args){
	this.r = args.r||10
	this.p = args.p || shipP.copy()//createVector(width/2, height/2)
	this.v = args.v || createVector(mouseX - width/2, mouseY - height/2).setMag(10)
	this.a = args.a || createVector(0, 0)
	this.color = 'white'
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
			
		pop()
	}
	update(){
			this.p.add(this.v)
			this.v.add(this.a)
	}
}