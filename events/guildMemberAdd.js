const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        const welcomeChannelId = process.env.CHANNEL_WELCOME;
        const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);

        if (!welcomeChannel) return;

        const embed = new EmbedBuilder()
            .setTitle('Boas-vindas!')
            .setDescription(`Bem-vindo ao servidor, ${member.user.tag}!`)
            .setColor(0x00ff00)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

        welcomeChannel.send({ embeds: [embed] });
    }
};
