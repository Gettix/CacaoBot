const Discord = module.require("discord.js");
const fs = require("fs");
const g = require("../game.json");
const p = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    if(g.starts !== true) return bot.send("Игра не началась. Начните игру (.whstart)");
    let wordd = args.pop();
    
    if ( args.length === 1 && args[ 0 ] === 'set' ) {
    if(g.word !== 'none') return bot.send("Слово уже выбранно");
    message.delete().catch();
    g.word = wordd;
    g.gv = message.author.id;
    bot.send(`Слово выбрано. Ведущий ${message.author}. Введите .word is <word> для отгадки слова.`);
    }
    
    if ( args.length === 1 && args[ 0 ] === 'is' ) {
    if(wordd !== g.word) return bot.send(`${message.author}, Вы не угадали слово, попробуйте еще раз`);
    if(g.word == "none") return bot.send("Слово еще не выбранно. Выберите слово .word set");
                                     
    if(wordd == g.word) {
    if(message.author.id == g.gv) return bot.send("Ведущие не могут отгадывать");
    let uid = message.author.id;
    g.starts = false;
    g.word = "none";
    g.gv = 0;
    p[uid].coins += 70;
    bot.send(`${message.author} отгадал слово и получил 70 тикетов! Игра окончена:3`);
   };
  };
};

module.exports.help = {
    name: "word"
};
