function nxt(){
$(function () {	
   	var tex ="";
	var datas = JSON.parse(localStorage.getItem('prakash'));
	if( datas !=null ){
	for (var i = 0; i < datas.length; i++) {
		tex +="<tr class='mx-auto text-center'><td class ='count'>"+" "
		tex += "<td>" + datas[i].usrid
		tex += "<td>" + datas[i].name
		tex += "<td>" + datas[i].age
		tex += "<td>" + datas[i].dob
		tex += "<td>" + datas[i].gender
		tex += "<td>" + datas[i].dept
		tex += "<td>" + datas[i].cgpa+ "</td></tr>"		
	console.log(tex);
	$('#result').html(tex);
	}
}
});
}
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#result tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)     
    });
  });
});
// $(document).ready(function(){
// $('#myInput').mouseenter(function(){
// $('#myInput').hide()
// });
// });
