import React, { useState } from "react";
import * as M from "./RecordModalStyle";

export function RecordModal({ selectedCategory, closeModal, handleConfirm}) {
  	// 시간 선택 스크롤 목록
	const hours = Array.from({ length: 24 }, (_, i) => i);
	const minutes = Array.from({ length: 60 }, (_, i) => i);

	// 카테고리별 시간 관리
	const [categoryTimes, setCategoryTimes] = useState({
		학업: { hour: 0, minute: 0 },
		여가: { hour: 0, minute: 0 },
		건강: { hour: 0, minute: 0 },
		인간관계: { hour: 0, minute: 0 },
		경제: { hour: 0, minute: 0 }
	});

	// 시간 선택 이벤트 핸들러
	const handleHourSelect = (category, hour) => {
		setCategoryTimes((prevTimes) => ({
			...prevTimes,
			[category]: { ...prevTimes[category], hour }
		}));
	};

	// 분 선택 이벤트 핸들러
	const handleMinuteSelect = (category, minute) => {
		setCategoryTimes((prevTimes) => ({
			...prevTimes,
			[category]: { ...prevTimes[category], minute }
		}));
	};

	const handleConfirmClick = () => {
		const { hour, minute } = categoryTimes[selectedCategory];
		const timeInMinutes = hour * 60 + minute;
		handleConfirm(timeInMinutes); // Record(부모)로 전달
		console.log(`카테고리: ${selectedCategory}, 입력된 시간: ${timeInMinutes}`);
		closeModal(); 
	};

	return (
		<>
			{selectedCategory && ( // 선택된 카테고리가 있을 때만 모달 표시
				<M.ModalOverlay>
						<M.RootWrapperNaN>
							<M.Rectangle35 />
							<M.NaN_0002>오늘은 얼마나 노력했나요?</M.NaN_0002>
								<M.NaN_0003 onClick={handleConfirmClick}>
									확인
								</M.NaN_0003>

							<M.NaN_0004 onClick={closeModal}>취소</M.NaN_0004>

							{/* 시간 선택을 위한 스크롤 컨테이너 */}
							<M.H_ScrollContainer>
								{hours.map((hour) => (
								<M.ScrollItem
									key={hour}
									selected={hour === categoryTimes[selectedCategory].hour}
									onClick={() => handleHourSelect(selectedCategory, hour)}
								>
									{hour < 10 ? `0${hour}` : hour}
								</M.ScrollItem>
								))}
							</M.H_ScrollContainer>
							<M.H>h</M.H>
							
							 {/* 분 선택을 위한 스크롤 컨테이너 */}
							<M.M_ScrollContainer>
								{minutes.map((minute) => (
								<M.ScrollItem
									key={minute}
									selected={minute === categoryTimes[selectedCategory].minute}
									onClick={() => handleMinuteSelect(selectedCategory, minute)}
								>
									{minute < 10 ? `0${minute}` : minute}
								</M.ScrollItem>
								))}
							</M.M_ScrollContainer>
							<M.M>m</M.M>
					</M.RootWrapperNaN>
				</M.ModalOverlay>
			)}
		</>
		
	);
}

