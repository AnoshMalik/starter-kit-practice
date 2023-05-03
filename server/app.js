import express from "express";
const passport = require("passport");
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
app.use(
	cors({
		origin: "*",
		credentials: true,
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	})
);
app.use(
	cookieSession({
		name: "github-auth-session",
		keys: ["key1"],
		maxAge: 1 * 60 * 60 * 1000,
	})
);

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Content-Type", "application/json");
	next();
});

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














export default app;
