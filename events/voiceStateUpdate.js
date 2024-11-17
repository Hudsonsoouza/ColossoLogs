module.exports = {
    name: 'voiceStateUpdate',
    execute(oldState, newState, client) {
        const logChannelId = process.env.CHANNEL_LOGS;
        const logChannel = client.channels.cache.get(logChannelId);

        if (!logChannel) return;

        const userId = newState.id;
        const userTag = newState.member.user.tag;
        const voiceStates = client.voiceStates || new Map();
        client.voiceStates = voiceStates;

        // Conectou a um canal de voz
        if (!oldState.channelId && newState.channelId) {
            voiceStates.set(userId, Date.now());
            logChannel.send(`<:ecoortec:868883149772455966> | **${userTag}**  conectou ao canal de voz **${newState.channel.name}**`);
        }
        // Moveu de um canal de voz para outro
        else if (oldState.channelId && newState.channelId && oldState.channelId !== newState.channelId) {
            const startTime = voiceStates.get(userId);
            if (startTime) {
                const duration = Date.now() - startTime;
                const durationString = new Date(duration).toISOString().substr(11, 8);
                logChannel.send(`<a:clsload:736044289707999302> | **${userTag}** moveu do canal de voz **${oldState.channel.name}** para **${newState.channel.name}** após **${durationString}**`);
                voiceStates.set(userId, Date.now());
            }
        }
        // Saiu de um canal de voz
        else if (oldState.channelId && !newState.channelId) {
            const startTime = voiceStates.get(userId);
            if (startTime) {
                const duration = Date.now() - startTime;
                const durationString = new Date(duration).toISOString().substr(11, 8);
                logChannel.send(`<:eno15254:868744505275351060> | **${userTag}** saiu do canal de voz **${oldState.channel.name}** após **${durationString}**`);
                voiceStates.delete(userId);
            }
        }
    }
};