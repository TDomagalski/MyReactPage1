import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MapImage from "../../img/TomiDom.webp";

export const Footer = () => {
	return (
		<footer>
			<h2>Footer</h2>
			<div className="container footer">
				<div className="footer_info">
					<div className="footer_info-about">
						<h3>About TomiDom</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
							tenetur quam necessitatibus eius hic.
						</p>
						<a className="btn_details small" href="#">
							Read
						</a>
					</div>
					<div className="footer_info-details">
						<div className="footer_location">
							<a href="#">
								<LocationOnIcon />
								<span>ul. Krakowsa 62d, 32-090 Słomniki</span>
							</a>
						</div>
						<div className="footer_phoneNumber">
							<a href="#">
								<LocalPhoneIcon />
								<span>508-987-001</span>
							</a>
						</div>
						<div className="footer_email">
							<a href="#">
								<EmailIcon />
								<span>biuro@familyparty.com.pl</span>
							</a>
						</div>
						<div className="footer_socialmedia">
							<h3>Socialmedia</h3>
							<div className="footer_socialmedia-fb">
								<a href="#">
									<FacebookIcon />
								</a>
							</div>
							<div className="footer_socialmedia-twitter">
								<a href="#">
									<TwitterIcon />
								</a>
							</div>
							<div className="footer_socialmedia-yt">
								<a href="#">
									<YouTubeIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_map">
					<img src={MapImage} alt="map" />
				</div>
				<div className="footer_condition">
					<div className="footer_condition-company">
						<h6>TomiDom Tomasz Domagalski</h6>
					</div>
					<div className="footer_condition-details">
						<a href="#">Terms & Conditions</a>
						<a href="#">Contact Us</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
