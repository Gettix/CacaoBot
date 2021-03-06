const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let enbed = new Discord.RichEmbed()
    .setDescription("Модерация")
    .setColor('#00f815')
    .addField("***Kick***", "*.kick <user>*")
    .addField("***ban***", "*.ban <user>*")
    .addField("***say***", "*.say <message>*")
	.addField("***warn***", "*.warn <user>*")
	.addField("***unwarn***", "*.unwarn <user>*")
        .addField("***Report on bot(and he bugs) on developer gmail***", ".mail <text>")
	.addField("***report***", "*.report <user> <reason>*");
    
    bot.send(enbed);
    
    let enbed1 = new Discord.RichEmbed()
    .setDescription("Экономия")
    .setColor('#00f815')
    .addField("***Coffee***", "*.coffee*")
    .addField("***pay***", "*.pay <user> <quantity>*")
    .addField("***daily***", "*.daily*")
    .addField("***shop***", "*.shop*")
    .addField("***work***", ".work")
    .addField("***bank***", ".bank")
    
    bot.send(enbed1);
    
    let enbedd = new Discord.RichEmbed()
    .setDescription("Гильдия")
    .setColor('#00f815')
    .addField("***Set Shop(Only server-admin can)***", "*.setshop roleid(Например: 88228595965545) цена*")
    .addField("***Shop Name(Only server-admin can)***", "*.shopname name*")
    .addField("***Buy role***", "*.shop*")
    
    bot.send(enbedd);
    
    let enbed2 = new Discord.RichEmbed()
    .setDescription("Развлечения")
    .setColor('#00f815')
    .addField("***8ball***", "*.8ball a <question>*")
    .addField("***meme***", "*.meme*")
    .addField("***rps***", "*.rps <object>*")
    .addField("***slots***", "*.slots*")
    .addField("***gaym***", "*.gaym*")
    .addField("***hunt***", "*.hunt*")
    .addField("***Doggy ^^ :dog:***", "*.dog*")
    .addField("***Word Hunter***", "*.whstart / .whstop*")
    .addField("***Password Generator***", "*.passgen 8(Длинна пароля)*")
    .addField("***Pokemons!!***", "*.poke / .inv*")
    
    bot.send(enbed2);
    
    let enbed3 = new Discord.RichEmbed()
    .setDescription("Информация")
    .setColor('#00f815')
    .addField("***Profile***", "*.me*")
    .addField("***serverinfo***", "*.serverinfo*")
    .addField("***help***", "*.help*")
    .addField("***Donate***", ".donate")
    
    bot.send(enbed3);
    
    let enbed4 = new Discord.RichEmbed()
    .setDescription("Социальное")
    .setColor('#00f815')
    .addField("***kiss***", ".kiss <user>")
    .addField("***Poll***", ".poll <text>")
    .addField("***embarassed***", ".embarassed")
    .addField("***hug***", "*.hug <user>*")
    .addField("***crossover***", "*.crossover*")
    .addField("***level***", "*.lvl*")
    .addField("***emoji***", "*.emoji <emoji>(to copy) / .emoji paste (to paste)*")
    
    bot.send(enbed4);
    
    let enbed5 = new Discord.RichEmbed()
    .setDescription("Role Play")
    .setColor('#00f815')
    .addField("***kill***", "*.kill <user>*")
    .addField("***health***", "*.health*")
    .addField("***attack***", "*.attack <user>*")
    .addField("***attack2***", "*.attack2 <user>*")
    .addField("***Shoot***", "*.shoot <user>*")
    .addField("***Invite***", "https://discordapp.com/oauth2/authorize?client_id=551625781818818590&permissions=8&scope=bot");

	bot.send(enbed5);

     let enbed6 = new Discord.RichEmbed()
    .setDescription("VIP")
    .setColor('#00f815')
    .addField("***Status***", "*.status <text>*")
    .addField("***SetColor***", "*.setcolor <RoleName> <#color>*")
    .setFooter("More Later...")

	bot.send(enbed6);
	
};

module.exports.help = {
    name: "help"
};
