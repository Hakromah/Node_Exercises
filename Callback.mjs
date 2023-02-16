import * as fs from 'fs';

fs.writeFile('demo.html', '<h1>hello</h1>',{ encoding: 'utf8' }, (error) => {
	if (error) {
		console.log('error', error);
	}
	console.log('file created successfuly');
});
