const routerCandy = require("express").Router();

const handlerPostBulk = require("../handlers/bulk/handlerPostBulk");


handlerPostBulk.post("/", handlerPostCandy);

module.exports = routerCandy;
