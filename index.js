const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('./tools/logger');
const { flavourService } = require('./service/flavour');

const port = 8083;
const server = 'BBL Fridge API';

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/flavour', (req, res) => {
    logger.info(`${server} /flavour has been called !`);
    flavourService(req, res);
});

app.get('/flavour/:flavour', (req, res) => {
    logger.info(`${server} /flavour/stuff has been called !`);
    flavourService(req, res);
});

app.listen(port, () => {
    logger.info(`Starting "${server}" listening on port ${port}`);
});
