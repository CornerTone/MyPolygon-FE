import React, { useState } from "react";
import styled from "@emotion/styled";
import { Footer } from "../../components/Footer";
import { HeaderLogout } from "../../components/HeaderLogout";
import WeekCalendar from "../../components/Calendar";
import MyFigureChart, { PolygonChart } from "./PolygonChart";

export function Main() {

  const [date, setDate] = useState(new Date());

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

      <Group64>
        <Group67>
          <Rectangle7/>
          <_10>
            인간관계 10%
          </_10>
        </Group67>
        <Group66>
          <Rectangle7/>
          <_15>
            건강 15%
          </_15>
        </Group66>
        <Group65>
          <Rectangle7/>
          <_15>
            여가 20%
          </_15>
        </Group65>
        <Group63>
          <Rectangle7/>
          <_30>
            학업 30%
          </_30>
        </Group63>
        <Group62>
          <Rectangle7/>
          <_30>
            경제 30%
          </_30>
        </Group62>
      </Group64>
      <Rectangle3/>
      
      <MyFigure>My figure</MyFigure>
      <MyFigureChart  />

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
	width: 310px;
	height: 162px;
	position: absolute;
	left: 25px;
	top: 554px;
`;

const Group67 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 0px;
	top: 58px;
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

const _10 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 185px;
	min-height: 23px;
	position: absolute;
	left: 4px;
	top: 11px;
	height: 23px;
`;

const Group66 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 81px;
	top: 0px;
`;

const _15 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 161px;
	min-height: 23px;
	position: absolute;
	left: 7px;
	top: 11px;
	height: 23px;
`;

const Group65 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 161px;
	top: 116px;
`;


const _30 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 158px;
	min-height: 23px;
	position: absolute;
	left: 7px;
	top: 11px;
	height: 23px;
`;

const Group63 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 0px;
	top: 116px;
`;

const Group62 = styled.div`
	width: 149px;
	height: 46px;
	position: absolute;
	left: 161px;
	top: 58px;
`;

const Rectangle3 = styled.div`
	width: 1px;
	height: 3px;
	background: rgb(217, 217, 217);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	left: 360px;
	top: 37px;
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
	width: 189px;
	min-height: 28px;
	position: absolute;
	left: 85px;
	top: 14px;
	height: 28px;
`;

const MyFigure = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 15px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 135px;
	min-height: 17px;
	position: absolute;
	left: 32px;
	top: 187px;
	height: 17px;
`;



export const NaN_0004 = styled.div`
	width: 360px;
	height: 69px;
	position: absolute;
	left: 0px;
	top: 63px;
`;

export const Line3 = styled.div`
	width: 360px;
	height: 0px;
	border-top: solid 1px rgb(225, 225, 225);
	position: absolute;
	left: 0px;
	top: 75px;
`;