var count = 0;
var max = 998;
var uniqueRandoms = [];

function generaterand() {
    
    if (!uniqueRandoms.length) {
        for (var i = 1; i <= max; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    uniqueRandoms.splice(index, 1);
    return val;
}


for(var i = 1; i <= max; i++) {
    function generateJson() {
           const url1 = "https://xkcd.now.sh/";
           var rand = generaterand();
           const endpoint = `${url1}${rand}`;

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

    count=count+1;
    if(count == max+1 ) {
		    alert("you've read all the comics");
    }
 }
}
