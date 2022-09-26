const Discord = require('discord.js-commando');
/*----------------------
    Current Commands: 
    - factme  
------------------------*/
const gcbot = new Discord.Client();

gcbot.registry.registerGroup('clockwork', 'The Great Clockwork');
gcbot.registry.registerDefaults();
gcbot.registry.registerCommandsIn(__dirname + "/commands")

const token = "[Enter APP Token]";

gcbot.login(token);

console.log("Starting...");

gcbot.on("ready", () => {
  console.log(`the bot is online!`);
});
