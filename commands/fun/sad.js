const { Message } = require('discord.js')
const bot = require('wheat-better-cmd')
require('dotenv').config

const help = {
    name:"sad",
    htu:"",
    des:"Gif thể hiện cảm xúc & hành động",
    group:"fun",
    aliases: []
}

/**
 * @param {object} obj
 * @param {Message} obj.message
 */

const run = async ({message}) => {
    const gifArray = require('../../storage/gifsurl.json').sad
    const embed = await bot.wheatSampleEmbedGenerate()
    embed.setTitle(`${message.member.displayName} đang buồnnn ...`)
    embed.setImage(bot.wheatRandomElementFromArray(gifArray))
    await bot.wheatEmbedSend(message,[embed])
}

module.exports.run = run

module.exports.help = help