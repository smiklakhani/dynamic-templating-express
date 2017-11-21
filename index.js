const express = require('express');
const ejs = require('ejs');

const app = express();

app.get('/home', (req, res) => {
    const template = getTemplateFromDb('someTemplateIdentifier');
    const data = getData();
    const html = ejs.render(template, data);
    res.send(html);
});

let getTemplateFromDb = (templateKey) => {
    // Assuming that some template key will be passed through, 
    // which we'll use in order to pull the template from the DB.
    if(templateKey) {
        return '<!DOCTYPE html><head><title><%= pageTitle; %></title></head><body><section><%- content; %></section></body></html>';
    }

    return null;
}

let getData = () => {
    return {
        pageTitle: 'Dynamic Template Test',
        content: '<h1>Welcome to the Dynamic Template Test page!</h1>',
    };
}


app.listen(3000, () => console.log('Express app listening on port 3000!'));