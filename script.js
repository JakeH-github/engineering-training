console.log("Engineering Training!");
console.log("modalButton", modalButton);

function openLoadingScreen() {
	var loadingScreen = document.getElementsByClassName('overlay-container');
	loadingScreen[0].style.display = 'block';
}

function closeLoadingScreen() {
	var loadingScreen = document.getElementsByClassName('overlay-container');
	loadingScreen[0].style.display = 'none';
}

//DIG-71533 below
var gitLinks = document.getElementsByTagName('a');
var jirasArray = [
  {
    "links": "https://github.com/JakeH-github/engineering-training",
    "titles": "Create a public GitHub repo"
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/c393a996658767fe4a937ad93ecf7eb6071fc43f",
    "titles": "DIG-70771 Create index.html file"
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/c3ab45dad579f2af486d9948e40c81c82bf7a280",
    "titles": "Add anchor tags for each completed subtasks."
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/d682d9b669be0182fc08eebca419304200919eb1",
    "titles": "Make unordered list of anchor tags"
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/5f54d39ad6f5c571d6f8c65f25a1176479f601cd",
    "titles": "Add TWM logo as an image"
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/3bdbb3697970d285875e55b90c20d71aec9a7fc0",
    "titles": "Add style attributes to the img tag to setting the height"
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/61d6de65dcce6e6e226d2ff7f2bf97d8a2f2455b",
    "titles": "Add a head, add a style to the head"
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/e378f11d0b7d820ba7146b181463aab092aa0b07",
    "titles": "Add a selector inside style tag that targets the list items and removes the bullet"
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/431b75f3eb11f321e6b00effd9e32a66fcbe8e4a",
    "titles": "Pseudo-selectors - Add hover styling to list elements"
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/b04be5dbbe8cbb08f96e183c7a85bfd676e4aa1e",
    "titles": "UI Libraries - Add Bootstrap to your page"
  }
];

jirasArray.forEach(function(item, index) {
    console.log(item);
    var listElement = document.createElement("li");
    listElement.className = "col-sm";
    $('.primaryList').append($(listElement));
    
    //Append data to current list element
    var listArray = document.getElementsByTagName('li');
    listArray[index].innerHTML = `<i class="bi bi-check-circle-fill"></i>
		<a href=${item.links}>${item.titles}</a>`
});







