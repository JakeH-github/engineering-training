const { Octokit } = require("@octokit/rest");
require('dotenv').config();

const JiraApi = require('jira-client');

let jira = new JiraApi({
    protocol: 'https',
    host: 'totalwine.atlassian.net',
    username: 'jhorvath@totalwine.com',
    password: process.env.JIRA_TOKEN,
    apiVersion: '2',
    strictSSL: true
});

jira.findIssue("DIG-72591")
    .then(issue => {
        console.log(`Status: ${issue.fields.status.name}`);
    })
    .catch(err => {
        console.error(err);
    });


const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    baseUrl: 'https://api.github.com',
    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
    },
    request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
    }
});



class DataHandler {
    constructor(links, titles) {
        this.links = links;
        this.titles = titles;
        this.jiraObject = [];
        this.createJiraObject();
        this.fetchGitHubData();
    }

    createJiraObject() {
        for (let index = 0; index < this.titles.length; index++) {
            this.jiraObject.push({
                ...(getRandomNumber() ? jiraTemplate : errorJiraTemplate),
                link: this.links[index],
                title: this.titles[index],
            });
        }
        //console.log(this.jiraObject);
    }

    fetchGitHubData() {
        const regex = /[A-Z]{2,}-\d+/;
        let commitArray = [];
        octokit.rest.repos.listCommits({
            owner: "JakeH-github",
            repo: "engineering-training",
        }).then((value) => {
            let arrayLength = value.data.length;
            for (let i = 0; i < arrayLength; i++) {
                let currentCommit = value.data[i].commit.message;
                let duplicate = commitArray.indexOf(currentCommit.match(regex)[0]);
                if (duplicate === -1) {
                    commitArray.push(currentCommit.match(regex)[0]);
                }
            }
            console.log(commitArray);
            this.fetchJiraSummary(commitArray);
        });
    }

    fetchJiraSummary(jiraNumberArray) {
        for (let i=0; i<jiraNumberArray.length; i++) {
            console.log(jiraNumberArray[i]);
            jira.findIssue(jiraNumberArray[i])
                .then(issue => {
                 console.log(`Summary: ${issue.fields.summary}`);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
}


const jiraLinks = [
    "https://github.com/JakeH-github/engineering-training",
    "https://github.com/JakeH-github/engineering-training/commit/c393a996658767fe4a937ad93ecf7eb6071fc43f",
    "https://github.com/JakeH-github/engineering-training/commit/c3ab45dad579f2af486d9948e40c81c82bf7a280",
    "https://github.com/JakeH-github/engineering-training/commit/d682d9b669be0182fc08eebca419304200919eb1",
    "https://github.com/JakeH-github/engineering-training/commit/5f54d39ad6f5c571d6f8c65f25a1176479f601cd",
    "https://github.com/JakeH-github/engineering-training/commit/3bdbb3697970d285875e55b90c20d71aec9a7fc0",
    "https://github.com/JakeH-github/engineering-training/commit/61d6de65dcce6e6e226d2ff7f2bf97d8a2f2455b",
    "https://github.com/JakeH-github/engineering-training/commit/e378f11d0b7d820ba7146b181463aab092aa0b07",
    "https://github.com/JakeH-github/engineering-training/commit/431b75f3eb11f321e6b00effd9e32a66fcbe8e4a",
    "https://github.com/JakeH-github/engineering-training/commit/b04be5dbbe8cbb08f96e183c7a85bfd676e4aa1e",
];

const jiraTitles = [
    "Create a public GitHub repo",
    "DIG-70771 Create index.html file",
    "Add anchor tags for each completed subtasks.",
    "Make unordered list of anchor tags",
    "Add TWM logo as an image",
    "Add style attributes to the img tag to setting the height",
    "Add a head, add a style to the head",
    "Add a selector inside style tag that targets the list items and removes the bullet",
    "Pseudo-selectors - Add hover styling to list elements",
    "UI Libraries - Add Bootstrap to your page",
];

let jiraTemplate = {icon: "bi bi-check-circle-fill"};
let errorJiraTemplate = {icon: "bi bi-x-circle"};

function getRandomNumber() {
    return Math.floor(Math.random() * 3) !== 0;
}

let dataHandler = new DataHandler(jiraLinks, jiraTitles);

module.exports = dataHandler;
