// requireing dependencies express + path
const express = require('express');
const path = require('path');
const tables = require('./tables');
const waitlist = require('./waitlist')
// set up express w/ two constants one for app and one for port

const app = express();
const PORT = process.env.PORT || 3001;



// set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up route to vew page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));



//set up route to reservation page  xxx
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
// set up route to tables pagexxxxx
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
// display current reservations  

// display wait list  
app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitlist', (req, res) => res.json(waitlist));


// create post method to take in new reservation
app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();
    console.log(newTable);
  
    tables.push(newTable);
    res.json(newTable);
  });

// start server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));