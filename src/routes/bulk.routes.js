const routerCandy = require("express").Router();

const handlerPostBulk = require("../handlers/bulk/handlerPostBulk");


handlerPostBulk.post("/", handlerPostBulk);

module.exports = handlerPostBulk;
