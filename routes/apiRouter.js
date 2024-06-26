const authRouter = require("./auth");
const gamesRouter = require("./games");
const categoriesRouter = require("./categories");
const usersRouter = require("./users");

const apiRouter = require("express").Router();
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter); 

module.exports = apiRouter;
