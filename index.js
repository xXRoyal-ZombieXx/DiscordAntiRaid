const {Client, Intents, Collection,MessageEmbed} = require('discord.js')


const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES);
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'],intents: myIntents });
client.on('ready', () => {
    console.log('ready')
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.find(channel => channel.id === "915132123730563092") /* Channel to send welcome messages in */
    if (!channel) return;
	if(member.user.createdAt+172800000<= new Date(Date.now())){
        const joinembed = new MessageEmbed()
            .setTitle(`A new member just arrived!`)
            .setDescription(`Welcome ${member} we hope you enjoy your stay here!`)
            .setColor("#FF0000")

        channel.send({embeds:[joinembed]})
    }else{
        const kick = new MessageEmbed()
            .setTitle(`Underage`)
            .setDescription(`Dear ${member}\n We have noticed that your account does not meet our minimum age requirement(Not real life age, account age), Please wait at least 2 days before you can rejoin. This is not a ban, just a measure we take to prevent raiding. Thank you for reading this :)`)
            .setColor("#FF0000")

        member.send({embeds:[kick]}).then(()=>{
            member.kick("Account age does not meet the minimum requirements")
        })
    }
    
});

client.login("Bot Token Here");
