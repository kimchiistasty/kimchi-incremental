var player = {
  kimchi: 0,
  maker: 1
  };
function moreMakers()
{
  if (kimchi < 5)
  {
    document.getElementsByClassName("bmaker").innerHTML = "Insufficient money.";
    var t = Date();
    while (Date()==t){}
    document.getElementsByClassName("bmaker").innerHTML = "Hire more kimchi makers!";
  }
  else
  {
    kimchi-=5;
    ++maker;
  }
}
setInterval(function(){player.kimchi+=player.maker}, 5000)
