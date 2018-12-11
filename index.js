var History = new Object();
let counter;
function generateJson()
{
if (localStorage.getItem("arr")===null)
{
  var arr = new Array();
    localStorage.setItem("arr",JSON.stringify(arr));
    counter =0;
    localStorage.setItem('counter', JSON.stringify(counter));
    /*localStorage.counter = counter;*/
    console.log(localStorage.counter);
    console.log("hjsek");
}
  var arr= JSON.parse(localStorage.getItem("arr"));
  if(arr.length==999)
  {
    alert("You've read all the comics");

  }
  else
  {
  console.log(arr);

  var x=0;

    while(x==0)
    {
      var num= Math.floor(Math.random()*999)+1;
      console.log(num);
      var flag=0;
      arr.forEach(function(elem)
      {
        if (num== elem)
          flag =1;
      });
      if(flag==0)
      {
        x=1;
        var x= JSON.stringify(num);
        arr.push(x);
        localStorage.setItem("arr",JSON.stringify(arr));
        var counter = JSON.parse(localStorage.getItem('counter'));
        /*counter = localStorage.counter;*/
        counter = counter + 1 ;
        var p= localStorage.getItem("arr");
        console.log(p);
      }
    }



      let date = new Date();

           const url1 = "https://xkcd.now.sh/";
           var rand = num;
           /*let n = num.toString();*/
           var endpoint = `${url1}${rand}`;

           var xhr = new XMLHttpRequest();

           xhr.onreadystatechange = function()  {
              if(this.readyState == 4 && this.status == 200)
                {
                   var jcontent = JSON.parse(this.responseText);
                   console.log(jcontent);
                   History.name = jcontent.safe_title;
                   History.date = new Date();
                   History.number = counter;
                   History.link = jcontent.img;
                   jString = JSON.stringify(History);
                   localStorage['index'+counter]=jString;

                   document.getElementById('titlecontainer').innerHTML = jcontent.safe_title;
                   document.getElementById('comicdisplay').src = jcontent.img;

                   document.getElementById('numbercontainer').innerHTML = counter+".";

                }
           };

    xhr.open('GET', endpoint,true);
    xhr.send();
    localStorage.counter=counter;
 }

}
