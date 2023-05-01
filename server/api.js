import { Router } from "express";
import logger from "./utils/logger";

const router = Router();
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;



router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});



router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
	"/auth/github/callback",
	passport.authenticate("github", {
		failureRedirect: "/auth/error",
	}),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect("/success");
	}
);

router.get("/success", (req, res) => {
	res.json({ msg : "Success" });
});


router.get("/auth/error", (req, res) => res.json({ msg: "Unknown Error" }));

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

passport.serializeUser(function (user, done) {
	done(null, user);
});
passport.deserializeUser(function (user, done) {
	done(null, user);
});


export default router;
