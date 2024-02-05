import React, { useState, useEffect } from "react";
import { goBack } from "../../components/backNavigation";
import { Footer } from "../../components/Footer";
import WeekCalendar from "../../components/Calendar";
import { RecordModal } from "./RecordModal"; 
import * as R from "./RecordStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faUserGroup, faDumbbell, faBookOpen, faFootball } from '@fortawesome/free-solid-svg-icons'
import { HeaderLogout } from "../../components/HeaderLogout";
import axios from "axios";
import { HeaderMypage } from "../../components/HeaderMypage";

// 카테고리별 아이콘 정의
const categoryIcons = {
    학업: faBookOpen,
    여가: faFootball,
    건강: faDumbbell,
    인간관계: faUserGroup,
    경제: faDollarSign
};

const categoryNames = {
    학업: '학업',
    여가: '여가',
    건강: '건강',
    인간관계: '인간관계',
    경제: '경제'
};

// 분을 시간 형식의 문자열로 변환
const convertMinutesToTimeString = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} h ${minutes} m`;
};

export function Record({ selectedDate, onDateChange }) {

	// const [date, setDate] = useState(new Date());
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);
    const [recordedTimes, setRecordedTimes] = useState(null);
	const categories = ["학업", "여가", "건강", "인간관계", "경제"];
	
	// 날짜 형식을 ISO 문자열로 변환하는 함수
	const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}T00:00:00.000Z`;
    };

	const formattedDate = formatDate(selectedDate);

	const openModal = (category) => {
		setSelectedCategory(category);
		setIsModalOpen(true);
		document.body.style.overflow = "hidden"
	};

	const closeModal = () => {
		setSelectedCategory(null);
		setIsModalOpen(false);
		document.body.style.overflow = "unset";
	};

	// 날짜 변경 핸들러
	const handleDateChange = (selectedDate) => {
		onDateChange(selectedDate);
	};

	// 선택된 날짜가 변경될 때마다 기록된 시간을 가져오기
	useEffect(() => {
		fetchRecordedTimes();
	}, [formattedDate]);

	useEffect(() => {
		console.log("recordedTimes", recordedTimes);
	}, [recordedTimes]);

	// 기록된 시간 조회
	const fetchRecordedTimes = async () => {
        try {
			console.log("formattedDate in fetchRecordedTimes:", formattedDate);
			console.log("Selected Date:", selectedDate);
			setRecordedTimes(null);
            const response = await axios.get(`http://localhost:3001/api/dailyInvestment/daily/${formattedDate}`,{
				withCredentials: true,
				params: {
					selectedDate: formattedDate, // 변경된 날짜를 ISO 형식으로 전달
				}
			});
            setRecordedTimes(response.data.data);
			console.log("recordedTimes", response.data.data); // 업데이트된 데이터를 출력
			console.log("response data", response.data);
			
        } catch (error) {
            console.error("Error fetching recorded times:", error);
        }
    };

	// 기록 저장 핸들러
    const handleConfirm = async (timeRecorded) => {
		try {
			const existingRecord = recordedTimes.find(
				(item) =>
					item.category === selectedCategory &&
					item.activityDate.slice(0, 10) === formattedDate
			);

            if (existingRecord) {
                const response = await axios.put("http://localhost:3001/api/dailyInvestment/rewrite_daily", 
				{
					category: selectedCategory,
                    totalMinutes: timeRecorded,
                    activityDate: formattedDate,
                },
				{
					withCredentials: true,
				});
				console.log("response data", response.data);
				const updatedRecordedTimes = recordedTimes.map(item => {
					if (item.id === response.data.data.id) {
						return response.data.data;
					} else {
						return item;
					}
				});
				setRecordedTimes(updatedRecordedTimes);
				console.log("recordedTimes", recordedTimes);
            } else {
                const response = await axios.post("http://localhost:3001/api/dailyInvestment/save_daily", 
				{
                    category: selectedCategory,
                    totalMinutes: timeRecorded,
                    activityDate: formattedDate
                },
				{
					withCredentials: true,
				});
				console.log("response data", response.data);
            }
            await fetchRecordedTimes(); // 저장 후 다시 투자 정보를 조회하여 업데이트
            closeModal();
        } catch (error) {
            console.error("Error saving recorded time:", error);
        }
    };

    return (
        <R.RootWrapperNaN>
			<R.Frame48>
				<R.Vector xmlns="http://www.w3.org/2000/svg" onClick={goBack}>
				<path fill="rgba(0, 0, 0, 0.64)" d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"/>
				</R.Vector>
				<HeaderMypage />
				<HeaderLogout />
				<R.NaN_0002>집중 기록</R.NaN_0002>
			</R.Frame48>

			<R.NaN_0003>
				<R.Line3/>
				<WeekCalendar date={selectedDate} onChange={handleDateChange} />
			</R.NaN_0003>

			<R.ContentWrapper>
				<R.ContentContainer>
					{recordedTimes && categories.map((category, index) => {
						// 선택한 날짜의 해당 카테고리에 해당하는 활동들을 필터링하여 가져옴
						const activities = recordedTimes.filter(item => item.category === category);
						// 해당 카테고리의 총 시간을 계산
						const totalMinutes = activities.reduce((total, activity) => activity.hours * 60 + activity.minutes, 0);
						
						return (
							<R.CategoryContainer key={index} onClick={() => openModal(category)}>
								<R.Rectangle34/>
								<R.CategoryName>{categoryNames[category]}</R.CategoryName>
								
								{/* 시간기록 */}
								<R.TimeRecord>
									{convertMinutesToTimeString(totalMinutes)}
								</R.TimeRecord>

								{/* 카테고리별 저장된 아이콘 */}
								{categoryIcons[category] && (
									<div>
										<R.Ellipse11>
											<R.IconContainer>
												<FontAwesomeIcon 
													icon={categoryIcons[category]} 
													style={{ 
														color: 'white',
														fontSize: '30px',  
														marginLeft: '0px', 
														marginTop: '19px'   
													}} 
												/>
											</R.IconContainer>
										</R.Ellipse11>
									</div>
								)}

							</R.CategoryContainer>
						);
					})}
					{isModalOpen && (
						<RecordModal
							selectedCategory={selectedCategory}
							handleConfirm={handleConfirm}
							closeModal={closeModal}
						/>
					)}
					
				</R.ContentContainer>
			</R.ContentWrapper>
			<Footer />
        </R.RootWrapperNaN>
		
    )
}


