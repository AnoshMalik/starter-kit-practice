import express from "express";
const passport = require("passport");
// const GitHubStrategy = require("passport-github2").Strategy;
import cookieSession from "cookie-session";
import cors from "cors";
import apiRouter from "./api";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";

const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());
app.use(cors({ origin: "*" }));

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));

app.use(logErrors());
app.use(passport.initialize());
app.use(passport.session());

app.use(
	cookieSession({
		name: "github-auth-session",
		keys: ["key1", "key2"],
	})
);












export default app;
