var Turtle = function (id) {
  this.cvs = document.getElementById(id) || document.getElementsByTagName("canvas")[0];
  this.x = this.cvs.width / 2;
  this.y = this.cvs.height / 2;
  this.angle = 0;
  this.cvs.width = this.cvs.width;
  this.cvs = this.cvs.getContext("2d");
};

Turtle.prototype.radian = function () {
  return (this.angle * Math.PI) / 180;
};

Turtle.prototype.dx = function (n) {
  return n * Math.sin(this.radian());
};

Turtle.prototype.dy = function (n) {
  return n * Math.cos(this.radian());
};

Turtle.prototype.circle = function (x, y, colour, radius) {
  var c = this.cvs;
  c.fillStyle = colour;
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, true);
  c.closePath();
  c.fill();
};

Turtle.prototype.draw = function () {
  this.circle(this.x, this.y, "#8EBB31", 10);
  this.circle(this.x + this.dx(10), this.y - this.dy(10), "#5E7A21", 5);
};

Turtle.prototype.turn = function (angle) {
  this.angle += angle;
};

Turtle.prototype.jump = function (pos_x, pos_y) {
  this.x = pos_x;
  this.y = pos_y;
};

Turtle.prototype.walk = function (steps) {
  var c = this.cvs;
  c.moveTo(this.x, this.y);
  this.x += this.dx(steps);
  this.y -= this.dy(steps);
  c.lineTo(this.x, this.y);
  c.stroke();
};
