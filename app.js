const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const dataHandler = require('./dataHandler')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/getJiraTickets', (req, res) => {
    dataHandler.fetchGitHubData(function(data){
        res.json({ jirasObject: data });
    });
})

app.use('/', router);
app.use(express.static('public'));
app.listen(process.env.port || 3000);
console.log("App listening on localhost port 3000");
