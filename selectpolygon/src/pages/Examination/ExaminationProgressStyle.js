import styled from "@emotion/styled";

export const Line14 = styled.div`
    width: 360px;
    height: 0px;
    border-top: dashed 1px rgb(185, 185, 185);
    position: absolute;
    right: 15px;
    top: 50px;
`;
export const Line15 = styled.div`
    width: 360px;
    height: 0px;
    border-top: dashed 1px rgb(185, 185, 185);
    position: absolute;
    right: 15px;
    top: 100%; /* SubmitButton 하단에 위치 */
`;

export const ButtonWrapper = styled.div`
    margin-top: 10px;
    margin-bottom: 25px;

    &:hover,
    &[data-selected="true"] {
    color: EBBA71;
    cursor: pointer;
    }
`;

export const YesButton = styled.button`
    margin-right: 10px;
    padding: 5px 10px;
    background-color: ${(props) => (props.selected ? "#EBBA71" : "#d8c4b6")};
    color: ${(props) => (props.selected ? "#fff" : "#000")};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.selected ? "#EBBA71" : "#EBBA71"};
        color: #fff;
    }
`;

// 아니오 버튼 스타일
export const NoButton = styled.button`
    margin-right: 10px;
    padding: 5px 10px;
    background-color: ${(props) => (props.selected ? "#EBBA71" : "#d8c4b6")};
    color: ${(props) => (props.selected ? "#fff" : "#000")};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.selected ? "#EBBA71" : "#EBBA71"};
        color: #fff;
    }
`;

export const QuestionWrapper = styled.div`
    margin-bottom: 20px;

    h3 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        font-size: 14px;
        margin-bottom: 5px;
    }
`;

export const RootWrapperNaN = styled.div`
    min-height: 100vh;
    background: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
`;

//다각형 검사 박스
export const Group24 = styled.div`
    width: 401px;
    height: 90px;
    position: absolute;
    left: -21px;
    top: 55px;
`;

export const Rectangle34 = styled.div`
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

export const Typography = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    box-sizing: border-box;
    position: absolute;
    left: 148px;
    top: 31px;
    width: 121px;
`;

export const Typography_0001 = styled.span`
    color: rgb(51, 51, 51);
    text-overflow: ellipsis;
    font-size: 18px;
    font-family: Poppins, sans-serif;
    font-weight: 900;
    text-align: center;
    width: 113px;
`;

export const Typography_0002 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    position: absolute;
    left: 0px;
    top: 145px;
`;

export const Typography_0003 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    box-sizing: border-box;
`;

export const Typography_0004 = styled.span`
    color: rgb(51, 51, 51);
    text-overflow: ellipsis;
    font-size: 13px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    text-align: center;
`;

//검사지 페이지
export const Group33 = styled.div`
    width: 401px;
    height: 349px;
    position: absolute;
    left: -25px;
    top: 190px;
`;

export const Vector = styled.svg`
    width: 20px;
    height: 15px;
    position: absolute;
    left: 16px;
    top: 22px;
    right: 324px;
    bottom: 763px;
`;

export const SubmitButton = styled.button`
    background-color: #85bbe2;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative; 
    margin-top: 20px;

    &:hover {
    background-color: #5a95c5; /* hover 시의 배경색 */
    }
    &:active {
        background-color: #213555;
    }
`;