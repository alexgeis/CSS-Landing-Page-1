import "./InfoSection.css";

export const InfoSection = () => {
	return (
		<section id="randoInfoSection">
			<h2>Some random information.</h2>
			<div className="cardSection">
				<div className="infoCard">
					<div className="infoBox"></div>
					<p>this is some subtext under an illustration or image</p>
				</div>
				<div className="infoCard">
					<div className="infoBox"></div>
					<p>this is some subtext under an illustration or image</p>
				</div>
				<div className="infoCard">
					<div className="infoBox"></div>
					<p>this is some subtext under an illustration or image</p>
				</div>
				<div className="infoCard">
					<div className="infoBox"></div>
					<p>this is some subtext under an illustration or image</p>
				</div>
			</div>
		</section>
	);
};
