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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [date, setDate] = useState(new Date());
  const [polygonData, setPolygonData] = useState(null);

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
      <MyFigureChart data={polygonData} />
      <A.Container>
        <A.Group64>
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

