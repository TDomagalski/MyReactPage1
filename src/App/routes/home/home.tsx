import { FrontRooms } from "../../../components/FrontRooms";
import { Gallery } from "../../../components/Gallery";
import { FrontCounter } from "../../../components/FrontCounter";
import { FreeRooms } from "../../../components/FreeRooms";
import houseImg from "../../../img/house.webp";
import HotelIcon from "@mui/icons-material/Hotel";
import ShowerIcon from "@mui/icons-material/Shower";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

export const Home = () => {
	return (
		<div>
			<div className="top_img"></div>
			<div className="container">
				<div className="front_about">
					<div className="left_img">
						<img src={houseImg} alt="house" />
					</div>
					<div className="right_about">
						<h1>TomiDom Worker rooms</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
							assumenda temporibus, sunt non enim quo veniam ipsa nisi. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum
							consequatur rem. Molestiae officia cumque voluptate delectus
							tenetur commodi nesciunt eos, nam expedita quaerat saepe enim.
							Quia quam dolor facilis.
						</p>
						<div className="right_about-whatIs">
							<div className="beds">
								<HotelIcon />
								<p>32 beds</p>
							</div>
							<div className="bathrooms">
								<ShowerIcon />
								<p>10 bathrooms</p>
							</div>
							<div className="parking">
								<LocalParkingIcon />
								<p>35 parking spaces</p>
							</div>
							<div className="house_size">
								<ZoomOutMapIcon />
								<p>400m2</p>
							</div>
						</div>

						<a className="btn_details" href="#">
							View Details
						</a>
					</div>
				</div>
			</div>

			<FrontRooms />
			<Gallery />
			<FrontCounter
				maxRangeYears={2}
				maxRangeArea={100}
				maxRangeRooms={10}
				maxRangeVisitors={245}
			/>
			<FreeRooms />
		</div>
	);
};
