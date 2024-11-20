<p>
Este projeto é um bot para Discord desenvolvido em Node.js utilizando a biblioteca discord.js. O bot possui funcionalidades de monitoramento de atividades, como logs de criação e deleção de canais, logs de mudanças de cargos, boas-vindas a novos membros, e comando de status.
</p>

<h2>Funcionalidades</h2>

<p>Logs de Criação e Deleção de Canais: Envia uma mensagem de log sempre que um canal é criado ou deletado.
Logs de Mudança de Cargos: Envia uma mensagem de log sempre que um membro recebe um novo cargo ou perde um cargo.
Boas-vindas a Novos Membros: Envia uma mensagem de boas-vindas em um canal específico quando um novo membro entra no servidor.
Comando de Status: Exibe o ping do bot, tempo de uptime, versão do Node.js e versão do discord.js.<p>

<h2>Pré-requisitos</h2>

<p>
Node.js v20.17.0 ou superior<br>
Uma conta no Discord com permissões para criar bots<br>
Token do bot do Discord<br>
<br>
Configure as variáveis de ambiente:<br>
<br>
Edite o arquivo .env na raiz do projeto e adicione as seguintes variáveis:<br>

   DISCORD_TOKEN=TOKENDOBOT<br>
   CHANNEL_LOGS=IDCANALDELOGS<br>
   CHANNEL_WELCOME=IDCANALDEBOASVINDAS<br>
   ID_BOT=IDDOBOT<br>
   ADMIN_ROLE_ID=IDCARGOPERMEMBED<br>

Substitua pelos valores apropriados.
</p>

<h2>Estrutura do Projeto</h2>

<p>
colossologs/<br>
├── commands/<br>
│   ├── status.js<br>
│   ├── embed.js<br>
├── events/<br>
│   ├── channelCreate.js<br>
│   ├── channelDelete.js<br>
│   ├── guildMemberAdd.js<br>
│   ├── guildMemberUpdate.js<br>
├── node_modules/<br>
├── .env<br>
├── index.js<br>
├── package.json<br>
├── README.md
</p>

<h3>Comandos</h3>

<p>/status: Exibe o status atual do bot, incluindo ping, uptime, versão do Node.js e versão do discord.js.</p>
<p>/embed: Abre um modal para envio de mensagem em forma de embed.</p>

<h3>Eventos</h3>

<p>channelCreate: Envia um log quando um canal é criado.<br>
channelDelete: Envia um log quando um canal é deletado.<br>
guildMemberAdd: Envia uma mensagem de boas-vindas quando um novo membro entra no servidor.<br>
guildMemberUpdate: Envia um log quando um membro recebe ou perde um cargo.
voiceStateUpdate: Envia um log quando um membro entra, sai e move de canal.</p>

![Screenshot_1](https://media.discordapp.net/attachments/560579066735099975/1307493277901127710/image.png?ex=673a8181&is=67393001&hm=3b7ba390209628c9c144a513a5ff49719ef3dd1f39c7bd26267e0842b9c2febb&=&format=webp&quality=lossless)