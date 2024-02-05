import React, { useState } from "react";
import axios from "axios";
import { goBack } from "../../components/backNavigation";
import * as E from "./ElementSelectStyle";
import { Footer } from "../../components/Footer";

export function ElementSelect() {
    // 선택한 요소를 저장
    const [selectedElements, setSelectedElements] = useState([]);

    // 요소가 이미 선택되어 있다면 배열에서 제거, 선택되어 있지 않다면 배열에 추가
    const handleElementSelect = (elementId) => {
        // 요소가 이미 선택되어 있는지 여부 확인 
        const isSelected = selectedElements.includes(elementId);

        if (isSelected) {
        const updatedElements = selectedElements.filter((id) => id !== elementId);
        setSelectedElements(updatedElements);
        } else {
        setSelectedElements([...selectedElements, elementId]);
        }
    };

    // 요소 선택 후 백 서버로 전달 
    const handleSaveElements = async () => {
        console.log(selectedElements);
        try {
        const response = await axios.post(
            "http://localhost:3001/api/polygon/set-element",
            {
                elements: selectedElements,
            },
            {
                withCredentials: true,
            }
        );

        console.log("백엔드 응답:", response.data);

        // 데이터 저장이 성공하면 검사페이지로 이동
        if (response.data.success) {
            window.location.href = "/examinationprogress";
        }
        } catch (error) {
        console.error("데이터 전송 중 오류 발생:", error);
        }
    };

    return (
        <E.RootWrapperNaN>
            {/* 요소 선택 UI */}
            <E.Group19>
                <E.Rectangle23 />
                <E.NaN_0002
                    data-selected={selectedElements.includes(1)}
                    onClick={() => handleElementSelect(1)}
                >
                    건강
                </E.NaN_0002>
            </E.Group19>
            <E.Group20>
                <E.Rectangle23 />
                <E.NaN_0002
                    data-selected={selectedElements.includes(2)}
                    onClick={() => handleElementSelect(2)}
                >
                    경제
                </E.NaN_0002>
            </E.Group20>
            <E.Group21>
                <E.Rectangle25 />
                <E.NaN_0002
                    data-selected={selectedElements.includes(3)}
                    onClick={() => handleElementSelect(3)}
                >
                    학업
                </E.NaN_0002>
            </E.Group21>
            <E.Group22>
                <E.Rectangle26 />
                <E.NaN_0005
                    data-selected={selectedElements.includes(4)}
                    onClick={() => handleElementSelect(4)}
                >
                    인간관계
                </E.NaN_0005>
            </E.Group22>
            <E.Group23>
                <E.Rectangle25 />
                <E.NaN_0002
                    data-selected={selectedElements.includes(5)}
                    onClick={() => handleElementSelect(5)}
                >
                    여가
                </E.NaN_0002>
            </E.Group23>

            {/* 저장 버튼 */}
            <E.Frame24 onClick={handleSaveElements}>
                <E.NaN_0007>저장</E.NaN_0007>
            </E.Frame24>
            <E.Group56>
                <E.Rectangle36 />
                <E.Typography_0003>
                <E.Typography_0001>
                    <E.Typography_0005>꼭짓점 요소를 추천해 드려요!</E.Typography_0005>
                </E.Typography_0001>
                </E.Typography_0003>
            </E.Group56>
            <E.Line14 />
            <E.Line15 />
            <E.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
                <path
                fill="rgba(0, 0, 0, 0.64)"
                d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"
                />
            </E.Vector>
            <Footer />
        </E.RootWrapperNaN>
    );
}