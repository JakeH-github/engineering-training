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
    constructor() {
        this.links = [];
        this.titles = [];
        this.jiraObject = [];
        this.createJiraObject();
        //this.fetchGitHubData();
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

    fetchGitHubData(callback) {
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
            //console.log(commitArray);
            this.fetchJiraSummary(commitArray, callback);
        });
    }

    // renderData: function(data){
    // return new Promise((resolve, reject) => {

    fetchJiraIssue(jiraNumberArray, i) {
        return new Promise((resolve, reject) => {
            jira.findIssue(jiraNumberArray[i])
                .then(issue => {
                    resolve({title: `${issue.fields.summary}`, link: 'https://totalwine.atlassian.net/browse/'+jiraNumberArray[i]})
                })
                .catch(err => {
                    console.error(err);
                    reject();
                });
        })
    }

    fetchJiraSummary(jiraNumberArray, callback) {
            let promises = [];
            for (let i = 0; i < jiraNumberArray.length; i++) {
                promises.push(this.fetchJiraIssue(jiraNumberArray, i))// `https://totalwine.atlassian.net/browse/${jiraNumberArray[i]}`)
                //console.log(jiraNumberArray[i]);
            }
            Promise.all(promises).then(data => {
                callback(data);
            })
            //console.log(promises);
    }
}


let jiraTemplate = {icon: "bi bi-check-circle-fill"};
let errorJiraTemplate = {icon: "bi bi-x-circle"};

function getRandomNumber() {
    return Math.floor(Math.random() * 3) !== 0;
}

let dataHandler = new DataHandler();

module.exports = dataHandler;
