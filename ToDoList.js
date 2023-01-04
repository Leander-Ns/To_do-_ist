

function add_to_list() {

  var x = document.getElementById("listeInput");
  var tag = document.createElement("li");
  tag.id = "listeoutput";

  //create a new list item with the text from the input field
  var inputValue = document.getElementById("listeInput").value;
  var text = document.createTextNode(inputValue);
  tag.appendChild(text);
  var element = document.getElementById("listeoutput");
  element.appendChild(tag);


    //give each new list a delete button
    var deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton";
    deleteButton.innerHTML = "x";
    tag.appendChild(deleteButton);

    //delete list item when delete button is clicked
    deleteButton.addEventListener('click', function(){
      tag.remove();
    })

    
    //give every new list a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    tag.appendChild(checkbox);

    //strikethrough list if the check box is checked
    checkbox.addEventListener('click', function(){
      if (checkbox.checked == true){
        tag.style.textDecoration = "line-through";
      } else {
        tag.style.textDecoration = "none";
      }
    })
  }

  
  //focus on input field when page is loaded
  window.onload = function() {
    var inputField = document.getElementById("listeInput");
    inputField.focus();
  }




  