import styled from "@emotion/styled";

export const RootWrapperNaN = styled.div`
	display: flex;
	justify-content: center; 
	align-items: center; 
	height: 100vh; 

`;

export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */
    backdrop-filter: blur(5px); /* 배경 블러 처리 */
    display: flex;
    align-items: center;
    justify-content: center;
	z-index: 2000;

`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Rectangle35 = styled.div`
	width: 330px;
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

export const NaN_0002 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 338px;
	min-height: 28px;
	position: absolute;
	left: -10px;
	top: 30px;
	height: 28px;
`;

export const NaN_0003 = styled.button`
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
	background-color: white;
	border: none;

	&:hover {
		color: #4f709c;
	}
`;

export const NaN_0004 = styled.button`
	color: black;
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: bold;
	text-align: center;
	width: 160px;
	min-height: 28px;
	position: absolute;
	left: 164px;
	top: 329px;
	height: 28px;
	background-color: white;
	border: none;

	&:hover {
		color: #4f709c;
	}
`;

export const H = styled.span`
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

export const M = styled.span`
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

export const H_ScrollContainer = styled.div`
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

export const M_ScrollContainer = styled.div`
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

export const ScrollItem = styled.div`
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


