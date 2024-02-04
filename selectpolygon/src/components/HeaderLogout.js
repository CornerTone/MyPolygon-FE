import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import * as H from "./HeaderLogoutStyle";
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function HeaderLogout(){

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:3001/api/auth/logout", {
                withCredentials: true
            });
            console.log("로그아웃 성공");
            localStorage.removeItem("token");
            navigate("/");

        } catch (error) {
            console.error("로그아웃 실패", error);
        }
    };

    return(
            <H.Group onClick={handleLogout}>
                <StyledFontAwesomeIcon icon={faRightFromBracket} />
            </H.Group>
    )
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 20px;

    &:hover {
        color: #DB874B;
    }
`;