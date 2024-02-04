import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import * as M from "./HeaderMypageStyle";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export function HeaderMypage(){

    const navigate = useNavigate();

    const handleMypage = async () => {
        navigate("/mypage");
    }

    return(
            <M.Group onClick={handleMypage}>
                <StyledFontAwesomeIcon icon={faUser} />
            </M.Group>
    )
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 19px;

    &:hover {
        color: #DB874B;
    }
`;