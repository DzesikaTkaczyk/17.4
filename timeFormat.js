var os = require('os');
process.stdin.setEncoding('utf-8');

function timeFormat(input) {
	var uptime = input;
	if (uptime >= 3600) {
		process.stdout.write((Math.floor(uptime / 3600)) + ' godz. ')
	}
	if (uptime >= 60) {
		process.stdout.write(Math.floor((uptime / 60) % 60) + ' min. ')
	}
	if (uptime >= 0) {
		process.stdout.write((uptime % 60) + ' sek.\n' )
	}
}

process.stdin.on('readable', function() {
	var input = process.stdin.read();

	if (!input) {
		return
	}
	
	timeFormat(input);
});
