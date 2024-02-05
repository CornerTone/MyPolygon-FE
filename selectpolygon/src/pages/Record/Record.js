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

const convertMinutesToTimeString = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} h ${minutes} m`;
};


export function Record({ selectedDate, onDateChange }) {

	const [isModalOpen, setIsModalOpen] = useState(false);

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

	const [date, setDate] = useState(new Date());

	const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

	const formattedDate = formatDate(selectedDate);

	const [selectedCategory, setSelectedCategory] = useState(null);
    const [recordedTimes, setRecordedTimes] = useState({});

	const categories = ["학업", "여가", "건강", "인간관계", "경제"];

	const handleDateChange = (selectedDate) => {
		onDateChange(selectedDate);
	};

    useEffect(() => {
        fetchRecordedTimes();
    }, [formattedDate]);

	const fetchRecordedTimes = async () => {
        try {
			console.log("Selected Date:", selectedDate);
            const response = await axios.get("http://localhost:3001/api/dailyInvestment/daily",{
				withCredentials: true,
				params: {
					selectedDate: selectedDate.toISOString() // 변경된 날짜를 ISO 형식으로 전달
				}
			});
            setRecordedTimes(response.data.data);
			// console.log("response data", response.data);
        } catch (error) {
            console.error("Error fetching recorded times:", error);
        }
    };

    const handleConfirm = async (timeRecorded) => {
        try {
			//const minutesRecorded = convertMinutesToTimeString(timeRecorded);
            const response = await axios.post("http://localhost:3001/api/dailyInvestment/save_daily", {
                category: selectedCategory,
                totalMinutes: timeRecorded,
                activityDate: formattedDate,
            },
			{
				withCredentials: true,
			}
			
			);
            fetchRecordedTimes(); // 저장 후 다시 투자 정보를 조회하여 업데이트
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
				<WeekCalendar date={formattedDate} onChange={handleDateChange} />
			</R.NaN_0003>

			<R.ContentContainer>
				{categories.map((category, index) => {
					// 누적 시간 계산
					let accumulatedTime = 0;
					recordedTimes.forEach(item => {
						if (item.category === category) {
							accumulatedTime += item.hours * 60 + item.minutes;
						}
					});
					return (
						<R.CategoryContainer key={index} onClick={() => openModal(category)}>
							<R.Rectangle34/>

							<R.CategoryName>{categoryNames[category]}</R.CategoryName>
							<R.TimeRecord>
								{convertMinutesToTimeString(accumulatedTime)}
							</R.TimeRecord>

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
			
			<Footer />
        </R.RootWrapperNaN>
    )
}


