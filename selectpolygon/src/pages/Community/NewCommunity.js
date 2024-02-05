import React, { useState } from "react";
import * as N from "./NewCommunityStyle";
import { Footer } from "../../components/Footer";
import { goBack } from "../../components/backNavigation";
import { useNavigate } from "react-router";
// import { categoryNames } from "./Community";
import axios from "axios";
import { HeaderLogout } from "../../components/HeaderLogout";
import { HeaderMypage } from "../../components/HeaderMypage";
import { Link, useHistory } from "react-router-dom";

const categoryNames = {
	1: "건강",
	2: "경제",
	3: "학업",
	4: "여가",
	5: "인간관계",
  };

export function NewCommunity() {
  const categories = Object.values(categoryNames);
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // 드롭다운 박스에서 카테고리 선택 시 state 업데이트
  };

  const [content, setContent] = useState("");
  const handleContentChange = (e) => {
    setContent(e.target.value); // 고민 내용 입력 시 state 업데이트
  };

  const handleSubmit = async () => {
    try {
      let categoryId = Object.keys(categoryNames).find(
        (key) => categoryNames[key] === category
      );
      console.log(categoryId);
	  categoryId = categoryId !== undefined ? categoryId : 1;

      const response = await axios.post(
        "http://localhost:3001/api/community/create",
        {
          categoryId: categoryId,
          content: content,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        console.log("글이 성공적으로 등록되었습니다.");
        navigate("/community");
      } else {
        console.error("글 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("글 등록 중 오류 발생:", error);
    }
  };

  return (
    <N.RootWrapperNaN>
      <N.Frame47>
        <N.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
          <path
            fill="rgba(0, 0, 0, 0.64)"
            d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
          />
        </N.Vector>
        <HeaderLogout />
        <HeaderMypage />
      </N.Frame47>

      <N.NaN_0007>글 등록하기</N.NaN_0007>

      <N.Rectangle34 />
      <N.NaN_0002>요소</N.NaN_0002>

      <N.CategoryDropdown value={category} onChange={handleCategoryChange}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </N.CategoryDropdown>

      <N.Rectangle38 />
      <N.NaN_0003>고민</N.NaN_0003>
      <N.ContentInput
        value={content}
        onChange={handleContentChange}
        placeholder={
          "고민 내용을 자유롭게 작성해주세요\n다른 분들이 정성스럽게 답글을\n남겨주실거에요 :)"
        }
      />

      <N.NaN_0005>
        등록하신 고민이 해결되길
        <br />
        ‘나만의 다각형’이 응원할게요!
      </N.NaN_0005>

      <Link to="/community">
        <N.SubmitButton onClick={handleSubmit}>등록하기</N.SubmitButton>
      </Link>
      <Footer />
    </N.RootWrapperNaN>
  );
}