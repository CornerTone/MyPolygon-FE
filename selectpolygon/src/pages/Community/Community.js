import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./CoummunityStyle";
import { Footer } from "../../components/Footer";
import { goBack } from "../../components/backNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import axios from "axios";

export const categoryNames = {
  1: "건강",
  2: "경제",
  3: "학업",
  4: "여가",
  5: "인간관계",
};

const categoryColors = {
  1: "#BCDC63", // 건강
  2: "#99E0DB", // 경제
  3: "#EBBA71", // 학업
  4: "#85BBE2", // 여가
  5: "#BE7CC3", // 인간관계
};

export function Community() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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
      console.log("response => " + response);
      if (response.data.status === 404) {
        console.log("err");
        setErrorMessage("작성된 커뮤니티 글이 없습니다.");
        console.log(errorMessage);
      }
      if (response.data.success) {
        setErrorMessage("");
        console.log("in");
        console.log(response.data);
        const updatedPosts = response.data.communities.map((post) => ({
          ...post,
          categoryName: categoryNames[post.categories[0].id], // Convert categoryId to categoryName
        }));
        setPosts(updatedPosts);
        console.log(updatedPosts);
      } else {
        console.log("err");
        setErrorMessage("작성된 커뮤니티 글이 없습니다.");
        console.log(errorMessage);
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      setErrorMessage("작성된 커뮤니티 글이 없습니다.");
      console.log(error.message);
    }
  };

  function handleClick(id) {
    window.location.href = `/communitydetail/${id}`;
  }

  const handleCategoryClick = (category) => {
    console.log(category);
    setSelectedCategory(category);
    // setSelectedCategory(category === selectedCategory ? null : category);
  };

  const navigateToNewPost = () => {
    navigate("/communitynew");
  };

  return (
    <C.RootWrapperNaN>
      <C.Frame47>
        <C.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </C.Vector>
        <C.NaN_0002>고민 나눔</C.NaN_0002>
        <HeaderLogout />
        <HeaderMypage />
      </C.Frame47>

      <C.CategoryWrapper>
        {Object.keys(categoryNames).map((categoryId) => (
          <React.Fragment key={categoryId}>
            <C.CategoriesContainer
              active={selectedCategory === categoryId}
              onClick={() => handleCategoryClick(categoryId)}
            >
              <C.Rectangle34
                color={
                  selectedCategory === categoryId
                    ? categoryColors[categoryId]
                    : "white"
                }
              >
                <path
                  fill={
                    selectedCategory === categoryId
                      ? categoryColors[categoryId]
                      : "white"
                  }
                  d="M0 14.5C0 6.49187 6.49187 0 14.5 0L37.5 0C45.5081 0 52 6.49187 52 14.5L52 14.5C52 22.5081 45.5081 29 37.5 29L14.5 29C6.49187 29 0 22.5081 0 14.5L0 14.5Z"
                />
              </C.Rectangle34>
              <C.CategoryName onClick={() => handleCategoryClick(categoryId)}>
                {categoryNames[categoryId]}
              </C.CategoryName>
            </C.CategoriesContainer>
          </React.Fragment>
        ))}
      </C.CategoryWrapper>

      <C.Group3>
        {errorMessage ? (
          <C.ErrorMessage>{errorMessage}</C.ErrorMessage>
        ) : (
          <C.PostGrid>
            {posts.map((post, index) => (
              <C.PostItem key={index}>
                <C.PostContent onClick={() => handleClick(post.id)}>
                  {post.content}
                </C.PostContent>
                <C.Group5>
                  <C.Rectangle22 color={categoryColors[post.categories[0].id]} />
                  <C.CategoryNameBox>
                    {categoryNames[post.categories[0].id]}
                  </C.CategoryNameBox>
                </C.Group5>
              </C.PostItem>
            ))}
          </C.PostGrid>
        )}
      </C.Group3>

      <C.Ellipse9 onClick={navigateToNewPost}>
        <FontAwesomeIcon
          icon={faPen}
          style={{
            color: "white",
            fontSize: "30px",
            marginLeft: "2px",
            marginTop: "13px",
          }}
        />
      </C.Ellipse9>

      <Footer />
    </C.RootWrapperNaN>
  );
}

