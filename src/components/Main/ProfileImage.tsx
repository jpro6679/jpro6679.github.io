/* 소개글 구역에서 사용할 프로필 이미지 */
import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Img, { FluidObject } from 'gatsby-image';

export interface ProfileImageProps {
    profileImage: FluidObject;
}

// @media (max-width: 768px){...}
// 미디어 쿼리
// 단말기의 유형 또는 화면 해상도나 너비와 같은 수치에 따라 다른 스타일을 지정할 수 있도록 해주는 기능
const ProfileImageWrapper = styled(Img)`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;

    @media (max-width: 768px){
        width: 80px;
        height: 80px;
    }
`;

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
    profileImage,
}) {
    return <ProfileImageWrapper fluid={profileImage} alt="Profile Image" />;
};

export default ProfileImage;