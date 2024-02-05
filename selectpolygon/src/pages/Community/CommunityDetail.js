import React, { useState, useEffect } from "react";

import { goBack } from "../../components/backNavigation";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import styled from "@emotion/styled";
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
  const { id } = useParams();
  const [comment, setComment] = useState(""); // 댓글 상태 변수
  const handleCommentChange = (event) => {
    setComment(event.target.value); // 댓글 내용 변경 시 상태 업데이트
  };
  const [communityDetail, setCommunityDetail] = useState({});

  useEffect(() => {
    const fetchCommunityDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/community/read-detail/${id}`,
          {
            withCredentials: true,
          }
        );
        setCommunityDetail(response.data.community); // 응답 데이터 설정
        console.log(response.data.community);
      } catch (error) {
        console.error("Error fetching community detail:", error);
      }
    };

    fetchCommunityDetail(); // useEffect 내에서 직접 호출
  }, [id]); // id가 변경될 때마다 useEffect가 다시 실행됨

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
      // 댓글 작성 후 댓글 상태를 업데이트하여 렌더링이 자동으로 발생하도록 함
      setComment(""); // 댓글 입력 창을 비움
      setCommunityDetail((prevState) => ({
        ...prevState,
        community_comments: [
          ...prevState.community_comments,
          response.data.comment,
        ], // 새로운 댓글 추가
      }));
    } catch (error) {
      console.error("댓글 작성 실패:", error);
      // 댓글 작성 실패 시 필요한 작업 수행
    }
  };

  return (
    <RootWrapperNaN>
      <Frame47>
        <HeaderLogout />
        <HeaderMypage />
        <Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </Vector>
        <NaN_0002>
          {communityDetail.categories &&
            communityDetail.categories.length > 0 &&
            categoryNames[communityDetail.categories[0].id]}
        </NaN_0002>
      </Frame47>
      <NaN_0003>{communityDetail.content}</NaN_0003>
      <Comments>
        {communityDetail.community_comments &&
          communityDetail.community_comments.map((comment) => (
            <Comment key={comment.id}>{comment.content}</Comment>
          ))}
      </Comments>

      <CommentContainer>
        <CommentInput
          type="text"
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={handleCommentChange}
        />
        <SubmitButton onClick={handleSubmitComment}>댓글 작성</SubmitButton>
      </CommentContainer>
      <Image3 />
      <Group2>
        <Line1 />
        <Line2 />
      </Group2>
      <Footer />
    </RootWrapperNaN>
  );
}
const Comments = styled.div`
  margin-top: 20px;
  position: absolute;
  top: 270px;
`;

const Comment = styled.div`
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

const CommentContainer = styled.div`
  position: relative;
  top: 695px; /* 예시로 조절된 값, 필요에 따라 조절 가능 */
  right: 140px; /* 예시로 조절된 값, 필요에 따라 조절 가능 */
  z-index: 1000; /* 다른 요소들 위에 표시되도록 z-index 설정 */
`;

const CommentInput = styled.input`
  width: 250px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
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
  right: px;
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
  text-align: left;
  position: absolute;
  left: 163px;
  top: 17px;
`;

const Rectangle32 = styled.div`
  width: 401px;
  height: 90px;
  background: rgb(216, 196, 182);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: -11px;
  top: 693px;
`;

const Rectangle28 = styled.div`
  width: 401px;
  height: 90px;
  background: rgb(245, 239, 231);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: -22px;
  top: 76px;
`;

const NaN_0003 = styled.span`
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

const Rectangle28_0001 = styled.div`
  width: 307px;
  height: 98px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 26px;
  top: 181px;
  filter: blur(4px);
`;

const _1 = styled.span`
  color: rgb(33, 53, 85);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: left;
  position: absolute;
  left: 45px;
  top: 192px;
`;

const _5 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: left;
  position: absolute;
  left: 45px;
  top: 210px;
`;

const Rectangle31 = styled.div`
  width: 307px;
  height: 146px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 26px;
  top: 485px;
  filter: blur(4px);
`;

const _2 = styled.span`
  color: rgb(33, 53, 85);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: left;
  position: absolute;
  left: 45px;
  top: 497px;
`;

const Group1 = styled.div`
  width: 281px;
  height: 81px;
  position: absolute;
  left: 52px;
  top: 294px;
`;

const Rectangle29 = styled.div`
  width: 281px;
  height: 81px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const NaN_0004 = styled.span`
  color: rgb(33, 53, 85);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: left;
  position: absolute;
  left: 18px;
  top: 11px;
`;

const _53 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: left;
  position: absolute;
  left: 18px;
  top: 32px;
`;

const Rectangle30 = styled.div`
  width: 281px;
  height: 76px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 0px black;
  border-radius: 20px;
  position: absolute;
  left: 52px;
  top: 394px;
  filter: blur(4px);
`;

const _1_0001 = styled.span`
  color: rgb(33, 53, 85);
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: left;
  position: absolute;
  left: 70px;
  top: 405px;
`;

const _3 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: left;
  position: absolute;
  left: 70px;
  top: 425px;
`;

const _634 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: initial;
  text-align: left;
  position: absolute;
  left: 46px;
  top: 517px;
`;

const Image3 = styled.div`
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

const Group2 = styled.div`
  width: 14px;
  height: 15px;
  position: absolute;
  left: 29px;
  top: 292px;
`;

const Line1 = styled.div`
  width: 15px;
  height: 0px;
  border-top: solid 0px black;
  position: absolute;
  left: 0px;
  top: 0px;
  transform: rotate(-270deg);
  transform-origin: top left;
`;

const Line2 = styled.div`
  width: 14px;
  height: 0px;
  border-top: solid 0px black;
  position: absolute;
  left: 14px;
  top: 15px;
  transform: rotate(-180deg);
  transform-origin: top left;
`;

const Rectangle33 = styled.div`
  width: 260px;
  height: 34px;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  left: 23px;
  top: 704px;
`;
