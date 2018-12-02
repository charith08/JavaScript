function generateJson() {

  var randno = Math.floor(Math.random() * 998);

  const url1 = "https://xkcd.now.sh/";
  var ran = randno;

  const endpoint = `${url1}${ran}`;

  var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function()  {
  if(this.readyState == 4 && this.status == 200)
     {
       var jcontent = JSON.parse(this.responseText);
       document.getElementById('comicdisplay').src = jcontent.img;
     }
  };

xhr.open('GET', endpoint,true);
xhr.send();

}
