const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('./tools/logger');
const { getFlavourService, updateFlavourService } = require('./service/flavour');

const port = 8083;
const server = 'BBL Fridge API';

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/flavour', (req, res) => {
    logger.info(`${server} /flavour has been called !`);
    getFlavourService(req, res);
});

app.get('/flavour/:flavour', (req, res) => {
    logger.info(`${server} [GET] /flavour/stuff has been called !`);
    getFlavourService(req, res);
});

app.put('/flavour/:flavour', (req, res) => {
    logger.info(`${server} [PUT] /flavour/stuff has been called !`);
    updateFlavourService(req, res);
});

app.listen(port, () => {
    logger.info(`Starting "${server}" listening on port ${port}`);
});
