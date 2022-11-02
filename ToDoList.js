


function add_to_list() {

  var x = document.getElementById("listeInput");
   var tag = document.createElement("li");
   tag.id = "listeoutput";

   var inputValue = document.getElementById("listeInput").value;
   var text = document.createTextNode(inputValue);
    tag.appendChild(text);
    var element = document.getElementById("listeoutput");
    
    element.appendChild(tag);
  }

function strykeut() {

  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
})
}

  