module.exports = {
    name: 'channelDelete',
    async execute(channel) {
        const logChannelId = process.env.CHANNEL_LOGS;
        const logChannel = channel.guild.channels.cache.get(logChannelId);

        if (!logChannel) {
            console.error(`Canal de logs não encontrado: ${logChannelId}`);
            return;
        }

        try {
            await logChannel.send(`<:ereload:868744505313075213> | Um canal de voz foi deletado: **${channel.name}**`);
            console.log(`Log de deleção de canal enviado para o canal ${logChannelId}`);
        } catch (error) {
            console.error('Erro ao enviar log de deleção de canal:', error);
        }
    }
};
