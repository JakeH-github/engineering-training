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
const jiraLinks = [
  {
    "links": "https://github.com/JakeH-github/engineering-training",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/c393a996658767fe4a937ad93ecf7eb6071fc43f",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/c3ab45dad579f2af486d9948e40c81c82bf7a280",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/d682d9b669be0182fc08eebca419304200919eb1",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/5f54d39ad6f5c571d6f8c65f25a1176479f601cd",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/3bdbb3697970d285875e55b90c20d71aec9a7fc0",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/61d6de65dcce6e6e226d2ff7f2bf97d8a2f2455b",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/e378f11d0b7d820ba7146b181463aab092aa0b07",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/431b75f3eb11f321e6b00effd9e32a66fcbe8e4a",
  },
  {
    "links": "https://github.com/JakeH-github/engineering-training/commit/b04be5dbbe8cbb08f96e183c7a85bfd676e4aa1e",
  }
];

const jiraTitles = [
  {
    "titles": "Create a public GitHub repo"
  },
  {
    "titles": "DIG-70771 Create index.html file"
  },
  {
    "titles": "Add anchor tags for each completed subtasks."
  },
  {
    "titles": "Make unordered list of anchor tags"
  },
  {
    "titles": "Add TWM logo as an image"
  },
  {
    "titles": "Add style attributes to the img tag to setting the height"
  },
  {
    "titles": "Add a head, add a style to the head"
  },
  {
    "titles": "Add a selector inside style tag that targets the list items and removes the bullet"
  },
  {
    "titles": "Pseudo-selectors - Add hover styling to list elements"
  },
  {
    "titles": "UI Libraries - Add Bootstrap to your page"
  }
];

class JiraHandler {
	constructor(links, titles){
		this.links = links;
		this.titles = titles;
         this.jiraObject = [];
          this.createJiraObject();
  }

 
  createJiraObject() {
    for (let index = 0; index < this.titles.length; index++) {
      this.jiraObject.push({
        link: this.links[index],
        title: this.titles[index],
    });
    }
  }
}

let jiraHandler = new JiraHandler(jiraLinks, jiraTitles);

let dataLoaded = false;

const utils = {
  loadData: function(){
    if(dataLoaded === false){
      openLoadingScreen();
      const dataLoading = setTimeout(printData,1000);
      this.renderData().then((value) => {
        document.getElementsByClassName('primaryList')[0].innerHTML = value;
        dataLoaded = true;
      });
    }
    else{
      console.log("Data is already loaded.")
    }
  },
 renderData: function(){
    return new Promise((resolve, reject) => {
      let response = '';
      jiraHandler.jiraObject.forEach(function(item, index) {
        let {link, title } = item;
        response += `<li><i class="bi bi-x"></i><i class="bi bi-check-circle-fill"></i><a href="${link.links}">${title.titles}</a></li>`;
      })
      resolve(response);
    });
  }
}


function printData(){
	closeLoadingScreen();
	console.log("Data loaded");
}

