var elements = document.getElementsByClassName("item");

var myFunction = function() {

    if (this){
        name = this.children[0].children[0].textContent.replace(/\s{2,}/g, ' ');
        descr = this.children[0].children[1].textContent.replace(/\s{2,}/g, ' ');
        price = this.children[1].children[0].textContent;
        rmfouthletters = name.split('');
        rmfouthletters = rmfouthletters.splice(4, rmfouthletters.length).join('');
        console.log(rmfouthletters);
        console.log(descr);
        console.log(price);
        window.open("https://api.whatsapp.com/send?phone=5521964391013&text="+"Oi, quero pedir este item do cardápio "+'"'+rmfouthletters+'" preço: '+price);
    }
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}