import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";

const router = Router();
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

// LOGOUT
// eslint-disable-next-line no-unused-vars
router.get("/logout", (req, res) => {
	req.session = null;
	// req.logOut();
	// res.redirect("/login");

	res.status(204).send("");
	// res.redirect("/login");

	// eslint-disable-next-line no-console
	// console.log("-------> User Logged out");
});

router.post("/logout", function (req, res, next) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});

// 	// eslint-disable-next-line no-console
// 	console.log("logout called");
});


// GITHUB
router.get(
	"/auth/github",
	passport.authenticate("github", { scope: ["profile"] }),
	function (req, res) {
		db.query( );
		// SELECT xyx FROM !"£"
		res.set("Access-Control-Allow-Origin", "*");
	}
);
router.get(
	"/auth/github/callback",
	passport.authenticate("github", {
		// successRedirect: "/api/success",
		failureRedirect: "/error",
		session: false,
	}),
	function (req, res) {
		req.session.username = req.user.username;
		req.session.email = req.user.email;
		req.session.profilePicture = req.user.profilePicture;
		res.redirect("/success");
	}
);

// GITHUB

router.get("/success", (req, res) => {
	res.json({
		profile: req.session.profilePicture,
		username: req.session.username,
		email: req.session.email,
	});
});

router.get("/error", (req, res) =>
	res.json({ success: false, msg: "Login Error" })
);

// GITHUB
passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/api/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			// User.findOrCreate({ githubId: profile.id }, function (err, user) {
			const email = profile.emails[0].value;
			const profilePicture = profile.photos[0].value;
			const username = profile.username;
			return done(null, { email, profilePicture, username });
			// });
		}
	)
);

// GOOGLE
router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile"] }),
	function (req, res) {
		res.set("Access-Control-Allow-Origin", "*");
	}
);

router.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		failureRedirect: "/error",
		// successRedirect: "/success",
		session: false,
	}),
	function (req, res) {
		// Successful authentication, redirect home.
		req.session.username = req.user.username;
		req.session.email = req.user.email;
		req.session.profilePicture = req.user.profilePicture;
		res.redirect("http://localhost:3000/success");
	}
);

// GOOGLE
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/api/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			// User.findOrCreate({ googleId: profile.id }, function (err, user) {
			const email = profile.emails[0].value;
			const profilePicture = profile.photos[0].value;
			const username = profile.displayName;
			return done(null, { email, profilePicture, username }); // });
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
	done(null, user);
});
passport.deserializeUser(function (user, done) {
	done(null, user);
});

export default router;
