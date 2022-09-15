import ImageRoom1 from "../../img/room1.webp";
import ImageRoom2 from "../../img/room2.webp";
import ImageRoom3 from "../../img/room3.webp";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import ShowerIcon from "@mui/icons-material/Shower";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

export const FreeRooms = () => {
	return (
		<div className="container">
			<h2 className="title">Free Rooms</h2>
			<div className="front_rooms-free">
				<div className="room">
					<img src={ImageRoom1} alt="Room1" />
					<div className="room_info">
						<h3>Room 1</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							optio,
						</p>
						<div className="room_infoIcons">
							<div className="rooms_infoIcon">
								<PersonIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<HotelIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<ShowerIcon />
								<p>1</p>
							</div>
							<div className="rooms_infoIcon">
								<ZoomOutMapIcon />
								<p>
									15 m<sup>2</sup>
								</p>
							</div>
						</div>
						<a className="btn_details small" href="#">
							Reade
						</a>
					</div>
				</div>
				<div className="room">
					<img src={ImageRoom2} alt="Room2" />
					<div className="room_info">
						<h3>Room 2</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							optio, quos, veritatis necessitatibus architecto vitae aliquam,
							consequatur et pariatur inventore odio provident maxime. Aliquam
						</p>
						<div className="room_infoIcons">
							<div className="rooms_infoIcon">
								<PersonIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<HotelIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<ShowerIcon />
								<p>1</p>
							</div>
							<div className="rooms_infoIcon">
								<ZoomOutMapIcon />
								<p>
									15 m<sup>2</sup>
								</p>
							</div>
						</div>
						<a className="btn_details small" href="#">
							Reade
						</a>
					</div>
				</div>
				<div className="room">
					<img src={ImageRoom3} alt="Room3" />
					<div className="room_info">
						<h3>Room 3</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							optio, quos, veritatis necessitatibus architecto vitae aliquam,
							consequatur
						</p>
						<div className="room_infoIcons">
							<div className="rooms_infoIcon">
								<PersonIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<HotelIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<ShowerIcon />
								<p>1</p>
							</div>
							<div className="rooms_infoIcon">
								<ZoomOutMapIcon />
								<p>
									15 m<sup>2</sup>
								</p>
							</div>
						</div>
						<a className="btn_details small" href="#">
							Reade
						</a>
					</div>
				</div>
				<div className="room">
					<img src={ImageRoom3} alt="Room3" />
					<div className="room_info">
						<h3>Room 3</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							optio, quos, veritatis necessitatibus architecto vitae aliquam,
							consequatur
						</p>
						<div className="room_infoIcons">
							<div className="rooms_infoIcon">
								<PersonIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<HotelIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<ShowerIcon />
								<p>1</p>
							</div>
							<div className="rooms_infoIcon">
								<ZoomOutMapIcon />
								<p>
									15 m<sup>2</sup>
								</p>
							</div>
						</div>
						<a className="btn_details small" href="#">
							Reade
						</a>
					</div>
				</div>
				<div className="room">
					<img src={ImageRoom3} alt="Room3" />
					<div className="room_info">
						<h3>Room 3</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
							optio, quos, veritatis necessitatibus architecto vitae aliquam,
							consequatur
						</p>
						<div className="room_infoIcons">
							<div className="rooms_infoIcon">
								<PersonIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<HotelIcon />
								<p>4</p>
							</div>
							<div className="rooms_infoIcon">
								<ShowerIcon />
								<p>1</p>
							</div>
							<div className="rooms_infoIcon">
								<ZoomOutMapIcon />
								<p>
									15 m<sup>2</sup>
								</p>
							</div>
						</div>
						<a className="btn_details small" href="#">
							Reade
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
