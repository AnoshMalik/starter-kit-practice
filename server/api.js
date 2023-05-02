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
router.get(
	"/auth/github",
	passport.authenticate("github", { scope: ["profile"] }),
	function (req, res) {
		res.set("Access-Control-Allow-Origin", "*");
	}
);
router.get(
	"/auth/github/callback",
	passport.authenticate("github", {
		// successRedirect: "/api/success",
		failureRedirect: "/error",
		session: false,
		// eslint-disable-next-line no-unused-vars
	}),
	// eslint-disable-next-line no-unused-vars
	function (req, res) {
		req.session.username = req.user.username;
		req.session.email = req.user.email;
		req.session.profilePicture = req.user.profilePicture;
		res.redirect("/api/success");
	}
);

// GITHUB

router.get("/success", (req, res) => {
	res.json({ msg: req.session.email , profile: req.session.profilePicture , username: req.session.username });
});

router.get("/error", (req, res) =>
	res.json({ success: false, msg: "Login Error" })
);

passport.use(
	new GitHubStrategy(
		{
			clientID: "868e844044fa721e33c4",
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/api/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			// User.findOrCreate({ githubId: profile.id }, function (err, user) {
			const email = profile.emails[0].value;
			const profilePicture = profile.photos[0].value;
			const username = profile.username;
			return done(null, { email, profilePicture, username } );
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
