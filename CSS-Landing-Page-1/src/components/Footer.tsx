import "./Footer.css";
import githubLogo from "../assets/icons/footer/github-mark.svg";
import linkedInLogo from "../assets/icons/footer/linkedin-round-icon.svg";
import spotifyLogo from "../assets/icons/footer/spotify-icon.svg";

export function Footer() {
	return (
		<div id="footerWrapper">
			<a
				href="https://github.com/alexgeis"
				target="_blank"
			>
				<div className="footerIconWrapper">
					<img
						src={githubLogo}
						alt="github"
					/>
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/alexngeis/"
				target="_blank"
			>
				<div className="footerIconWrapper">
					<img
						src={linkedInLogo}
						alt="linkedIn"
					/>
				</div>
			</a>
			<a
				href="https://open.spotify.com/artist/41yri20ft220T9dx4A6mWa?si=-e-vKZuXSvqnzf3-7tIjDA"
				target="_blank"
			>
				<div className="footerIconWrapper">
					<img
						src={spotifyLogo}
						alt="spotify"
					/>
				</div>
			</a>
		</div>
	);
}
