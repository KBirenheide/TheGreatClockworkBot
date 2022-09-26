const Discord = require('discord.js-commando');
/*----------------------
    Current Commands: 
    - Factme  
------------------------*/
const gcbot = new Discord.Client();

gcbot.registry.registerGroup('clockwork', 'The Great Clockwork');
gcbot.registry.registerDefaults();
gcbot.registry.registerCommandsIn(__dirname + "/commands")

gcbot.login(process.env.BOT_TOKEN);