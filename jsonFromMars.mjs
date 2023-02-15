import { createServer } from 'node:http';

const mars = {
	name: 'Pual',
	id: 1,
};

const server = createServer((request, response) => {
	console.log('request received');

	response.statusCode = 200;

	response.setHeader('Content-Type', 'applicatio/');
	let obj = JSON.stringify(mars);
	response.end(obj);
});

server.listen(3000, () => {
	console.log(`Server running at http://localhost:3000`);
});
