import "./Hero.css";

export function Hero() {
	return (
		<div id="heroWrapper">
			<div id="heroContent">
				<h1>This website is awesome</h1>
				<h3>
					This website has some subtext that goes here under the main title.
					It's a smaller font and the color is lower contrast.
				</h3>
				<button id="heroSignup">Sign Up</button>
			</div>
			<div id="heroImage">
				<img
					src="http://placekitten.com/400/200"
					alt="cute kitten"
				/>
			</div>
		</div>
	);
}
