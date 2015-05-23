// start slingin' some d3 here.
var width = 1500;
var height = 700;
var nAsteroids = 10;


var svg = d3.selectAll("body").append("svg")
  .attr("width", width)
  .attr("height", height);


var render = function(data){
  var asteroids = svg.selectAll("image").data(data, function(d) {return d.id;});

  asteroids.enter()
  .append("image")
  .attr("xlink:href", "asteroid.png")
  .attr("width", 30)
  .attr("height", 30);

  asteroids.transition().duration(900)
  .attr("x", function(d) {return d.x})
  .attr("y", function(d) {return d.y});

  asteroids.exit()
    .remove();
};

// var renderPlayer = function(){
  var player = svg
    .append('circle')
      .attr('class', 'circle')
      .attr("r", 10)
      .attr('cx', (width/2))
      .attr('cy', (height/2));

  var moveCircle = function(){
    d3.select(this)
    .attr("cx", d3.event.x)
    .attr("cy",d3.event.y);

  };

  var checkForCollisions = function(p){
    var dude = d3.select(p);
    var allAsteroids = d3.selectAll("image");
    var collisionBuffer = parseInt(dude.attr("r")) + 15;

    for(var i = 0; i<allAsteroids.length; i++){
      var currentAsteroid = allAsteroids[i];
      var collided = currentAsteroid.attr("x") <= parseInt(dude.attr("cx"));
      if()
      collide: function(target){
         return target.attr('cx') <= (parseInt(this.attr("x")) + collisionBuffer)
         && target.attr("cx") >= (parseInt(this.attr("x")) - collisionBuffer)
         && target.attr('cy') <= (parseInt(this.attr("y")) + collisionBuffer)
         && target.attr('cy') >= (parseInt(this.attr("y")) - collisionBuffer);
    }

  };


  var drag = d3.behavior.drag().on("drag", moveCircle);

  player.call(drag);
// }

// var asteroids = d3.selectAll("image");


// var checkForAllCollisions = function() {
//   var asteroidsForCollision = d3.selectAll("image").data();
//   for(var i = 0; i < asteroidsForCollision.length; i++){
//     if(asteroidsForCollision[i].collide(player)){
//       console.log("collided");
//     }
//   }
// };

// setInterval(checkForAllCollisions, 10);





var makeAsteroids = function() {
  return _.range(0, nAsteroids).map(function(index) {
    return {
      id: index,
      x: Math.random() * width,
      y: Math.random() * height
    };
  });
};




// renderPlayer();

var play = function() {
  var turn = function() {
    console.log('called');
    var newAsteroids = makeAsteroids();
    render(newAsteroids);
  };
  turn();

  setInterval(turn, 1000);
}
play();


//prototype takes an obj
  //obj is tested whether it occupies the same space





