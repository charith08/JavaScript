
var arr,objectArray;
let counter,numr, newCard, creatingcomic,creatingCard;
const url1 = "https://xkcd.now.sh/";



function generateJson()
{
  document.getElementById('load').style.visibility="visible";
  document.getElementById('comiccontainer').style.visibility="hidden";

  for(let count4=1; count4<=4; count4++) {



    if (localStorage.getItem("arr")===null)
    {
      arr = new Array();
      objectArray = new Array();
      localStorage.setItem("arr",JSON.stringify(arr));
      localStorage.setItem("objectArray",JSON.stringify(objectArray));
      counter =0;
      localStorage.setItem('counter', JSON.stringify(counter));
      console.log(localStorage.counter);
      console.log("hjsek");
}

  arr= JSON.parse(localStorage.getItem("arr"));
  objectArray= JSON.parse(localStorage.getItem("objectArray"));
  counter = JSON.parse(localStorage.getItem('counter'));
  if(arr.length==999)
  {
    alert("You've read all the comics");

  }
  else
  {
  console.log(arr);
  console.log(objectArray);
  var x=0;

    while(x==0)
    {


      numr = Math.floor(Math.random()*999)+1;
      console.log(numr);
      var flag=0;
      var flag2 =0;
      arr.forEach(function(elem)
      {
        if (numr== elem)
          flag =1;
      });

      for(let t=0;t<objectArray.length;t++)
      {

        if( objectArray[t].num == numr)
        flag2=1;
      }


      if(flag==0 && flag2==0)      {
        x=1;
        var lmn= JSON.stringify(numr);
        arr.push(lmn);
        localStorage.setItem("arr",JSON.stringify(arr));
        counter = counter + 1;
        localStorage.setItem("counter",JSON.stringify(counter));
        var p= localStorage.getItem("arr");
        console.log(p);


         let rand = numr;
         var endpoint = `${url1}${rand}`;

        fetch(endpoint).then(resp => {
          if(resp.ok ) {

            return resp.json();
          }

         }).then(data => {

       data.date = new Date;

       objectArray.push(data);

       localStorage.setItem("objectArray",JSON.stringify(objectArray));

          var xyz = JSON.parse(localStorage.getItem("objectArray"));
          console.log(xyz);

          newCard="boxshadow"+ count4;
          let x=document.getElementById(newCard).getElementsByClassName("numbercontainer");
          let temp = data;
          //console.log(temp);

          document.getElementById('load').style.visibility="hidden";
          document.getElementById('comiccontainer').style.visibility="visible";

          document.getElementById(newCard).querySelector("#comicdisplay").src = data.img;
          document.getElementById(newCard).querySelector("#titlecontainer").innerHTML = data.safe_title;
          document.getElementById(newCard).querySelector("#numbercontainer").innerHTML = count4+counter-4+".";


      }).catch(function(error) {
        console.log(error);
      });

    }

    localStorage.counter=counter;

 }
}
}
}
