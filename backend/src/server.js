const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({override: true});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});