function getFullFlavourInfo() {

}

function getFlavourInfo(flavour) {

}

function flavourService(req, res) {
    const flavour = req.params.flavour;
    const result = flavour ? getFlavourInfo(flavour) : getFullFlavourInfo();
    res.json(result);
}

module.exports = {
    flavourService,
};
