import styled from "@emotion/styled";
import arrowImage from "./dropdown.png";

export const RootWrapperNaN = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

export const Frame47 = styled.div`
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

export const Vector = styled.svg`
  width: 20px;
  height: 15px;
  position: absolute;
  left: 16px;
  top: 22px;
  right: 324px;
  bottom: 17px;
`;

export const CategoryDropdown = styled.select`
  width: 260px;
  height: 34px;
  position: absolute;
  border: none;
  border-radius: 10px;
  left: 77px;
  top: 145px;
  padding-left: 10px;
  font-weight: bold;
  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.25);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 15px;
`;

export const Rectangle34 = styled.div`
  width: 368px;
  height: 69px;
  background: rgb(216, 196, 182);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 0px;
  top: 127px;
`;

export const Rectangle38 = styled.div`
  width: 368px;
  height: 249px;
  background: rgb(216, 196, 182);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: relative;
  left: 0px;
  top: 211px;
`;

export const ContentInput = styled.textarea`
  width: 230px;
  height: 200px;
  font-family: "Pretendard", sans-serif;
  background-color: transparent;
  color: black;
  border: none;
  font-size: 13px;
  position: absolute;
  left: 90px;
  top: 240px;
  resize: none;
  outline: none;
  &::placeholder {
    color: #a1a0a0;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 412px) {
    font-size: 15px;
  }
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #595959;
    border-radius: 5px;
    backdrop-filter: blur(50px);
  }
  &::-webkit-scrollbar-track {
    background-color: #acacac;
    border-radius: 5px;
  }
`;

export const NaN_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  text-align: left;
  width: 256px;
  position: absolute;
  left: 26px;
  top: 153px;
`;

export const NaN_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  text-align: left;
  width: 256px;
  position: absolute;
  left: 26px;
  top: 328px;
`;

export const NaN_0005 = styled.span`
  color: rgb(151, 145, 145);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: center;
  width: 256px;
  position: absolute;
  left: 52px;
  top: 556px;
`;

export const NaN_0007 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  text-align: left;
  position: absolute;
  left: 136px;
  top: 80px;
`;

export const SubmitButton = styled.button`
  width: 135px;
  height: 37px;
  background: rgb(79, 112, 156);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 20px;
  position: absolute;
  color: white;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: center;
  width: 101px;
  position: absolute;
  left: 129px;
  top: 503px;

  &:hover {
    background: #213555;
  }
`;
