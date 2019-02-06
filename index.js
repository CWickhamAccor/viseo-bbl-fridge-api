const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('./tools/logger');
const { nluService } = require('./service/nlu');

const port = 8083;
const server = 'BBL Fridge API';

app.use(bodyParser.json({ limit: '50mb' }));

app.post('/nlu', (req, res) => {
    logger.info(`${server} has been called !`);
    nluService(req, res);
});

app.listen(port, () => {
    logger.info(`Starting "${server}" listening on port ${port}`);
});
