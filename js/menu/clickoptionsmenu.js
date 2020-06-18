var descendentes = document.querySelectorAll(".lis a");
var b = 0;

for (var b=0;b<descendentes.length; b++) {

    descendentes[b].addEventListener("click", function teste(e) {

        var windowWidth = window.innerWidth;

        if(windowWidth <= 852){

            document.getElementById("menu").style.background = "#ffa000";
            document.getElementById("menu").style.height = "65px";
            document.getElementById("listmenu").style.top = "16px";
            document.getElementById("logo").style.top = "14px";
            document.getElementById("menu").style.boxShadow = "0px 0px 6px #232428";
            document.getElementById("buttonmenu").style.top = "23px";
            document.getElementById("listmenu").style.width = "auto";
            document.getElementById("listmenu").style.display = "none";

            var el = document.getElementsByClassName('lis');
            var i = 0;
            for (var i=0;i<el.length; i++) {
                el[i].style.width = "auto";
            }

            click = 0;

        }

    })
}
/*var descendentes = document.querySelectorAll(".lis");
for (var i = 0; i < descendentes.length; i++) {
    descendentes[i].addEventListener("click", function (e) {
        alert(this.id);
    })
}*/
