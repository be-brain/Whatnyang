import React from "react";
import styled from "styled-components";

const imgProfile = "images/profile.png";
const Mypage = () => {
  const BaseProfile = null || imgProfile;
  return (
    <StyledDivContainer>
      <StyledDivMain>
        <StyledDivOne>
          <div></div>
          <Profile img={BaseProfile}></Profile>
          <ProfileList style={{ backgroundColor: "red" }}>
            나는팔팔하조
          </ProfileList>
          <div style={{ backgroundColor: "red" }}></div>
        </StyledDivOne>
        <StyledDivTwo>
          <StyledButtonLikes>관심</StyledButtonLikes>
          <StyledButtonReview>리뷰</StyledButtonReview>
        </StyledDivTwo>
        <StyledDivThree>
          <StyledDivReviewFoamContainer>
            <StyledDivReviewFoamProfileImage>1</StyledDivReviewFoamProfileImage>
            <StyledDivReviewFoamProfileTextContainer>
              2
            </StyledDivReviewFoamProfileTextContainer>
          </StyledDivReviewFoamContainer>
        </StyledDivThree>
      </StyledDivMain>
    </StyledDivContainer>
  );
};

const StyledDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 100px;
`;
const StyledDivMain = styled.div`
  display: grid;
  grid-template-rows: 0.4fr 0.1fr 1fr;
  grid-template-columns: repeat(1, 1fr);
  width: 700px;
  height: 100%;
  left: 225px;
  top: 167px;
  background: #fef6ec;
  border-radius: 30px;
  padding: 50px;
`;

const StyledDivOne = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 60% 10%;
`;

const Profile = styled.div<{ img: string }>`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;
const ProfileList = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-between
`;

const StyledDivTwo = styled.div`
  display: grid;
  grid-template-columns: 15% 15%;
  align-self: center;
`;

const StyledDivThree = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 30px;
`;
const StyledButtonLikes = styled.button`
  width: 100px;
  height: 40px;
  background: #e37b58;
  border-radius: 30px;
  padding: 10px 30px;
`;

const StyledButtonReview = styled.button`
  width: 100px;
  height: 40px;
  background: #ffffff;
  border-radius: 30px;
  padding: 10px 30px;
`;

const StyledDivReviewFoamContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 15% 20%;
  background-color: white;
  border-radius: 10px;
`;

const StyledDivReviewFoamProfileImage = styled.div`
  background-color: lightblue;
`;

const StyledDivReviewFoamProfileTextContainer = styled.div`
  background-color: lightgoldenrodyellow;
`;
export default Mypage;