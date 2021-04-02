const Discord = require('discord.js');
const client = new Discord.Client();
client.login("TOKEN");

const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "API KEY";
const finnhubClient = new finnhub.DefaultApi()

console.log("Lets get this show on the road");

client.on("ready", readyDiscord)

function readyDiscord()
{
    console.log("😎😍");
} //Authenticated Successfully

client.on("message", stockPrice)
function stockPrice(msg)
{
    if ( msg.channel.id == "811415383109140531");
    {
        messageSplit = msg.content.split(" ");
        if(messageSplit[0] == "check")
        {
            for(i = 1; i < messageSplit.length; i++)
            {
                //the API itself doesnt throw an error, so we don't need a try-catch method
                try
                {
                    finnhubClient.quote(messageSplit[i], (error, data, response) => {
                    console.log(data)
                    stockInfo = JSON.stringify(data);
                    msg.channel.send(stockInfo);
                    });
                }              
                catch(err)
                {
                    msg.channel.send(`The symbol ${messageSplit[i]} is invalid.`, err);
                }
            }
        } 
    }
}

client.on ("message", companyNews)
function companyNews (msg)
{
    if ( msg.channel.id == "811415383109140531" && msg.content == "news")
    {
        // Basic financials
            finnhubClient.companyBasicFinancials("AAPL", "margin", (error, data, response) => {
            console.log(data)
            newsInfo = JSON.stringify (data);
            msg.channel.send (newsInfo)    
        });
    }
}


