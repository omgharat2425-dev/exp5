$(document).ready(function(){

let dataList = [];

$.ajax({
url:"data.json",
method:"GET",
success:function(data){
dataList = data.languages;
}
});

$("#search").keyup(function(){

let input = $(this).val().toLowerCase();
let output = "";

if(input.length > 0){

dataList.forEach(function(item){

if(item.toLowerCase().includes(input)){
output += "<div class='item'>"+item+"</div>";
}

});

$("#result").html(output);

}else{
$("#result").html("");
}

});

});
