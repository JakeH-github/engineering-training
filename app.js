const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/getJiraTickets', (req, res) => {
    res.json({ jirasObject: [] });
})

app.use('/', router);
app.use(express.static('public'));
app.listen(process.env.port || 3000);
console.log("App listening on localhost port 3000");
