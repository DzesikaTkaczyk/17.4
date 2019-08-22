var os = require('os');
var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

	var instruction = input.toString().trim();
	switch (instruction) {
    	case '/exit':
    		process.stdout.write('Quitting app!\n');
    		process.exit();
            break;
        case '/sayhello':
            process.stdout.write('hello!\n');
            break;
         case '/getOSinfo':
            OSinfo.print();
            break;
    	case '/node':
		  process.stdout.write(process.versions.node);
		  break;
    	case '/sysLang':
    		process.stdout.write(process.env.LANG);
    		break;
    	default:
    		process.stderr.write('Wrong instruction!\n')
    }
});
