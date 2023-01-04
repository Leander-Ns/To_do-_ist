

function add_to_list() {

  addbutton();
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
      var disp = document.getElementById("tasks");
      count--;
      taskupdate();
    })

    
    //creates a check box for every new list item
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    tag.appendChild(checkbox);
    
    //strikethrough list if the check box is checked off
    checkbox.addEventListener('click', function(){
      if (tag.style.textDecoration == "line-through") {
        tag.style.textDecoration = "none";
        checked--;
        taskupdate();
      } else {
        tag.style.textDecoration = "line-through";
        checked++;
        taskupdate ();
      }
    })
  }

  
  //focus on input field when page is loaded
  window.onload = function() {
    var inputField = document.getElementById("listeInput");
    inputField.focus();
  }


  var count = 0;
  var checked = 0;

  // adds 1 to the counter
  function addbutton () {
      var disp = document.getElementById("tasks");
      count++;
      taskupdate();
  }

  //updates the counter
  function taskupdate() {
    var disp = document.getElementById("tasks");
    disp.innerText = "Task: " + count + "/" + checked;
  }
 





 
  
  




  