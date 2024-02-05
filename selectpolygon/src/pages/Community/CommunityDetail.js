import React, { useState, useEffect } from "react";
import { goBack } from "../../components/backNavigation";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import * as D from "./CommunityDetailStyle";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

export const categoryNames = {
  1: "건강",
  2: "경제",
  3: "학업",
  4: "여가",
  5: "인간관계",
};

export function CommunityDetail() {
	// url의 id 값
  const { id } = useParams();
  // 댓글 저장 
  const [comment, setComment] = useState(""); 
	// 커뮤니티 정보 저장 
  const [communityDetail, setCommunityDetail] = useState({});
  // 댓글 작성 시 상태 업데이트 
  const handleCommentChange = (event) => {
    setComment(event.target.value); 
  };

  // 서버로부터 커뮤니티 상세 정보 조회 
  useEffect(() => {
    const fetchCommunityDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/community/read-detail/${id}`,
          {
            withCredentials: true,
          }
        );
        setCommunityDetail(response.data.community);
      } catch (error) {
        console.error("Error fetching community detail:", error);
      }
    };

    fetchCommunityDetail(); 
  }, [id]); // id가 변경될 때마다 useEffect가 다시 실행됨

  // 작성한 댓글을 서버로 보냄 
  const handleSubmitComment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/comment/create/${communityDetail.id}`,
        {
          content: comment,
        },
        {
          withCredentials: true,
        }
      );
      console.log("댓글 작성 성공:", response.data);
      // 댓글 작성 후 댓글 상태를 업데이트해 렌더링 발생
      setComment(""); 
	  // 댓글 정보에 작성한 댓글 추가 
      setCommunityDetail((prevState) => ({
        ...prevState,
        community_comments: [
          ...prevState.community_comments,
          response.data.comment,
        ], 
      }));
    } catch (error) {
      console.error("댓글 작성 실패:", error);
    }
  };

  return (
    <D.RootWrapperNaN>
      <D.Frame47>
        <HeaderLogout />
        <HeaderMypage />
        <D.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </D.Vector>
        <D.NaN_0002>
			{/* 커뮤니티 이름 출력 */}
          {communityDetail.categories &&
            communityDetail.categories.length > 0 &&
            categoryNames[communityDetail.categories[0].id]}
        </D.NaN_0002>
      </D.Frame47>
      <D.NaN_0003>{communityDetail.content}</D.NaN_0003>
      <D.Comments>
		{/* 커뮤니티 댓글 출력 */}
        {communityDetail.community_comments &&
          communityDetail.community_comments.map((comment) => (
            <D.Comment key={comment.id}>{comment.content}</D.Comment>
          ))}
      </D.Comments>

      <D.CommentContainer>
		{/* 댓글 입력 */}
        <D.CommentInput
          type="text"
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={handleCommentChange}
        />
		{/* 댓글 저장 */}
        <D.SubmitButton onClick={handleSubmitComment}>댓글 작성</D.SubmitButton>
      </D.CommentContainer>
      <D.Image3 />
      <D.Group2>
        <D.Line1 />
        <D.Line2 />
      </D.Group2>
      <Footer />
    </D.RootWrapperNaN>
  );
}
