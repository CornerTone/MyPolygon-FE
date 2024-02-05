import React, { useState } from "react";
// styled-components에서 styled 가져오기
import styled, { css } from "styled-components";
// @emotion/styled에서 styled 가져오기
import { styled as emotionStyled } from "@emotion/styled";
import axios from "axios";

import { goBack } from "../../components/backNavigation";

export function ElementSelect() {
  // 선택한 요소를 저장할 상태
  const [selectedElements, setSelectedElements] = useState([]);

  const handleElementSelect = (elementId) => {
    // 요소가 이미 선택되어 있는지 확인
    const isSelected = selectedElements.includes(elementId);

    // 요소가 이미 선택되어 있으면 선택 취소, 아니면 선택 추가
    if (isSelected) {
      const updatedElements = selectedElements.filter((id) => id !== elementId);
      setSelectedElements(updatedElements);
    } else {
      setSelectedElements([...selectedElements, elementId]);
    }
  };

  const handleSaveElements = async () => {
    console.log(selectedElements);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/polygon/set-element",
        {
          elements: selectedElements,
        },
        {
          withCredentials: true,
        }
      );

      console.log("백엔드 응답:", response.data);

      // 데이터 저장이 성공하면 리다이렉션 수행
      if (response.data.success) {
        // 리다이렉션 코드 추가 (예: React Router를 사용하는 경우)
        // 아래 코드는 React Router v5를 기준으로 작성되었습니다.
        // 최신 버전의 React Router를 사용하는 경우에는 useHistory 등을 이용해야 할 수 있습니다.
        window.location.href = "/examinationprogress";
      }
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
  };

  return (
    <RootWrapperNaN>
      {/* 요소 선택 UI */}
      <Group19>
        <Rectangle23 />
        <NaN_0002
          data-selected={selectedElements.includes(1)}
          onClick={() => handleElementSelect(1)}
        >
          건강
        </NaN_0002>
      </Group19>
      <Group20>
        <Rectangle23 />
        <NaN_0002
          data-selected={selectedElements.includes(2)}
          onClick={() => handleElementSelect(2)}
        >
          경제
        </NaN_0002>
      </Group20>
      <Group21>
        <Rectangle25 />
        <NaN_0002
          data-selected={selectedElements.includes(3)}
          onClick={() => handleElementSelect(3)}
        >
          학업
        </NaN_0002>
      </Group21>
      <Group22>
        <Rectangle26 />
        <NaN_0005
          data-selected={selectedElements.includes(4)}
          onClick={() => handleElementSelect(4)}
        >
          인간관계
        </NaN_0005>
      </Group22>
      <Group23>
        <Rectangle25 />
        <NaN_0002
          data-selected={selectedElements.includes(5)}
          onClick={() => handleElementSelect(5)}
        >
          여가
        </NaN_0002>
      </Group23>
      {/* 저장 버튼 */}
      <Frame24 onClick={handleSaveElements}>
        <NaN_0007>저장</NaN_0007>
      </Frame24>
      <Group56>
        <Rectangle36 />
        <Typography_0003>
          <Typography_0001>
            <Typography_0005>꼭짓점 요소를 추천해 드려요!</Typography_0005>
          </Typography_0001>
        </Typography_0003>
      </Group56>
      <Line14 />
      <Line15 />
      <Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
        <path
          fill="rgba(0, 0, 0, 0.64)"
          d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
        />
      </Vector>
    </RootWrapperNaN>
  );
}

const RootWrapperNaN = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

const Typography = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 126px;
  top: 204px;
`;

const Typography_0001 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  box-sizing: border-box;
`;

const Typography_0002 = styled.span`
  color: rgb(51, 51, 51);
  text-overflow: ellipsis;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: initial;
  text-align: center;
  width: 120px;
`;

const Group19 = styled.div`
  width: 80px;
  height: 34px;
  position: absolute;
  left: 140px;
  top: 269px;
`;

const Rectangle23 = styled.div`
  width: 80px;
  height: 34px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(231, 245, 244);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  filter: blur(4px);
`;

const NaN_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: initial;
  text-align: center;
  width: 40px;
  min-height: 27px;
  position: absolute;
  left: 20px;
  top: 3px;
  height: 27px;

  /* hover 시와 선택된 상태의 스타일 변경 */
  &:hover,
  &[data-selected="true"] {
    color: deeppink;
    cursor: pointer;
  }
`;

const Group20 = styled.div`
  width: 80px;
  height: 34px;
  position: absolute;
  left: 140px;
  top: 330px;
`;

const Group21 = styled.div`
  width: 80px;
  height: 34px;
  position: absolute;
  left: 140px;
  top: 391px;
`;

const Rectangle25 = styled.div`
  width: 80px;
  height: 34px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(231, 245, 244);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0.8;
  filter: blur(4px);
`;

const Group22 = styled.div`
  width: 106px;
  height: 34px;
  position: absolute;
  left: 127px;
  top: 452px;
`;

const Rectangle26 = styled.div`
  width: 106px;
  height: 34px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(231, 245, 244);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  filter: blur(4px);
`;

const NaN_0005 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: initial;
  text-align: center;
  width: 80px;
  min-height: 27px;
  position: absolute;
  left: 12px;
  top: 3px;
  height: 27px;

  /* hover 시와 선택된 상태의 스타일 변경 */
  &:hover,
  &[data-selected="true"] {
    color: deeppink;
    cursor: pointer;
  }
`;

const Group23 = styled.div`
  width: 80px;
  height: 34px;
  position: absolute;
  left: 140px;
  top: 513px;
`;

const Frame24 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: rgb(133, 187, 226);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding: 3px 19px;
  position: absolute;
  left: 142px;
  top: 589px;
  height: 33px;
`;

const NaN_0007 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Poppins, sans-serif;
  font-weight: initial;
  text-align: center;
`;

const Group56 = styled.div`
  width: 401px;
  height: 90px;
  position: absolute;
  left: -21px;
  top: 114px;
`;

const Rectangle36 = styled.div`
  width: 401px;
  height: 90px;
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 0px;
  filter: blur(4px);
`;

const Typography_0003 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 93px;
  top: 31px;
`;

const Typography_0005 = styled.span`
  color: rgb(51, 51, 51);
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: initial;
  text-align: center;
`;

const Line14 = styled.div`
  width: 360px;
  height: 0px;
  border-top: dashed 1px rgb(185, 185, 185);
  position: absolute;
  left: 2px;
  top: 560px;
`;

const Line15 = styled.div`
  width: 360px;
  height: 0px;
  border-top: dashed 1px rgb(185, 185, 185);
  position: absolute;
  left: 0px;
  top: 255px;
`;

const Vector = styled.svg`
  width: 20px;
  height: 15px;
  position: absolute;
  left: 16px;
  top: 22px;
  right: 324px;
  bottom: 763px;
`;
