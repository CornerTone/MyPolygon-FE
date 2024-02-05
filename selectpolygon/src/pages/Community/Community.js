import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Footer } from "../../components/Footer";
import { goBack } from "../../components/backNavigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import axios from 'axios';

export const categoryNames = {
    1: '건강',
    2: '경제',
    3: '학업',
    4: '여가',
    5: '인간관계'
};

const categoryColors = {
    1: "#BCDC63", // 건강
    2: "#99E0DB", // 경제
    3: "#EBBA71", // 학업
    4: "#85BBE2", // 여가
    5: "#BE7CC3"  // 인간관계
};

export function Community() {
	
    const navigate = useNavigate(); 
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        fetchData();
    }, [selectedCategory]); 

    const fetchData = async () => {

        try {

			
            	let url = "http://localhost:3001/api/community/read-category";
			
            if (selectedCategory) {
                url += `/${selectedCategory}`;
            }
            const response = await axios.get(url, { withCredentials: true });
			console.log("response => "+response)
			if(response.data.status===404){
				console.log("err")
				setErrorMessage('작성된 커뮤니티 글이 없습니다.');
				console.log(errorMessage)
			}
            if (response.data.success) {
				setErrorMessage('');
				console.log("in");
				console.log(response.data);
                const updatedPosts = response.data.communities.map(post => ({
                    ...post,
                    categoryName: categoryNames[post.categories[0].id] // Convert categoryId to categoryName
                }));
                setPosts(updatedPosts);
				console.log(updatedPosts)
            } else {
				console.log("err")
				setErrorMessage('작성된 커뮤니티 글이 없습니다.');
				console.log(errorMessage)
                console.error("Failed to fetch posts");
            }
        } catch (error) {
			setErrorMessage('작성된 커뮤니티 글이 없습니다.');
		console.log(error.message)
		}
    };

	function handleClick(id) {
		window.location.href = `/communitydetail/${id}`
	}
    
    const handleCategoryClick = (category) => {
		console.log(category)
		setSelectedCategory(category);
        // setSelectedCategory(category === selectedCategory ? null : category);
    };

    const navigateToNewPost = () => {
        navigate("/communitynew"); 
    }

	
    
    return (
        <RootWrapperNaN>
            <Frame47>
                <Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
                    <path fill="rgba(0, 0, 0, 0.64)" d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"/>
                </Vector>
                <NaN_0002>고민 나눔</NaN_0002>
                <HeaderLogout />
                <HeaderMypage />
            </Frame47>

            <CategoryWrapper>
				{Object.keys(categoryNames).map((categoryId) => (
					<React.Fragment key={categoryId}>
						<CategoriesContainer active={selectedCategory === categoryId} onClick={() => handleCategoryClick(categoryId)}>
							<Rectangle34 color={selectedCategory === categoryId ? categoryColors[categoryId] : 'white'}>
								<path fill={selectedCategory === categoryId ? categoryColors[categoryId] : 'white'} d="M0 14.5C0 6.49187 6.49187 0 14.5 0L37.5 0C45.5081 0 52 6.49187 52 14.5L52 14.5C52 22.5081 45.5081 29 37.5 29L14.5 29C6.49187 29 0 22.5081 0 14.5L0 14.5Z"/>
							</Rectangle34>
							<CategoryName onClick={() => handleCategoryClick(categoryId)}>{categoryNames[categoryId]}</CategoryName>
						</CategoriesContainer>
					</React.Fragment>
				))}
			</CategoryWrapper>
            
			<Group3>
                {errorMessage ? (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                ) : (
                    <PostGrid>
                        {posts.map((post, index) => (
                            <PostItem key={index}>
                                <PostContent onClick={() => handleClick(post.id)}>{post.content}</PostContent>
                                <Group5>
                                    <Rectangle22 color={categoryColors[post.categories[0].id]} />
                                    <CategoryNameBox>{categoryNames[post.categories[0].id]}</CategoryNameBox>
                                </Group5>
                            </PostItem>
                        ))}
                    </PostGrid>
                )}
            </Group3>

            <Ellipse9 onClick={navigateToNewPost}>
                <FontAwesomeIcon 
                    icon={faPen} 
                    style={{ 
                        color: 'white',
                        fontSize: '30px',  
                        marginLeft: '2px', 
                        marginTop: '13px',
                    }} 
                />
            </Ellipse9>

            <Footer />
        </RootWrapperNaN>
    )
}

const ErrorMessage = styled.div`
    color: "#EBBA71";
    font-size: 16px;
    text-align: center;
	margin-top:50px;
`;

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

const CategoryWrapper = styled.div`
	display: flex;
	justify-content: left; // 수평 가운데 정렬
	align-items: center; // 수직 가운데 정렬
	gap: 70px; 
	margin-top: 150px; 
	margin-left: 40px;
`;

const CategoriesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; 
	margin-top: 80px;
	cursor: pointer;
	color: ${({ active }) => (active ? "#4F709C" : "white")};
`;

const Rectangle34 = styled.svg`
    width: 52px;
    height: 29px;
    position: absolute;
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
    corlor: white;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius: 20px;
`;
const CategoryName = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: bold;
	text-align: center;
	margin-top: 5px; 
    position: absolute; /* 절대 위치로 배치 */
	top: 83px;
`;

const CategoryNameBox = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: bold;
	text-align: center;
	margin-top: 5px; 
    position: absolute; /* 절대 위치로 배치 */
	bottom: 13px;
	margin-left:10px;
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
    display: flex;
    align-items: center;
`;

const Rectangle22 = styled.div`
    width: 47px;
    height: 21px;
    background: ${({ color }) => color};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius: 10px;
`;

const Group3 = styled.div`
    width: 321px;
    height: auto; /* 높이 자동 조정 */
    position: absolute;
    left: 19px;
    top: 133px;
    bottom: 80px; /* 하단 여백 추가 */
    overflow-y: auto; /* 세로 스크롤 추가 */
`;

const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr; /* 한 열로 표시 */
    gap: 10px; /* 간격 추가 */
`;
const NaN_0009 = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 13px;
    font-family: Inter, sans-serif;
    font-weight: initial;
    text-align: left;
    margin-left: 5px; /* 왼쪽 여백 추가 */
`;

const PostItem = styled.div`
    position: relative; /* 상대 위치 설정 */
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const PostContent = styled.span`
    color: black;
    font-size: 13px;
    font-family: Inter, sans-serif;
    font-weight: initial;
    text-align: left;
    margin-bottom: 10px;
`;