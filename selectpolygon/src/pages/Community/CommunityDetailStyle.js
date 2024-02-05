import styled from "@emotion/styled";

export const Comments = styled.div`
    margin-top: 20px;
    position: absolute;
    top: 270px;
`;

export const Comment = styled.div`
    color: black;
    font-size: 15px;
    margin-bottom: 10px;
    background: #d8c4b6;
    border-radius: 10px; /* 둥근 형태 조절 */
    text-align: left;
    min-width: 190px; /* 원하는 최소 너비 설정 */
    max-width: 300px; /* 원하는 최대 너비 설정 */
    word-wrap: break-word; /* 긴 단어가 너무 길면 자동으로 줄 바꿈 처리 */
    padding: 10px;
`;

export const CommentContainer = styled.div`
    position: relative;
    top: 695px; /* 예시로 조절된 값, 필요에 따라 조절 가능 */
    right: 140px; /* 예시로 조절된 값, 필요에 따라 조절 가능 */
    z-index: 1000; /* 다른 요소들 위에 표시되도록 z-index 설정 */
`;

export const CommentInput = styled.input`
    width: 250px;
    height: 30px;
    padding: 5px;
    font-size: 16px;
`;

export const SubmitButton = styled.button`
    width: 90px;
    height: 40px;
    background-color: #ebba71;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: #a47734;
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

export const Frame47 = styled.div`
    width: 360px;
    height: 54px;
    overflow: hidden;
    background: rgb(245, 239, 231);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    right: px;
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


export const NaN_0002 = styled.span`
    color: black;
    text-overflow: ellipsis;
    font-size: 18px;
    font-family: Inter, sans-serif;
    font-weight: initial;
    text-align: left;
    position: absolute;
    left: 163px;
    top: 17px;
`;

export const NaN_0003 = styled.span`
    color: black;
    font-size: 14px;
    font-family: Inter, sans-serif;
    font-weight: initial;
    text-align: left;
    width: 256px;
    position: absolute;
    left: 45px;
    top: 95px;
    min-height: 100px;
    background: rgb(245, 239, 231);
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;



export const Image3 = styled.div`
    width: 32px;
    height: 28px;
    background: url(grida://assets-reservation/images/073a248893d74e3fcdb50215dab0917a88e60420);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 302px;
    top: 707px;
`;

export const Group2 = styled.div`
    width: 14px;
    height: 15px;
    position: absolute;
    left: 29px;
    top: 292px;
`;

export const Line1 = styled.div`
    width: 15px;
    height: 0px;
    border-top: solid 0px black;
    position: absolute;
    left: 0px;
    top: 0px;
    transform: rotate(-270deg);
    transform-origin: top left;
`;

export const Line2 = styled.div`
    width: 14px;
    height: 0px;
    border-top: solid 0px black;
    position: absolute;
    left: 14px;
    top: 15px;
    transform: rotate(-180deg);
    transform-origin: top left;
`;
