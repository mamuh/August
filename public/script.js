var share = document.getElementById("share");

var userInput = document.getElementById("user-input");


share.addEventListener('click', function() {
  var value = document.getElementById("user-input").value;
  if (value) {
    addPost(value);
    $.post("/new-message", {msg: value}, (data) => {console.log(data)});
    document.getElementById("user-input").value = "";
  };
  return false;
})

userInput.addEventListener('keyup', function(event) {
  var value = document.getElementById("user-input").value;

if (event.keyCode == 13) {
  if (value) {
    addPost(value);
    $.post("/new-message", {msg: value}, (data) => {console.log(data)});
    document.getElementById("user-input").value = "";
  };
  return false;
}
})

function addPost(text) {
  var posts = document.getElementById('posts');

  var item = document.createElement('li');
  item.innerText = text;

  posts.insertBefore(item, posts.childNodes[0]);
}