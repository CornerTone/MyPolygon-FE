import styled from "@emotion/styled";

export const RootWrapperNaN = styled.div`
	min-height: 100vh;
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: relative;
	
`;

export const Frame48 = styled.div`
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


export const NaN_0002 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 100px;
	position: absolute;
	left: 130px;
	top: 16px;
`;

export const NaN_0003 = styled.div`
	width: 360px;
	height: 69px;
	position: absolute;
	left: 0px;
	top: 63px;
`;

export const Line3 = styled.div`
	width: 360px;
	height: 0px;
	border-top: solid 1px rgb(225, 225, 225);
	position: absolute;
	left: 0px;
	top: 75px;
`;

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: center; 
	align-items: center; 
	height: 100vh; 
`

export const ContentContainer = styled.div`
    position: absolute;
    left: 0;
    top: 150px; 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
	margin-bottom: 20px;
	max-width: 360px;
`;

export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const IconContainer = styled.div`
	width: 70px;
	height: 70px;
	overflow: hidden;

`;

export const Rectangle34 = styled.div`
	width: 336px;
	height: 99px;
	box-shadow: 0px 2px 5px  rgba(0, 0, 0, 0.25);
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 20px;
`;

export const Ellipse11 = styled.div`
	width: 70px;
	height: 70px;
	background: rgb(33, 53, 85);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 60px / 60px;
	margin-right: 20px;
	margin-left: -320px; 
	margin-top: -35px; /* Rectangle34 상단으로 이동 */
    position: absolute; /* 절대 위치로 배치 */
`;

export const CategoryName = styled.div`
	color: black;
	font-size: 22px;
	font-family: Poppins, sans-serif;
	font-weight: bold;
	text-align: left;
	width: 60px;
	min-height: 33px;
	margin-bottom: 5px;
	margin-left: 100px;
	margin-top: 5px; /* Rectangle34 상단으로부터의 간격 조정 */
    position: absolute; /* 절대 위치로 배치 */

`;

export const TimeRecord = styled.span`
	color: black;
	font-size: 23px;
	font-family: Poppins, sans-serif;
	font-weight: bold;
	text-align: left;
	width: 140px;
	min-height: 46px;
	margin-left: 200px;
	margin-top: 13px; /* Rectangle34 상단으로부터의 간격 조정 */
    position: absolute; /* 절대 위치로 배치 */
`;
