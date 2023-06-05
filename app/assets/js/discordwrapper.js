// Work in progress
const { LoggerUtil } = require('helios-core')

const logger = LoggerUtil.getLogger('DiscordWrapper')

//print message in console when file readed
logger.info('DiscordWrapper loaded')

//the discord-rpc module
const rpc = require('discord-rpc');

const config = {
	appId: "1113882295728873524", //Id of your application
	details: "Private Minecraft SMP", //Your descriptions
	largeImageKeyName: "bigmodded", // Key to the large image (https://discord.com/developers/applications -> Rich Presence -> Art Assets)
	largeImageText: "Modded Revamped", //Text when you put your mouse on the large image
	smallImageKeyName: "minecraft", // Key to the small image (https://discord.com/developers/applications -> Rich Presence -> Art Assets)
	smallImageText: "Minecraft 1.19.2", //Text when you put your mouse on the small image

	buttonOneName: "Trailer of the server", //Name of the button
	buttonOneUrl: "https://youtu.be/xvFZjo5PgG0", //URL of the button
};

rpc.register(config.appId);
const client = new rpc.Client({transport: 'ipc'});

client.on('ready', () => {
	console.log('RPC Started');
	client.setActivity({
		details: config.details,
		largeImageKey: config.largeImageKeyName,
		largeImageText: config.largeImageText,
		smallImageKey: config.smallImageKeyName,
		smallImageText: config.smallImageText,
		buttons: [
			{
				label: config.buttonOneName,
				url: config.buttonOneUrl
			},
		]
	});
});

const clientId = config.appId
client.login({ clientId });