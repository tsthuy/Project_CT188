function setLang(code)
{
window.localStorage.setItem("lang",code);
location.reload();
}
function getLang()
{
if(window.localStorage.getItem("lang")=== null)
window.localStorage.setItem("lang","vi-VN");
return window.localStorage.getItem("lang");
}
function showLabel()
{
//var lang="vi-VN";
var lang=getLang();
$('.multilang').each(function(i, obj) { 
$("#"+obj.id).html(labels[obj.id][lang]).attr("title",labels[obj.id][lang]);
}); 
}
function regCourse(idx){
alert(idx)
}

var labels={
    //Menu
    "menu-home": {
        "vi-VN":"Trang Chủ",
		"en-US":"Home",
    },

}