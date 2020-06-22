document.getElementById("carnesa").addEventListener("click", carnes);
document.getElementById("guarnicoesa").addEventListener("click", guarnicoes);
document.getElementById("massasa").addEventListener("click", massas);
document.getElementById("sobremesasa").addEventListener("click", sobremesas);
document.getElementById("btmore").addEventListener("click", btmore);

var section = "carnes";

function btmore() {
    
    pull(pullfull);
    
}
function carnes() {
    
    section = "carnes";
    pull(pullparcial);
    
}
function guarnicoes() {

    section = "guarnicoes";
    pull(pullparcial);
    
}
function massas() {

    section = "massas";
    pull(pullparcial);
    
}
function sobremesas() {

    section = "sobremesas";
    pull(pullparcial);
    
}

function checkCompatibility() {
    
    if (this.XMLHttpRequest) {
        
        return new XMLHttpRequest();

    } else {

        // code for older browsers

        return new ActiveXObject("Microsoft.XMLHTTP");

    }
    
}
function pullmark() {
    
    var url = "https://raw.githubusercontent.com/willianlaino/ElBred/master/items.json";

    xmlhttp = checkCompatibility();
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
    
    return xmlhttp;
    
}

function pull(myfunc) {

    xmlhttp = pullmark(); 

    xmlhttp.onreadystatechange = function() {
 
        if (this.readyState == 4 && this.status == 200) {

            myfunc(this.responseText); 

        }

    };
    
}

function pullparcial(jsonItems){
    
    selected = section;
    
    json = JSON.parse(jsonItems);
    
    limit = Object.keys(json[selected]).length;

    if (4 > limit){
        
        createitems(limit,json,selected);
        
    }else{
        
        createitems(4,json,selected);   
        
    }
    
}

function pullfull(jsonItems){
    
    selected = section;
    
    json = JSON.parse(jsonItems);
    
    limit = Object.keys(json[selected]).length;
    

    createitems(limit,json,selected);
    
}
function createitems(limit,json,selected){
    
    content = '';
    
    for (i = 0; i < limit; i++) {

        img = json[selected][i]["url"];
        name = json[selected][i]["name"];
        description = json[selected][i]["description"];

        content += '<div class="item">&#013;&nbsp;&nbsp;<img class="item-image" src="'+img+'"/>&#013;&nbsp;&nbsp;<h1 class="item-name">'+name+'</h1>&#013;&nbsp;&nbsp;<h2 class="item-description">'+description+'</h2></div>';  

    }

    
}