const express = require("express");

const ProjectRouter = require("./projects/project-router.js");
const ResourceRouter = require("./Resources/resources-router");
const TaskRouter = require("./Tasks/tasks-router");
const PR = require('./projectResources/projectResources-router')

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);
server.use('/api/project-resources', PR)

module.exports = server;
