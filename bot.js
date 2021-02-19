const Discord = require('discord.js');
const client = new Discord.Client();
client.login( "token");
const Stocks = require("stocks.js"); //link bot.js with the API
const stocks = new Stocks('1SK1E2IFS37E41MU'); // replace XXXX with your API Key

console.log("Let's get this show on the road");

//client.on is to communciate with the discord server
client.on("ready", readyDiscord)

function readyDiscord()
{
    console.log("😎😍");
} //Authenticated Successfully

// Listener -> event tag of whenever a message comes do this function
// 
//client.on("message", stockPrice) //the string in the first parameter is called an 'event'. 
client.on("message", gotMessage) //And the whole line is called a 'listener'

async function gotMessage(msg)
{
    //console.log(msg.content);
    if(msg.channel.id == "811415383109140531" && msg.content === "Humm") //Spam Channel only
    {
        msg.channel.send("Yoooo");
    }
}

async function stockPrice(msg)
{
    console.log(msg.content);
    if(msg.channel.id == "811415383109140531" && msg.content === "TSLA")
    {
        var options = { symbol: "TSLA", interval: "1min", amount: 3};
        // var options = { symbol: "TSLA", interval: "1min", start: new Date('2021-02-17T00:00:00.000Z'), end: new Date('2021-02-16T00:01:00.000Z')};
        var result = await stocks.timeSeries(options);
        stockInfo = JSON.stringify(result); //this converts the data into a string
        msg.channel.send(stockInfo);

    }
}

//TO-DO (NOW COMLETED)
//-All messages are logged twice
//-Combine stockPrice and gotMessage into one method
//-generalize the ticker 
//  -require a way to authenticate validity of the ticker
//-String manipulation to find the wanted data (close price)
//-Figure out how the time intervals work (1min amount: 1 gives data from 12am)


// // client.on ("getPrice", stockPrice );

// // async function stockPrice ()   {
// //     const data = await yahooStockPrices.getCurrentData('AAPL');
// //     console.log(data); // { currency: 'USD', price: 132.05 };
// // }
