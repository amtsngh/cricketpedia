module.exports = function(app, console) {
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const routes = require('./index');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(path.resolve(), 'view')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(path.resolve(), '/app/view/index.html'));
    });

    // Mount all routes on / path
    app.use('/', routes);
};