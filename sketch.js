var dots = [];

class Dot
{
  constructor(x, y, n)
  {
    this.x = x;
    this.y = y;
    this.n = n;
  }

  draw()
  {
    var col = color(0, 0, 0);
    strokeWeight(10)
    switch (this.n)
    {
      case 0:
        col = color(31, 39, 27);
        break;
      case 1:
        col = color(25, 100, 126);
        break;
      case 2:
        col = color(40, 175, 176);
        break;
      case 3:
        col = color(244, 211, 94);
        break;
      default:
        col = color(238, 150, 75);
        break;

    }
    set(this.x + floor(width / 2), this.y + floor(height / 2), col);
  }
}

function setup()
{
  createCanvas(200, 200);

  for (var x = floor(-width / 2); x < floor(width / 2); x++)
  {
    dots[x] = [];
    for (var y = floor(-height / 2); y < floor(height / 2); y++)
    {
      dots[x][y] = new Dot(x, y, 0);
    }
  }
  dots[0][0].n = 10000;
}

function draw()
{
  background(0);

  translate(floor(width / 2), floor(height / 2));

  loadPixels();

  for (var x = floor(-width / 2); x < floor(width / 2); x++)
  {
    for (var y = floor(-height / 2); y < floor(height / 2); y++)
    {
      dots[x][y].draw();
    }
  }

  updatePixels();

  for (var i = 0; i < 50; i++)
  {
    update();
  }
}

function update()
{
  for (var x = floor(-width / 2); x < floor(width / 2); x++)
  {
    for (var y = floor(-height / 2); y < floor(height / 2); y++)
    {
      if (dots[x][y].n >= 4)
      {
        try
        {

          dots[x][y].n -= 4;
          dots[x + 1][y].n++;
          dots[x - 1][y].n++;
          dots[x][y + 1].n++;
          dots[x][y - 1].n++;
        }
        catch (e)
        {
          // console.log(e)
        }
      }
    }
  }
}