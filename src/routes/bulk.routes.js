const routerBulk = require("express").Router();

const handlerPostBulk = require("../handlers/bulk/handlerPostBulk");


routerBulk.get("/", handlerPostBulk);

module.exports = routerBulk;
