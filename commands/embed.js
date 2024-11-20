const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Cria e envia um embed no canal atual.'),
    async execute(interaction) {
        const embedRoleId = process.env.ADMIN_ROLE_ID;
        const memberRoles = interaction.member.roles.cache;

        // Verifica se o usuário tem a permissão necessária
        if (!memberRoles.has(embedRoleId)) {
            return interaction.reply({ content: 'Você não tem permissão para usar este comando.', ephemeral: true });
        }

        // Criação do modal
        const modal = new ModalBuilder()
            .setCustomId('embedModal')
            .setTitle('Criar Embed');

        const titleInput = new TextInputBuilder()
            .setCustomId('embedTitle')
            .setLabel('Título do Embed')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const descriptionInput = new TextInputBuilder()
            .setCustomId('embedDescription')
            .setLabel('Descrição do Embed')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);

        const firstActionRow = new ActionRowBuilder().addComponents(titleInput);
        const secondActionRow = new ActionRowBuilder().addComponents(descriptionInput);

        modal.addComponents(firstActionRow, secondActionRow);

        await interaction.showModal(modal);
    },
};

// Evento para lidar com a submissão do modal
module.exports.modalSubmit = async (interaction) => {
    if (interaction.customId !== 'embedModal') return;

    const title = interaction.fields.getTextInputValue('embedTitle');
    const description = interaction.fields.getTextInputValue('embedDescription');

    const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor(0x00ff00)
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setTimestamp();

    await interaction.reply({ content: 'Seu embed foi enviado com sucesso!', ephemeral: true });
    await interaction.channel.send({ embeds: [embed] });
};