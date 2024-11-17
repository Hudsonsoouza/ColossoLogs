module.exports = {
    name: 'channelCreate',
    async execute(channel) {
        const logChannelId = process.env.CHANNEL_LOGS;
        const logChannel = channel.guild.channels.cache.get(logChannelId);

        if (!logChannel) {
            console.error(`Canal de logs não encontrado: ${logChannelId}`);
            return;
        }

        try {
            await logChannel.send(`<:eon:868744505577312276> | Um novo canal de voz foi criado: **${channel.name}**`);
            console.log(`Log de criação de canal enviado para o canal ${logChannelId}`);
        } catch (error) {
            console.error('Erro ao enviar log de criação de canal:', error);
        }
    }
};
