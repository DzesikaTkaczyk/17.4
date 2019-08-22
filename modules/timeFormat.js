var os = require('os');

function timeFormat() {
	var uptime = os.uptime();
	process.stdout.write('Work time: ')
	process.stdout.write((uptime % 60) + ' s, ' )
	if (uptime > 60) {
		process.stdout.write(Math.floor((uptime / 60) % 60) + ' min, ')
	}
	if (uptime > 3600) {
		process.stdout.write((Math.floor(uptime / 3600)) + ' h\n')
	}
}

exports.print = timeFormat;