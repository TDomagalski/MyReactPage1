import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

type BarInfoProps = {
	phoneNumber: number;
	email: string;
};

export const InfoBar = (props: BarInfoProps) => {
	return (
		<div className="bar_info">
			<div className="bar_contact">
				<div className="phone_number">
					<LocalPhoneIcon />
					<a href={"tel:+48" + props.phoneNumber}>{props.phoneNumber}</a>
				</div>
				<div className="email">
					<EmailIcon />
					<a href={"mailto:" + props.email}>{props.email}</a>
				</div>
			</div>
			<div className="social_media">
				<div className="facebook">
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener noreferrer">
						<FacebookIcon />
					</a>
				</div>
				<div className="twitter">
					<a
						href="https://www.twitter.com/"
						target="_blank"
						rel="noopener noreferrer">
						<TwitterIcon />
					</a>
				</div>
				<div className="yt">
					<a
						href="https://www.youtube.com/"
						target="_blank"
						rel="noopener noreferrer">
						<YouTubeIcon />
					</a>
				</div>
			</div>
		</div>
	);
};
