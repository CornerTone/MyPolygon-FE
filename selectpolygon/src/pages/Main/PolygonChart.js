import React from 'react';
import styled from 'styled-components';
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


export function PolygonChart({ data }) {
    const chartData = {
        labels: ['건강', '인간관계', '학업', '경제', '여가'],
        datasets: [
            {
                label: '만족도',
                data: data,
                backgroundColor: 'rgba(255, 108, 61, 0.2)',
            },
            {
                label: '1',
                data: [1.5, 2.5, 2.5, 3, 1],
                borderColor: '#F5EFE7',
                backgroundColor: 'rgb(79, 112, 156)',
                borderWidth: 3,
                //pointBackgroundColor: 'transparent',
                //pointBorderColor: 'transparent',
            },
        ],
    };

    const chartOptions = {
        elements: {
        line: {
            //borderWidth: 0,
            borderColor: '#F5EFE7',
        },
        point: {
            radius: 0,
            pointBackgroundColor: '#F5EFE7',
        },
        },
        scales: {
        r: {
            ticks: {
            stepSize: 1,
            display: false,
            },
            grid: {
                lineWidth: 2,
                borderColor: '#F5EFE7',
            },
            pointLabels: {
                font: {
                    size: 12,
                    weight: '700',
                    family: 'Pretendard',
                },
                color: '#F5EFE7',
            },
            angleLines: {
            display: false,
            },
            suggestedMin: 1,
            suggestedMax: 3,
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
        <>
            <Group_0001>
                <PolygonChart data={data} />
            </Group_0001>
        </>
    );
}

const StRadar = styled.div`
    width: 300px;
    height: 270px;
    border: none;
    background-color: rgb(79, 112, 156);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Group_0001 = styled.div`
	position: absolute;
	box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
    border-radius: 10px;
	left: 20px;
	top: 205px;
`;
