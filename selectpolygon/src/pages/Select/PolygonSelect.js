import React from "react";
import { Link } from "react-router-dom";
import * as S from "./PolygonSelectStyle";
import { goBack } from "../../components/backNavigation";
import { Footer } from "../../components/Footer";

export function PolygonSelect() {
  return (
    <S.RootWrapperNaN>
      <S.Group17>
        <S.Rectangle22 />
        <S.Group7>
          <S.Frame5>
            <S.Polygon1 xmlns="http://www.w3.org/2000/svg">
              <path
                fill="rgb(217, 217, 217)"
                d="M55 0L102.631 82.5L7.3686 82.5L55 0Z"
              />
            </S.Polygon1>
          </S.Frame5>
        </S.Group7>
        <S.Group8>
          <S.Frame5>
            <S.Star25 xmlns="http://www.w3.org/2000/svg">
              <path
                fill="rgb(217, 217, 217)"
                d="M50 0L73.8053 17.2348L97.5528 34.5491L88.5178 62.5152L79.3893 90.4509L50 90.5L20.6107 90.4509L11.4822 62.5152L2.44717 34.5491L26.1947 17.2348L50 0Z"
              />
            </S.Star25>
          </S.Frame5>
        </S.Group8>
        <S.Frame5_0002>
          <S.Rectangle40 />
        </S.Frame5_0002>
        <S.Group10>
          <Link to="/ElementSelect">
            <S.Rectangle23 /> <S.NaN_0002>사각형</S.NaN_0002>
          </Link>
        </S.Group10>
        <S.Group10_0001>
          <S.Rectangle25 />{" "}
          <Link to="/ElementSelect">
            <S.NaN_0003>오각형</S.NaN_0003>
          </Link>
        </S.Group10_0001>
        <S.Group11>
          <S.Rectangle23_0001 />{" "}
          <Link to="/ElementSelect">
            <S.NaN_0003>삼각형</S.NaN_0003>
          </Link>
        </S.Group11>
      </S.Group17>
      <S.Group55>
        <S.Rectangle38 />
        <S.Typography>
          <S.Typography_0001>
            <S.Typography_0002>
              원하는 다각형을
              <br />
              선택해 주세요!
            </S.Typography_0002>
          </S.Typography_0001>
        </S.Typography>
      </S.Group55>
      <S.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
        <path
          fill="rgba(0, 0, 0, 0.64)"
          d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
        />
      </S.Vector>
      <Footer />
    </S.RootWrapperNaN>
  );
}
