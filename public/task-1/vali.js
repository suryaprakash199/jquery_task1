$(document).ready(function(){
$('#btnn').click (function(){
var arr =[]
var datas = JSON.parse(localStorage.getItem('prakash'));
if(datas != null){
for (var i = 0; i < datas.length; i++) {
	arr.push(datas[i])
}
}
var a = $('#unam').val()
var b = $('#uid').val()
var c = $('#fage').val()
var d = $('#udob').val()
var e = $('.gender').val()
var f = $('#ucgpa').val()
var g = $('#dept').val()
if (a,b,c,d,f == "" && g == null) {
	alert('fully enterd the guven details')
} else {
var x = {name:a, usrid:b,age:c,dob:d,gender:e,cgpa:f,dept:g}
arr.push(x);
localStorage.setItem('prakash',JSON.stringify(arr));
console.log(arr);
location.replace('tabl.html');
}
});
});
$ (function(){
$('#erorname').hide()
$('#erorid').hide()
$('#erorage').hide()
$('#erorgender').hide()
$('#erordob').hide()
$('#erorcgpa').hide()
$('#erordept').hide()
var name = false;
var age = false;
var ids = false;
var dob = false;
var cgpa = false;
var dept = false;
$('#unam').focusout(function(){
	namefun()
});
$('#uid').focusout(function(){
   idfun()
});
 $('#fage').focusout(function(){
    fagefun()
});
$('#udob').focusout(function(){
   dobfun()
});
 $('#ucgpa').focusout(function(){
   cgpafun()
 });
 $('#dept').focusout(function(){
      deptfun()
 });
 $(".gender").focusout(function(){
  genfun()
 });
function namefun(){
	var patern = /^[a-zA-Z]*$/;
	var a = $('#unam').val();
	if (patern.test(a) && a != "") {	
		$('#erorname').hide()
		$('#unam').css("border","green")
	} else {
		$('#erorname').html('The user name Not Valid')
		$('#erorname').css("color","red")
		$('#erorname').show()		
		$('#unam').css("border","red")
         name = true;
	}
}
function idfun(){
	var patern = /^[0-9]*$/;
	var b = $('#uid').val();
	var bl = b.length;
  if (patern.test(b) && b != "" && bl < 9 && bl >= 6) {
  	$('#erorid').hide()
  	$('#uid').css('border','green')
  } else {
  	$('#erorid').html(' User Id atreast min 8 (or) 9 char in number')
  	$('#erorid').css('color','red')
  	$('#erorid').show()
  	$('#uid').css('border','red')
  	ids = true;
  }

}
function fagefun(){
	var pattrn = /^[0-9]*$/;
	var c = $('#fage').val();
	var cl = c.length;
	if (pattrn.test(c) && c != "" && cl <= 2) {
		$('#erorage').hide()
		$('#fage').css ("background","white")
	} else {
		$('#erorage').html('please enter correct age of persone')
		$('#erorage').css("color","red")
		$('#erorage').show()		
		$('#fage').css("border","red")
         age = true;
	}
}
function dobfun(){
	var dtValue = $('#udob').val();    
	if ( dtValue != "" ) {
		$('#erordob').hide()
		$('#udob').css ("background","white")
	} else {
		$('#erordob').html('please enter correct date')
		$('#erordob').css("color","red")
		$('#erordob').show()		
		$('#udob').css("border","red")
        dob = true;
	}
}
function cgpafun(){
	var f = $('#ucgpa').val();	   
	if ( f != "" ) {
		$('#erorcgpa').hide()
		$('#ucgpa').css ("background","white")
	} else {
		$('#erorcgpa').html('please enter correct cgpa')
		$('#erorcgpa').css("color","red")
		$('#erorcgpa').show()		
		$('#ucgpa').css("border","red")
         cgpa = true;
	}
}
function deptfun(){
	var g = $('#dept').val();	   
	if ( g !== null) {
		$('#erordept').hide()
		$('#dept').css ("background","white")
	} else {
		$('#erordept').html('please select the depatment')
		$('#erordept').css("color","red")
		$('#erordept').show()		
		$('#dept').css("border","red")
        dept = true;
	}
}
function genfun(){
	var e = $('.gender').val();	   
	if ( e !== null) {
		$('#erorgen').hide()
		$('.gender').css ("background","white")
	} else {
		$('#erorgen').html('please select the depatment')
		$('#erorgen').css("color","red")
		$('#erorgen').show()		
		$('.gender').css("border","red")
         gender = true;
	}
}
});
