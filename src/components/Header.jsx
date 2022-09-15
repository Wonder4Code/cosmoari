import logo from '../assets/Cosmo.svg'
import firstPic from '../assets/photo1.jpg'
import secondPic from '../assets/photo2.jpg'
import styled, {keyframes} from "styled-components";
import {animateScroll}from 'react-scroll'

const Divider = styled.div`
  width: 1px;
  height: 50px;
  border-left: 1px solid #333333;
  margin-right: 10px;
`;

const LeftTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const RightTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: ${props => props.bold && 'bold'};
  
  @media(max-width: 500px){
    font-size: 16px;
  }
`;

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const HeadingInfo = styled.h1`
  margin: 0;
  text-transform: ${props => props.upper && 'uppercase'};
  font-size: 50px;
  font-weight: 600;

  @media(max-width: 500px){
    font-size: 32px;
  }
`;

const TextInfo = styled.p`
  max-width: 440px;

  @media (max-width: 1250px) {
    max-width: 340px;
  }
`;

const StyledPhotos = styled.img`
  width: 45%;
  max-width: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const FirstPhoto = styled(StyledPhotos)`
position: absolute;
  top: 160px;
  left: 20px;
`;

const SecondPhoto = styled(StyledPhotos)`
  position: absolute;
  right: 0;
  top: 50px;
`;

const StyledInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1250px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 100px;
  }
`;

const PhotosWrapper = styled.div`
  width: 100%;
  max-width: 650px;
  box-sizing: border-box;
  height: 600px;
  min-height: 300px;
  display: flex;
  position: relative;
  
  @media (max-width: 1415px) {
    width: 90%;
    height: 600px;
  }
  @media (max-width: 1250px) {
    width: 70%;
    height: 400px;
  }
  @media (max-width: 600px){
    width: 100%;
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 300px;
  }
`;

const jump = keyframes`
  0%
  {
    transform: scale( 1.1 );
  }
  25%
  {
    transform: scale( 1 );
  }
  50%
  {
    transform: scale( 1.1 );
  }
  75%
  {
    transform: scale( 1 );
  }
  100%{
    transform: scale(1.1);
  }
`;

export const StyledButton = styled.button`
  background: #84837d;
  font-size: 20px;
  border: none;
  color: #ffffff;
  padding: 30px 50px;
  border-radius: 5px;
  cursor: pointer;
  animation: ${jump} 2s infinite;
  
  &:hover {
    background: #999890;
  }
  &:active {
    background: #84837d;
  }
`;

const HeaderWrap = styled.div`
  padding: 40px 220px;
  
  @media (max-width: 1100px) {
    padding: 40px 120px;
  }
  @media (max-width: 900px) {
    padding: 40px 32px;
  }

  @media(max-width: 500px){
    padding: 24px 16px;
  }
`;

const TextWrap = styled.div`
  margin-right: 16px;

  @media (max-width: 1250px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = () => {
  return(
      <HeaderWrap>
        <Titles>
          <LeftTitleWrap>
            <StyledLogo src={logo}/>
            <Title>Ариша Космо</Title>
          </LeftTitleWrap>
          <RightTitleWrap>
            <Divider/>
            <div>
              <Title bold>Старт препродаж</Title>
              <Title>Сентябрь 2022</Title>
            </div>
          </RightTitleWrap>
        </Titles>

        <StyledInfoWrap>
          <TextWrap>
            <HeadingInfo>Онлайн-курс</HeadingInfo>
            <HeadingInfo upper>По визуалу</HeadingInfo>
            <TextInfo>Заполните анкету и получите ссылку на закрытую предпродажу <BoldText>по самой выгодной цене</BoldText></TextInfo>
            <StyledButton onClick={() => animateScroll.scrollTo(1920)}>Заполнить анкету</StyledButton>
          </TextWrap>
          <PhotosWrapper>
              <FirstPhoto src={firstPic}/>
              <SecondPhoto src={secondPic}/>
          </PhotosWrapper>
        </StyledInfoWrap>
      </HeaderWrap>

  )
}