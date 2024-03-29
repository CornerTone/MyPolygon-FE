import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DiaryStateContext } from "../../App";
import MyButton from "../../components/Diary/MyButton";
import MyHeader from "../../components/Diary/MyHeader";
import { getStringDate } from "../../util/date";
import { emotionList } from "../../util/emotion";

const DiaryDetail = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  // 타이틀 변경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `칭찬 일기 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      // 일기가 존재할때 아닐때
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/diaryhome", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다.</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/diaryedit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curEmotionData.emotion_img} alt="emotion" />
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 칭찬</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default DiaryDetail;
