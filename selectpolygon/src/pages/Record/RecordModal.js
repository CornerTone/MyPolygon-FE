import React, { useState } from "react";
import styled from "@emotion/styled";

export function RecordModal() {
  // 스크롤 목록
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  const handleMinuteSelect = (minute) => {
    setSelectedMinute(minute);
  };

  return (
    <RootWrapperNaN>
      <Rectangle35 />
      <NaN_0002>오늘은 얼마나 노력했나요?</NaN_0002>
      <NaN_0003>확인</NaN_0003>
      <NaN_0004>취소</NaN_0004>

      <H_ScrollContainer>
        {hours.map((hour) => (
          <ScrollItem
            key={hour}
            selected={hour === selectedHour}
            onClick={() => handleHourSelect(hour)}
          >
            {hour < 10 ? `0${hour}` : hour}
          </ScrollItem>
        ))}
      </H_ScrollContainer>
      <H>h</H>

      <M_ScrollContainer>
        {minutes.map((minute) => (
          <ScrollItem
            key={minute}
            selected={minute === selectedMinute}
            onClick={() => handleMinuteSelect(minute)}
          >
            {minute < 10 ? `0${minute}` : minute}
          </ScrollItem>
        ))}
      </M_ScrollContainer>
      <M>m</M>
    </RootWrapperNaN>
  );
}

const RootWrapperNaN = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rectangle35 = styled.div`
  width: 336px;
  height: 367px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const NaN_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 19px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: center;
  width: 338px;
  min-height: 28px;
  position: absolute;
  left: 0px;
  top: 18px;
  height: 28px;
`;

const NaN_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  text-align: center;
  width: 172px;
  min-height: 28px;
  position: absolute;
  left: 0px;
  top: 329px;
  height: 28px;

  &:hover {
    color: #4f709c;
  }
`;

const NaN_0004 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 19px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  text-align: center;
  width: 172px;
  min-height: 28px;
  position: absolute;
  left: 164px;
  top: 329px;
  height: 28px;

  &:hover {
    color: #4f709c;
  }
`;

const H = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Poppins, sans-serif;
  font-weight: initial;
  text-align: center;
  position: absolute;
  left: 124px;
  top: 154px;
`;

const M = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Poppins, sans-serif;
  font-weight: initial;
  text-align: center;
  position: absolute;
  left: 242px;
  top: 154px;
`;

const H_ScrollContainer = styled.div`
  overflow-y: auto;
  max-height: 150px;
  position: absolute;
  left: 65px;
  top: 180px;
  margin: auto;
  transform: translateY(-50%);

  &::-webkit-scrollbar {
    width: 0px; /* 스크롤바의 두께 지정 */
    border-radius: 5px;
  }
`;

const M_ScrollContainer = styled.div`
  overflow-y: auto;
  max-height: 150px;
  position: absolute;
  left: 180px;
  top: 180px;
  margin: auto;
  transform: translateY(-50%);

  &::-webkit-scrollbar {
    width: 0px; /* 스크롤바의 두께 지정 */
    border-radius: 5px;
  }
`;

const ScrollItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: ${({ selected }) => (selected ? "black" : "#a0a0a0")};
  background-color: ${({ selected }) => (selected ? "#4F709C" : "white")};
  white-space: nowrap;
  overflow: hidden;
  max-height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 25px;
`;
