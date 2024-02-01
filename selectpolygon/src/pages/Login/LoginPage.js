import React from "react";
import * as L from "./LoginPageStyle";
import { Link } from "react-router-dom";
import { goBack } from "../../components/backNavigation";


export function LoginPage() {
    return (
        <L.RootWrapperNaN>
            <L.Rectangle3/>
            <L.Group12>
                <L.Rectangle25/>
                <Link to="/main">
                    <L.NaN_0002>
                        로그인
                    </L.NaN_0002>
                </Link>
            </L.Group12>

            <L.Group12_0001>
                <L.Rectangle23/>
                <L.NaN_0004>
                    아이디
                </L.NaN_0004>
            </L.Group12_0001>
            <L.IdInputBox type="text" />

            <L.Group12_0002>
                <L.Rectangle22/>
                <L.NaN_0005>
                    비밀번호
                </L.NaN_0005>
            </L.Group12_0002>
            <L.PasswordInputBox type="password" />
            
            <L.Rectangle39/>
            <L.Rectangle39/>
            <L.Typography>
                <L.Typography_0001>
                    로그인
                </L.Typography_0001>
            </L.Typography>
            <L.Vector xmlns="http://www.w3.org/2000/svg"  onClick={goBack}>
                <path fill="rgba(0, 0, 0, 0.64)" d="M0 7.50001C0 7.74737 0.118471 7.97494 0.333872 8.16294L7.4852 14.723C7.7006 14.911 7.92677 15 8.18525 15C8.71299 15 9.13302 14.6439 9.13302 14.1491C9.13302 13.9117 9.03609 13.6742 8.86377 13.5257L6.45127 11.2698L2.18633 7.6979L1.96015 8.18273L5.42811 8.38062L19.0523 8.38062C19.6123 8.38062 20 8.01452 20 7.50001C20 6.9855 19.6123 6.6194 19.0523 6.6194L5.42811 6.6194L1.96015 6.81729L2.18633 7.31202L6.45127 3.73022L8.86377 1.47427C9.03609 1.31596 9.13302 1.08839 9.13302 0.850923C9.13302 0.356201 8.71299 0 8.18525 0C7.92677 0 7.7006 0.0791558 7.46365 0.296834L0.333872 6.83708C0.118471 7.02507 0 7.25265 0 7.50001Z"/>
            </L.Vector>
        </L.RootWrapperNaN>
    )
}

