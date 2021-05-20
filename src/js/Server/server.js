"use strict";
/** File creates parses configurations, creates server, implements endpoints
 */
const fs = require("fs");
const http = require("http");
const mysql = require("mysql2/promise");
/**
 * @type {function(*, *, *=): void}
 */
const httpError = require("./utils/httpError");
const loadEntities = require("./utils/loadEntities");

/**
 * Function can Run server and able to return 'Server error' or 'Server started'
 */

const Koa = require("koa");
const Router = require("koa-router");
const Service = require("./service");

const app = new Koa();

const router = new Router();
const service = new Service();


router.get("/api/person/:id", async (ctx, next) => {
    ctx.body = await service.findOne(ctx.query, ctx.path.id);
}).get("/api/person", async (ctx, next) => {
    ctx.body = await service.find(ctx.query);
}).post("/api/person", async (ctx, next) => {
    ctx.body = await service.create(ctx.query, ctx.req.body);
}).put("/api/person/:id", async (ctx, next) => {
    ctx.body = await service.update(ctx.query, ctx.path.id, ctx.req.body);
}).delete("/api/person/:id", async (ctx, next) => {
    ctx.body = await service.delete(ctx.query, ctx.path.id);
})

router.get("/api/task/:id", async(ctx, next) => {
    ctx.body = await service.findOne(ctx.query, ctx.path.id);
}).get("/api/task", async (ctx, next) => {
    ctx.body = await service.find(ctx.query);
}).post("/api/task", async (ctx, next) => {
    ctx.body = await service.create(ctx.query, ctx.req.body);
}).put("/api/task/:id", async (ctx, next) => {
    ctx.body = await service.update(ctx.query, ctx.path.id, ctx.req.body);
}).delete("/api/task/:id", async (ctx, next) => {
    ctx.body = await service.delete(ctx.query, ctx.path.id);
})

router.get("/api/project/:id", async(ctx, next) => {
    ctx.body = await service.findOne(ctx.query, ctx.path.id);
}).get("/api/project", async (ctx, next) => {
    ctx.body = await service.find(ctx.query);
}).post("/api/project", async (ctx, next) => {
    ctx.body = await service.create(ctx.query, ctx.req.body);
}).put("/api/project/:id", async (ctx, next) => {
    ctx.body = await service.update(ctx.query, ctx.path.id, ctx.req.body);
}).delete("/api/project/:id", async (ctx, next) => {
    ctx.body = await service.delete(ctx.query, ctx.path.id);
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
