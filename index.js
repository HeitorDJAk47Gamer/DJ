const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

const { TOKEN, LOFI, TESS, MIX, IKKI, FOX, MEGALOVANIA, NCS } = require('./config.json');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

client.login(TOKEN);

client.on('ready', () => {
  client.user.setStatus('offline') 
	console.log('Bot online!');
});

client.on('message', async (message) => {
	if (message.content == '?lo-fi') {
		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Entre em um canal de voz primeiro!');
		}

		const connection = await voiceChannel.join();

		const watcher = connection.play(
			ytdl(LOFI, {
				filter: 'audioonly',
				quality: 'highest',
			})
		);

		watcher.on('end', () => voiceChannel.leave());
	}
});

client.on('message', async (message) => {
	if (message.content == '?Tess') {
		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Entre em um canal de voz primeiro!');
		}

		const connection = await voiceChannel.join();

		const watcher = connection.play(
			ytdl(TESS, {
				filter: 'audioonly',
				quality: 'highest',
			})
		);

		watcher.on('end', () => voiceChannel.leave());
	}
});

client.on('message', async (message) => {
	if (message.content == '?mix') {
		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Entre em um canal de voz primeiro!');
		}

		const connection = await voiceChannel.join();

		const watcher = connection.play(
			ytdl(MIX, {
				filter: 'audioonly',
				quality: 'highest',
			})
		);

		watcher.on('end', () => voiceChannel.leave());
	}
});

client.on('message', async (message) => {
	if (message.content == '?ikki') {
		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Entre em um canal de voz primeiro!');
		}

		const connection = await voiceChannel.join();

		const watcher = connection.play(
			ytdl(IKKI, {
				filter: 'audioonly',
				quality: 'highest',
			})
		);

		watcher.on('end', () => voiceChannel.leave());
	}
});

client.on('message', async (message) => {
	if (message.content == '?megalovania') {
		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Entre em um canal de voz primeiro!');
		}

		const connection = await voiceChannel.join();

		const watcher = connection.play(
			ytdl(MEGALOVANIA, {
				filter: 'audioonly',
				quality: 'highest',
			})
		);

		watcher.on('end', () => voiceChannel.leave());
	}
});

client.on('message', async (message) => {
	if (message.content == '?NCS') {
		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('Entre em um canal de voz primeiro!');
		}

		const connection = await voiceChannel.join();

		const watcher = connection.play(
			ytdl(NCS, {
				filter: 'audioonly',
				quality: 'highest',
			})
		);

		watcher.on('end', () => voiceChannel.leave());
	}
});