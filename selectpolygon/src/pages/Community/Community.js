import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Footer } from "../../components/Footer";
import { goBack } from "../../components/backNavigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export function Community() {
    const navigate = useNavigate(); 

    const navigateToNewPost = () => {
        navigate("/communitynew"); 
    }

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
                <NaN_0002>
                고민 나눔
                </NaN_0002>
            </Frame47>
            <Rectangle34 xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0 14.5C0 6.49187 6.49187 0 14.5 0L37.5 0C45.5081 0 52 6.49187 52 14.5L52 14.5C52 22.5081 45.5081 29 37.5 29L14.5 29C6.49187 29 0 22.5081 0 14.5L0 14.5Z"/>
            </Rectangle34>
            <Rectangle35 xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0 14.5C0 6.49187 6.49187 0 14.5 0L37.5 0C45.5081 0 52 6.49187 52 14.5L52 14.5C52 22.5081 45.5081 29 37.5 29L14.5 29C6.49187 29 0 22.5081 0 14.5L0 14.5Z"/>
            </Rectangle35>
            <Rectangle36 xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0 14.5C0 6.49187 6.49187 0 14.5 0L37.5 0C45.5081 0 52 6.49187 52 14.5L52 14.5C52 22.5081 45.5081 29 37.5 29L14.5 29C6.49187 29 0 22.5081 0 14.5L0 14.5Z"/>
            </Rectangle36>
            <Rectangle37 xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0 14.5C0 6.49187 6.49187 0 14.5 0L37.5 0C45.5081 0 52 6.49187 52 14.5L52 14.5C52 22.5081 45.5081 29 37.5 29L14.5 29C6.49187 29 0 22.5081 0 14.5L0 14.5Z"/>
            </Rectangle37>
            <Rectangle38 xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0 14.5C0 6.49187 6.49187 0 14.5 0L50.5 0C58.5081 0 65 6.49187 65 14.5L65 14.5C65 22.5081 58.5081 29 50.5 29L14.5 29C6.49187 29 0 22.5081 0 14.5L0 14.5Z"/>
            </Rectangle38>

            <NaN_0003>
                <NaN_0004>건강</NaN_0004>
                <NaN_0005>경제</NaN_0005>
                <NaN_0006>학업</NaN_0006>
                <NaN_0007>여가</NaN_0007>
                <NaN_0008>인간관계</NaN_0008>
            </NaN_0003>

            <Group3>
                <Rectangle14/>
            </Group3>

            <Ellipse9 onClick={navigateToNewPost}>
                <FontAwesomeIcon 
                    icon={faPen} 
                    style={{ 
                        color: 'white',
                        fontSize: '30px',  
                        marginLeft: '15px', 
                        marginTop: '13px',
                    }} 
                />
            </Ellipse9>

            
            <Group5>
                <Rectangle22/>
                <NaN_0009>
                건강
                </NaN_0009>
            </Group5>

            <Group4>
                <NaN_0015>
                    여기에 글쓰기 
                </NaN_0015>
                
            </Group4>

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

const NaN_0002 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 112px;
	position: absolute;
	left: 125px;
	top: 19px;
`;

const Rectangle34 = styled.svg`
	width: 52px;
	height: 29px;
	position: absolute;
	left: 20px;
	top: 76px;
	box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 20px;
`;

const Rectangle35 = styled.svg`
	width: 52px;
	height: 29px;
	position: absolute;
	left: 152px;
	top: 76px;
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 20px;
`;

const Rectangle36 = styled.svg`
	width: 52px;
	height: 29px;
	position: absolute;
	left: 82px;
	top: 76px;
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 20px;
`;

const Rectangle37 = styled.svg`
	width: 52px;
	height: 29px;
	position: absolute;
	left: 214px;
	top: 76px;
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 20px;
`;

const Rectangle38 = styled.svg`
	width: 65px;
	height: 29px;
	position: absolute;
	left: 280px;
	top: 76px;
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 20px;
`;

const Group3 = styled.div`
	width: 321px;
	height: 658px;
	position: absolute;
	left: 19px;
	top: 133px;
`;


const Rectangle14 = styled.div`
	width: 155px;
	height: 155px;
	box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border: solid 1px gray;
	border-radius: 20px;
	position: absolute;
	left: 0px;
	top: 0px;
	filter: blur(3px);
`;


const NaN_0003 = styled.div`
	width: 309px;
	height: 18px;
	position: absolute;
	left: 32px;
	top: 81px;
`;

const NaN_0004 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const NaN_0005 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 132px;
	top: 0px;
`;

const NaN_0006 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 62px;
	top: 0px;
`;

const NaN_0007 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 194px;
	top: 0px;
`;

const NaN_0008 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 253px;
	top: 0px;
`;

const Ellipse9 = styled.div`
	width: 59px;
	height: 59px;
	box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	background: rgb(79, 112, 156);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 59px / 59px;
	position: absolute;
	left: 269px;
	top: 660px;
`;

const Group5 = styled.div`
	width: 47px;
	height: 21px;
	position: absolute;
	left: 36px;
	top: 252px;
`;

const Rectangle22 = styled.div`
	width: 47px;
	height: 21px;
	background: rgb(188, 220, 99);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 10px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const NaN_0009 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 12px;
	top: 3px;
`;


const Group4 = styled.div`
	width: 290px;
	height: 48px;
	position: absolute;
	left: 35px;
	top: 155px;

`;

const NaN_0015 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 0px;
	top: 0px;
`;
