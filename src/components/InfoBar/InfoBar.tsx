import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";

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
					<a href="#">
						<FacebookIcon />
					</a>
				</div>
			</div>
		</div>
	);
};
