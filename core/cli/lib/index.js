'use strict';

module.exports = core;
const pkg = require('../package.json')
const { info } = require('npmlog')
function core() {
    // TODO
    checkPackageVersion()
}

function checkPackageVersion(){
    info(pkg.version)
}
