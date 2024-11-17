module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        const updateStatus = () => {
            const ping = client.ws.ping;
            client.user.setPresence({
                activities: [{ name: `Ping: ${ping}ms` }],
                status: 'online'
            });
            console.log(`Status atualizado: Ping: ${ping}ms`);
        };

        // Atualiza o status imediatamente ao iniciar
        updateStatus();

        // Atualiza o status a cada x tempo)
        setInterval(updateStatus, 180000);
    }
};