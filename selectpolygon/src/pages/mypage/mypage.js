import React, { useState, useEffect } from "react";
import axios from "axios";
import * as M from "./mypageSytle";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import { Footer } from "../../components/Footer";
import MyFigureChart from "../Main/PolygonChart";
import Cookies from "js-cookie";


export function Mypage() {
  const [previousPolygon, setPreviousPolygon] = useState(null);
  const [nextPolygon, setNextPolygon] = useState(null);
  const [chartDate, setChartDate] = useState(null); // 추가된 부분

  const [userInfo, setUserInfo] = useState({
    id: null,
    nickname: "",
    phone_number: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/auth/user-info",
          {
            withCredentials: true,
          }
        );
        setUserInfo(response.data.user);
        console.log(response.data.elements);
      } catch (error) {
        console.error("사용자 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    // Axios를 사용한 API 호출
    const fetchData = async () => {
      try {
        const polygonId = Cookies.get("polygon_id");
        const response = await axios.get(
          `http://localhost:3001/api/polygon/read/${polygonId}`,
          {
            withCredentials: true,
          }
        );
        setData(response.data);
        setPolygonData(response.data.polygon.elements);
        setChartDate(response.data.polygon.date);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [date, setDate] = useState(new Date());
  const [polygonData, setPolygonData] = useState(null);

  // ArrowRightBoldOutline 클릭 핸들러
  const handlePreviousClick = async () => {
    try {
      if (!data.previousPolygon) {
        alert("가장 마지막 기록입니다");
      } else {
        const previousPolygonId = data.previousPolygon.id;
        const response = await axios.get(
          `http://localhost:3001/api/polygon/read/${previousPolygonId}`,
          {
            withCredentials: true,
          }
        );
        setData(response.data);
        setPolygonData(response.data.polygon.elements);
      }
    } catch (error) {
      console.error("Error fetching previous polygon data:", error);
    }
  };

  // ArrowRightBoldOutline_0001 클릭 핸들러
  const handleNextClick = async () => {
    try {
      if (!data.nextPolygon) {
        alert("가장 최근 기록입니다");
      } else {
        const nextPolygonId = data.nextPolygon.id;
        const response = await axios.get(
          `http://localhost:3001/api/polygon/read/${nextPolygonId}`,
          {
            withCredentials: true,
          }
        );
        setData(response.data);
        setPolygonData(response.data.polygon.elements);
      }
    } catch (error) {
      console.error("Error fetching next polygon data:", error);
    }
  };

  function getFormattedDate(chartDate) {
    const dateObj = new Date(chartDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더합니다.
    const day = dateObj.getDate();
    return `${year}년 ${month}월 ${day}일`;
  }

  return (
    <M.RootWrapperNaN>
      <M.Rectangle22 />
      <M.Frame48>
        <M.NaN_0002>나의 기록</M.NaN_0002>
        <HeaderLogout />
        <HeaderMypage />
      </M.Frame48>
      <M.Container>
        <M.Group49>
          <M.Group48>
            <M.NaN_0008>
              <M.Ellipse11 />
            </M.NaN_0008>
            <M._21433051 />
          </M.Group48>
        </M.Group49>
        <M.Group13>
          <M.Rectangle23 />
          <M.NaN_0009>아이디</M.NaN_0009>
        </M.Group13>
        <M.Group15>
          <M.Rectangle22_0001 />
          <M.NaN_0010>전화번호</M.NaN_0010>
        </M.Group15>
        <M.Group57>
          <M.Group69>
            <M.Rectangle23_0001 />
            <M.NaN_0011>{userInfo?.nickname}</M.NaN_0011>
          </M.Group69>
        </M.Group57>
        <M.Group59>
          <M.Group69>
            <M.Rectangle23_0001 />
            <M.NaN_0011>{userInfo?.phone_number}</M.NaN_0011>
          </M.Group69>
        </M.Group59>
      </M.Container>
      <M.MyHistory>My History</M.MyHistory>
      <M.ArrowRightBoldOutline
        onClick={handleNextClick}
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1a34c2a-d9be-4af0-94c3-ab0d0330e5d3"
        alt="icon"
      />
      <M.ArrowRightBoldOutline_0001
        onClick={handlePreviousClick}
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afeaba53-4030-4b02-804d-db8d554076e5"
        alt="icon"
      />
      <M.Top>
        <MyFigureChart data={polygonData} />
        <M.DatePosition>{`📅 ${getFormattedDate(chartDate)} 📅`}</M.DatePosition>
      </M.Top>
      <Footer />
    </M.RootWrapperNaN>
  );
}
