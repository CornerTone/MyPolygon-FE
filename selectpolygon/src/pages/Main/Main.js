import React, { useState, useEffect } from "react";
import * as A from "./MainStyle";
import { HeaderMypage } from "../../components/HeaderMypage";
import { HeaderLogout } from "../../components/HeaderLogout";
import { Footer } from "../../components/Footer";
import MyFigureChart from "./PolygonChart";
import WeekCalendar from "../../components/Calendar";
import axios from "axios";
import Cookies from "js-cookie";

export function Main() {
  // 응답 저장 
  const [data, setData] = useState(null);
  // 날짜 저장 
  const [date, setDate] = useState(new Date());
  // 다각형 정보 저장 
  const [polygonData, setPolygonData] = useState(null);

  // 서버로부터 다각형 정보 조회 
  useEffect(() => {
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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <A.RootWrapperNaN>
      <A.Frame48>
        <A.NaN_0003>나만의 다각형</A.NaN_0003>
        <HeaderMypage />
        <HeaderLogout />
      </A.Frame48>

      <A.NaN_0004>
        <A.Line3 />
        <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
      </A.NaN_0004>

      <A.MyFigure>My Polygon</A.MyFigure>
      {/* 다각형 정보 출력 */}
      <MyFigureChart data={polygonData} />
      <A.Container>
        <A.Group64>
          {/* 검사 결과 %로 출력 */}
          {/* 검사를 진행한 적이 없을 경우 문구 출력, 검사한 경우 가장 최근에 검사한 다각형 정보 수치화 */}
          {polygonData && polygonData.length > 0 ? (
            polygonData.map((item, index) => (
              <A.Group67 key={index}>
                <div>
                  <A.Rectangle7 />
                  <A._15>{`${item.name.substring(0, item.name.indexOf("_"))}  ${
                    item.score * 20
                  } %`}</A._15>
                </div>
              </A.Group67>
            ))
          ) : ( 
            <>
              <A._16> 검사를 진행해 주세요!</A._16>
            </>
          )}
        </A.Group64>
      </A.Container>
      <Footer />
    </A.RootWrapperNaN>
  );
}

