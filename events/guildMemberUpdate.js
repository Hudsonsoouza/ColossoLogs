module.exports = {
    name: 'guildMemberUpdate',
    async execute(oldMember, newMember, client) {
        const logChannelId = process.env.CHANNEL_LOGS;
        const logChannel = client.channels.cache.get(logChannelId);

        if (!logChannel) return;

        const oldRoles = oldMember.roles.cache;
        const newRoles = newMember.roles.cache;

        const addedRoles = newRoles.filter(role => !oldRoles.has(role.id));
        const removedRoles = oldRoles.filter(role => !newRoles.has(role.id));

        if (addedRoles.size > 0) {
            addedRoles.forEach(role => {
                logChannel.send(`<:ereload:868744505329860639> | O membro **${newMember.user.tag}** recebeu o cargo: **${role.name}**`);
            });
        }

        if (removedRoles.size > 0) {
            removedRoles.forEach(role => {
                logChannel.send(`<:ereload:868744505329860639> | O membro **${newMember.user.tag} teve o cargo removido: ${role.name}**`);
            });
        }
    }
};
