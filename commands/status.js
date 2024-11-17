const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Mostra o status atual do bot'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Status do Bot')
            .setColor(0x0099ff)
            .addFields(
                { name: 'Ping', value: `${interaction.client.ws.ping}ms`, inline: true },
                { name: 'Uptime', value: `${Math.floor(interaction.client.uptime / 1000)}s`, inline: true },
                { name: 'Node.js Version', value: process.version, inline: true },
                { name: 'Discord.js Version', value: require('discord.js').version, inline: true }
            )
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};