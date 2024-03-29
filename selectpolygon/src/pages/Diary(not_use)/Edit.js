import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DiaryStateContext } from "../../App";
import DiaryEditor from "../../components/Diary/DiaryEditor";

const DiaryEdit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);

  // 타이틀 번경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `칭찬 일기 - ${id}번 일기 수정`;
  }, []);

  // id, diaryList가 변할때 데이터꺼내오기
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/diaryhome", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default DiaryEdit;
