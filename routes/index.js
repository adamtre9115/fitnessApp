const express = require("express");
const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

// matches with /api
router.use("/api", apiRoutes);

// if no routes are hit
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;