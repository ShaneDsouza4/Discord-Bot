const shortid = require("shortid");

const URL = require("./models/url");

async function shortenURL(url, creator){
    const shortID = shortid();
    let inputUrl = url.replace(" ", "");

    await URL.create({
        shortID: shortID,
        redirectURL: inputUrl,
        visitHistory: [],
        createdBy: creator
    })

    return "http://localhost:8000/url/"+shortID;

    
}

module.exports = {
    shortenURL
}