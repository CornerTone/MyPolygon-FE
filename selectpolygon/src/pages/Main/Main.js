import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { HeaderLogout } from "../../components/HeaderLogout";
import { Footer } from "../../components/Footer";
import MyFigureChart from "./PolygonChart";
import WeekCalendar from "../../components/Calendar";
import axios from "axios";

export function Main() {

	const [date, setDate] = useState(new Date());
	const [polygonData, setPolygonData] = useState(null);

	useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/polygon/read/{id}");
                const { success, polygon } = response.data;
                if (success) {
                    setPolygonData(polygon.elements);
                } else {
                    console.error('Failed to fetch polygon data');
                }
            } catch (error) {
                console.error('Error fetching polygon data:', error);
            }
        };

        fetchData();
    }, []);


	return (
		<RootWrapperNaN>

			<Frame48>
				<NaN_0003>나만의 다각형</NaN_0003>
				<HeaderLogout />
			</Frame48>

			<NaN_0004>
				<Line3/>
				<WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
			</NaN_0004>

			<MyFigure>My figure</MyFigure>
			<MyFigureChart data={polygonData} />

			<Group64>
				{(polygonData && polygonData.length > 0) ? (
					polygonData.map((item, index) => (
						<Group67>
							<div key={index}>
								<Rectangle7 />
								<_15>{`${item.name}  ${item.score}%`}</_15>
							</div>
						</Group67>
					))
				) : (
					<>
						<_16> 검사를 진행해 주세요!</_16>
					</>
				)}
			</Group64>
		
		<Footer />
		</RootWrapperNaN>
	)
}

const RootWrapperNaN = styled.div`
	min-height: 100vh;
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: relative;
`;

const Group64 = styled.div`
	width: 311px;
	height: 160px;
	position: absolute;
	left: 24px;
	top: 534px;
`;

const Group67 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 1px;
	top: 58px;
	background-color: #213555;
	border-radius: 10px;

`;

const Rectangle7 = styled.div`
	width: 149px;
	height: 46px;
	box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	background: rgb(33, 53, 85), rgb(33, 53, 85), rgb(33, 53, 85);
	background-repeat: no-repeat, no-repeat, no-repeat;
	background-size: contain, contain, contain;
	background-position: center, center, center;
	border-radius: 10px;
	position: absolute;
	left: 0px;
	top: 0px;
`;


const Group66 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 77px;
	top: 0px;
	background-color: #213555;
	border-radius: 10px;
`;

const _15 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 15px;
	font-family: Inter, sans-serif;
	font-weight: bold;
	text-align: center;
	width: 137px;
	min-height: 23px;
	position: absolute;
	left: 7px;
	top: 11px;
	height: 23px;
`;

const _16 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Inter, sans-serif;
	font-weight: bold;
	text-align: center;
	min-height: 23px;
	position: absolute;
	left: 55px;
	top: 11px;
	height: 23px;
`;

const Group65 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 162px;
	top: 116px;
	background-color: #213555;
	border-radius: 10px;
`;

const Group63 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 0px;
	top: 116px;
	background-color: #213555;
	border-radius: 10px;
`;

const Group62 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 162px;
	top: 58px;
	background-color: #213555;
	border-radius: 10px;
`;

const Frame48 = styled.div`
	width: 360px;
	height: 54px;
	overflow: hidden;
	background: rgb(245, 239, 231);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const NaN_0003 = styled.span`
	color: rgba(0, 0, 0, 0.7);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Inter, sans-serif;
	font-weight: bold;
	text-align: center;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 149px;
	min-height: 28px;
	position: absolute;
	left: 108px;
	top: 14px;
	height: 28px;
`;

const MyFigure = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 15px;
	font-family: Inter, sans-serif;
	font-weight: bold;
	text-align: left;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 97px;
	min-height: 17px;
	position: absolute;
	left: 20px;
	top: 170px;
	height: 17px;
`;


const NaN_0004 = styled.div`
	width: 360px;
	height: 69px;
	position: absolute;
	left: 0px;
	top: 63px;
`;

const Line3 = styled.div`
	width: 360px;
	height: 0px;
	border-top: solid 1px rgb(225, 225, 225);
	position: absolute;
	left: 0px;
	top: 75px;
`;
