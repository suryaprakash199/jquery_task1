function myfunc() {
   var p = document.getElementById('unm').value;
   var q = document.getElementById('upd').value;
   var r = document.getElementById('upwd').value;
   
   if(p == "" || q == "" || r == ""){
    alert('please fully filled the form')
   }
   else if(r == q){
 var data = { user:p, pwd:r};
   var arr = [];
   arr.push(data);   
   localStorage.setItem('mech', JSON.stringify(arr));
   alert('Updated Successfully')
   }
   else{
    alert('Please correct the Password')
   }
}
function myfun() {
  var x = document.getElementById('un').value;
  var y = document.getElementById('up').value;
  var z = JSON.parse(localStorage.getItem('mech'));
  if (x && y) {
  for (var i = 0; i <= z.length; i++) {
     z[i];
     if(x == z[i].user && y == z[i].pwd){
     location.replace('studentdetails.html')
      alert("you like this experience");
     }
   } 
}
}
 var i = 0;
var txt = 'The University of Waterloo is a public research university with a main campus in Waterloo, Ontario, Canada';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("para").innerHTML += txt.charAt(i);
    document.getElementById("par").innerHTML += txt.charAt(i);
    document.getElementById("pare").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}