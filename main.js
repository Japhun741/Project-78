var images = [
    "https://th.bing.com/th/id/OIP.yAbAN_FUSBYwZXkb-HJBjQHaNk?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.stU3zK0nuvoVcNgO5cXePAHaMO?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP._UZcfDvx1uaamVpQTgfVhQHaSh?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.9WT0yjX0iB-jrJZtZkG_FwHaSS?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.f3109bf485cbe92175f5201c130978ec?rik=fd6CuXleX5j1RQ&pid=ImgRaw",
    "https://th.bing.com/th/id/OIP.ScaGOXitPka4DFmxgzwyiwHaF_?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.Q7h5stPUOhyjMxgVyhcImgHaHa?pid=ImgDet&rs=1",  
];

var names = [
  "My Dad",
  "My Older Sister",
  "My Younger Sister",
  "My Grandma",
  "My Grandpa",
  "ME",
];
var i = 0;
function update()
{
  i++;
  var number_of_family_members = 7
  if (i>number_of_family_members)
  {i=0;}
  var update_images = images [i];
  var updated_names = names [i];
  document.getElementById("mom").src=update_images;
  document.getElementById("yes").innerHTML=updated_names;
}