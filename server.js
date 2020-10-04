const express = require('express');
const app = express();
const PORT = 5555;

app.use(express.static('./dist'));

app.get('/', (req, res) => {
	res.send('index');
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
