import React, { useState } from "react";
import styled from "@emotion/styled";
import { Footer } from "../../components/Footer";
import { goBack } from "../../components/backNavigation";

export function NewCommunity() {
    const categories = ["학업", "여가", "건강", "인간관계", "경제"];

    const [category, setCategory] = useState("");
    const handleCategoryChange = (e) => {
        setCategory(e.target.value); // 드롭다운 박스에서 카테고리 선택 시 state 업데이트
    };

    return (
        <RootWrapperNaN>
            <Frame47>
                <Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
                <path fill="rgba(0, 0, 0, 0.64)" d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"/>
                </Vector>
                <IconsBasicUser>
                <User xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgb(63, 67, 74)" d="M8.80577 3.36C8.80577 4.45794 7.85349 5.37 6.65 5.37C5.44652 5.37 4.49424 4.45794 4.49424 3.36C4.49424 2.26206 5.44652 1.35 6.65 1.35C7.85349 1.35 8.80577 2.26206 8.80577 3.36ZM10.2308 3.36C10.2308 5.21568 8.62761 6.72 6.65 6.72C4.6724 6.72 3.06924 5.21568 3.06924 3.36C3.06924 1.50432 4.6724 0 6.65 0C8.62761 0 10.2308 1.50432 10.2308 3.36ZM5.19025 9.03001L8.10975 9.03001C10.1355 9.03001 11.875 10.6659 11.875 12.8C11.875 12.887 11.8404 12.9536 11.7972 12.9963C11.7549 13.038 11.7135 13.05 11.678 13.05L1.62195 13.05C1.58653 13.05 1.54514 13.038 1.50285 12.9963C1.45958 12.9536 1.425 12.887 1.425 12.8C1.425 10.6659 3.16452 9.03001 5.19025 9.03001ZM0 12.8C0 9.97231 2.32375 7.68001 5.19025 7.68001L8.10975 7.68001C10.9762 7.68001 13.3 9.97231 13.3 12.8C13.3 13.6837 12.5738 14.4 11.678 14.4L1.62195 14.4C0.726172 14.4 0 13.6837 0 12.8Z"/>
                </User>
                </IconsBasicUser>
            </Frame47>

            <NaN_0007>글 등록하기</NaN_0007>

            <Rectangle34/>
            <NaN_0002>요소</NaN_0002>
            
            <CategoryDropdown value={category} onChange={handleCategoryChange}>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </CategoryDropdown>


            <Rectangle38/>
            <NaN_0003>고민</NaN_0003>
            <NaN_0004>
                고민 내용을 자유롭게 작성해주세요<br/>
        다른 분들이 정성스럽게 답글을 <br/>
        남겨주실거에요:)
            </NaN_0004>

            <NaN_0005>
                등록하신 고민이 해결되길<br/>
        ‘나만의 다각형’이 응원할게요!
            </NaN_0005>

            <SubmitButton>등록하기</SubmitButton>

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

const Frame47 = styled.div`
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

const Vector = styled.svg`
	width: 20px;
	height: 15px;
	position: absolute;
	left: 16px;
	top: 22px;
	right: 324px;
	bottom: 17px;
`;

const IconsBasicUser = styled.div`
	width: 19px;
	height: 18px;
	position: absolute;
	left: 323px;
	top: 19px;
`;

const User = styled.svg`
	width: 13px;
	height: 14px;
	position: absolute;
	left: 1px;
	top: 2px;
	right: 5px;
	bottom: 2px;
`;

const CategoryDropdown = styled.select`
    width: 260px;
    height: 34px;
    position: absolute;
	border: none;
	border-radius: 20px;
    left: 77px;
    top: 145px;
`;

const Rectangle34 = styled.div`
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

const Rectangle38 = styled.div`
	width: 368px;
	height: 249px;
	background: rgb(216, 196, 182);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border: solid 0px black;
	border-radius: 20px;
	position: absolute;
	left: 0px;
	top: 211px;
`;


const NaN_0002 = styled.span`
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

const NaN_0003 = styled.span`
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

const NaN_0004 = styled.span`
	color: rgb(197, 195, 195);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 256px;
	position: absolute;
	left: 94px;
	top: 244px;
`;

const NaN_0005 = styled.span`
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


const NaN_0007 = styled.span`
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


const SubmitButton = styled.button`
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

    &:hover{
        background: #213555;
    }
`;

