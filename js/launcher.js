class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 1
        }

        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if (this.launcher.bodyA){
        strokeWeight(3);
        line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y)
        }
    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){
        
        this.launcher.bodyA = body;
 
    }
}