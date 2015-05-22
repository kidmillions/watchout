// start slingin' some d3 here.
var width = 500;
var height = 500;
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



// var asteroid = svg.selectAll("image").data(data)
//   .attr("src", "./asteroid.png");

// asteroid.enter()
//   .append("image")
//   .attr("x", function(d) {return d.x})
//   .attr("y", function(d) {return d.y});


// //what kinds of data are important to each asteroid?
// //what is singular to each asteroid?
//   //its position within the svg
//     //which is randomly generated upon updating

// var randomLocation = function() {
//   var x = Math.random() * width;
//   var y = Math.random() * height;
//   return {x: x, y: y};
// };

// var data = randomLocation();

var makeAsteroids = function() {
  return _.range(0, nAsteroids).map(function(index) {
    return {
      id: index,
      x: Math.random() * width,
      y: Math.random() * height
    };
  });
};

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

