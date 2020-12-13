class Chain{
constructor(bodyA, bodyB){
    var props={
        //our bodyA is our bird's body
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness: 0.05,
        length: 10
    }
    
        this.chain=Constraint.create(props);
        World.add(world,this.chain);
}

display(){
    
strokeWeight(3);
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}
}