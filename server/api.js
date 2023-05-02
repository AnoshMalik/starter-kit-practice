import { Router } from "express";
import logger from "./utils/logger";

const router = Router();
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;



router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


// GITHUB
router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }), function (req, res) {
	req.session.email = req.email;
	res.set("Access-Control-Allow-Origin", "*");

});
router.get(
	"/auth/github/callback",
	passport.authenticate("github", {
		successRedirect: "/api/success",
		failureRedirect: "/error",
		session: false,
	// eslint-disable-next-line no-unused-vars
	}),function (req, res) {
	req.session.email = req.email;
});

// GITHUB


router.get("/success", (req, res) => {
	res.json({ msg : req.session.count });
});


router.get("/error", (req, res) => res.json({ success: false, msg: "Login Error" }));

passport.use(
	new GitHubStrategy(
		{
			clientID: "868e844044fa721e33c4",
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/api/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			// User.findOrCreate({ githubId: profile.id }, function (err, user) {
			return done(null, profile);
			// });
		}
	)
);

// SESSION
router.get("/session/stats", (request, response) => {
	const { count, userId } = request.session;
	response.json({ count: count, userId: userId });
});

router.get("/session/login", (request, response) => {
	request.session.count = 0;
	request.session.userId = "arya123";
	response.json({ message: "Hi there" });
});

router.get("/session/save", (request, response) => {
	request.session.count++;
	response.json({ message: "Ok saved!" });
});
// ^SESSION

passport.serializeUser(function (user, done) {
	done(null, user._id);
});
passport.deserializeUser(function (user, done) {
	done(null, user);
});


export default router;
