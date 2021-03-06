// requireing dependencies express + path
const express = require('express');
const path = require('path');

// set up express w/ two constants one for app and one for port

const app = express();
const PORT = 3000;



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
app.get('/api/tables', (req, res) => res.json(tobenamed));

app.get('/api/waitlist', (req, res) => res.json(tobenamed2));


// create post method to take in new reservation

// start server to begin listening