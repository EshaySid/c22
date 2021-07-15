class Rope{

constructor(body1,body2,pointA,pointB){
    this.pointA=pointA;
    this.pointB=pointB;
    this.bodyA= body1;
    this.bodyB=body2;

    this.con = Matter.Constraint.create({
        bodyA:body1,
        bodyB:body2,
        length:100,
        stiffness:0.2
        }); 
        
    World.add(world,this.con);

    }

    

    display()
    {
        //var pointA=this.Rope.bodyA.position;
        //var pointB=this.Rope.bodyB.position;
        
        //console.log("HII");
        line(this.con.bodyA.position.x,this.con.bodyA.position.y,this.con.bodyB.position.x,this.con.bodyB.position.y);
        strokeWeight(2);

    }
}