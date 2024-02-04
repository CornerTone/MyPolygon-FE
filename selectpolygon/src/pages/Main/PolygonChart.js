import React from 'react';
import styled from 'styled-components';
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


export function PolygonChart({ data }) {
    const chartData = {
        labels: ['건강', '인간관계', '학업', '경제', '여가'],
        datasets: [
        {
            label: '팀 점수',
            data: data,
            backgroundColor: 'rgba(255, 108, 61, 0.2)',
        },
        ],
    };

    const chartOptions = {
        elements: {
        line: {
            borderWidth: 2,
            borderColor: 'orange',
        },
        point: {
            pointBackgroundColor: 'orange',
        },
        },
        scales: {
        r: {
            ticks: {
            stepSize: 2.5,
            display: false,
            },
            grid: {
            color: 'gray',
            },
            pointLabels: {
            font: {
                size: 12,
                weight: '700',
                family: 'Pretendard',
            },
            color: 'black',
            },
            angleLines: {
            display: false,
            },
            suggestedMin: 0,
            suggestedMax: 10,
        },
        },
        plugins: {
        legend: {
            display: false,
        },
        },
        animation: {
        duration: 0,
        },
    };

    return (
        <StRadar>
            <Radar data={chartData} options={chartOptions} />
        </StRadar>
    );
}

export default function MyFigureChart({ data }) {
    return (
        <Frame7>
        <Frame5 />
        <Group_0001>
            <PolygonChart data={data} />
        </Group_0001>
        </Frame7>
    );
}

const StRadar = styled.div`
  /* Radar 차트에 대한 스타일을 지정하세요 */
`;


const Frame7 = styled.div`
	width: 330px;
	height: 330px;
	overflow: hidden;
	position: absolute;
	box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	left: 15px;
	top: 201px;
`;

const Frame5 = styled.div`
	width: 310px;
	height: 308px;
	overflow: hidden;
	background: rgb(79, 112, 156);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 10px;
	position: absolute;
	box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	left: 8px;
	top: 12px;
`;

const Group_0001 = styled.div`
	width: 266px;
	height: 231px;
	position: absolute;
	box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
	left: 30px;
	top: 38px;
`;
