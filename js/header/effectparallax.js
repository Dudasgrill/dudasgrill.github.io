function effectParallax() {

    var effect = 1.6;
    var elm = document.getElementsByClassName("parallax");
    var i = 0;

    while (elm[i]) {

        elmoffsetTop = elm[i].offsetTop;
        elmoffsetWidth = elm[i].offsetWidth;
        scrollPos = window.pageYOffset;
        scrollElm = scrollPos-elmoffsetWidth;

        if (scrollPos > elmoffsetTop) {

          if (scrollElm <= elmoffsetTop) {

              elm[i].style.top = (scrollPos-elmoffsetTop)/effect +"px";

          }

        }else{

            elm[i].style.top = "0px";

        }
        i++;
    }

}
window.addEventListener("scroll", effectParallax);
