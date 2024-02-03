import { useEffect } from "react";

import DiaryEditor from "../../components/Diary/DiaryEditor";

const DiaryNew = () => {
  // 타이틀 번경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `칭찬 일기 - 새 칭찬 쓰기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default DiaryNew;
