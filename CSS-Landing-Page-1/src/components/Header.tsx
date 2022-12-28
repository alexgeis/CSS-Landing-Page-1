import "./Header.css";

export function Header() {
	return (
		<div id="headerWrapper">
			<nav>
				<div id="headerLogo">Header Logo</div>

				<ul>
					<li>
						<a href="#">header link one</a>
					</li>
					<li>
						<a href="#">header link two</a>
					</li>
					<li>
						<a href="#">header link three</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
