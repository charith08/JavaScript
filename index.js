var History = new Object();
let counter;
var arr,objectArray;
let numr, newCard, creatingcomic,creatingCard;
const url1 = "https://xkcd.now.sh/";
function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }



function generateJson()
{

for(let count4=1; count4<=4; count4++) {



if (localStorage.getItem("arr")===null)
{
    arr = new Array();
    objectArray = new Array();
    localStorage.setItem("arr",JSON.stringify(arr));
    localStorage.setItem("objectArray",JSON.stringify(objectArray));
    counter =0;
    localStorage.setItem('counter', JSON.stringify(counter));
    /*localStorage.counter = counter;*/
    console.log(localStorage.counter);
    console.log("hjsek");
}

  arr= JSON.parse(localStorage.getItem("arr"));
  objectArray= JSON.parse(localStorage.getItem("objectArray"));
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
        var counter = JSON.parse(localStorage.getItem('counter'));
        /*counter = localStorage.counter;*/
        counter = counter + 1;
        var p= localStorage.getItem("arr");
        console.log(p);



         let rand = numr;

        var endpoint = `${url1}${rand}`;

        fetch(endpoint).then(resp => { return resp.json(); }).then(data => {

       data.date = new Date;

       objectArray.push(data);
       localStorage.setItem("objectArray",JSON.stringify(objectArray));

          var xyz = JSON.parse(localStorage.getItem("objectArray"));
          console.log(xyz);


   newCard="boxshadow"+ count4;
   let x=document.getElementById(newCard).getElementsByClassName("numbercontainer");

   document.getElementById(newCard).querySelector("#comicdisplay").src = data.img;
   document.getElementById(newCard).querySelector("#titlecontainer").innerHTML = data.safe_title;
   document.getElementById(newCard).querySelector("#numbercontainer").innerHTML = count4+".";




          }).catch(function(error) {
        console.log(error);
      });

    }



  /*    let date = new Date();

          const url1 = "https://xkcd.now.sh/";
            let rand = num;
           //let n = num.toString();
           var endpoint = `${url1}${rand}`;


           fetch(endpoint).then(resp => { return resp.json(); }).then(data => {
          //  let comiccontainer = data.results;
             console.log(data);
             objectArray.push(data);
             localStorage.setItem("arr",JSON.stringify(arr));
            // localStorage['comic'+counter]=data;
             let div1 = createNode('div'), //comiccontainer
             div2 = createNode('div'), //heading
             div3 = createNode('div'), //numbercontainer
             div4 = createNode('div'), //titlecontainer
             div5 = createNode('div'), //imagecontainter
             img = createNode('img'); //comicdisplay

             img.src = data.img;
             div4.innerHTML = data.safe_title;
             div5.innerHTML = counter+".";
   //span.innerHTML = `${author.name.first} ${author.name.last}`;

           })
             /*
             return comiccontainer.map(function(author) {

    })
  })*/


          /* var xhr = new XMLHttpRequest();

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
                   localStorage['comic'+counter]=jString;

                   document.getElementById('titlecontainer').innerHTML = jcontent.safe_title;
                   document.getElementById('comicdisplay').src = jcontent.img;

                   document.getElementById('numbercontainer').innerHTML = counter+".";

                }
           };

    xhr.open('GET', endpoint,true);
    xhr.send();*/
    localStorage.counter=counter;


 }

}
}

}
