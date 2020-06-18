window.addEventListener("scroll", menuScrolling);

var elmTop = document.getElementById("container-logo").offsetTop;
var scrollY = 0;
var pre = 150;

function menuScrolling() {

    scrollY = window.pageYOffset;

      if (scrollY >= elmTop+pre){

        if(click < 1){

          document.getElementById("menu").style.background = "#ffa000";
          document.getElementById("menu").style.height = "65px";
          document.getElementById("listmenu").style.top = "16px";
          document.getElementById("logo").style.top = "14px";
          document.getElementById("menu").style.boxShadow = "0px 0px 0px 0px #1a1a1a";
          document.getElementById("buttonmenu").style.top = "23px";

        }

      }else{

        if(click < 1){

          document.getElementById("menu").style.background = "none";
          document.getElementById("menu").style.height = "80px";
          document.getElementById("listmenu").style.top = "30px";
          document.getElementById("logo").style.top = "28px";
          document.getElementById("menu").style.boxShadow = "none";
          document.getElementById("buttonmenu").style.top = "37px";

        }

      }

}
