var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = 500;
canvas.height = 259;

var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();

if (month === 2 && day === 26)
{
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 500, 259, 0, 0, 500, 259);
    };
    img.src = "happy.gif";
    document.write("YES :\')");
}
else
{
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 500, 259, 0, 0, 500, 259);
    };
    img.src = "Hillary-Duff.gif";
    document.write("<br/>" + "<br/>" + "NO :\'(");
}
