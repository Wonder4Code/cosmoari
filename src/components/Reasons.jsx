import styled from "styled-components";
import P1 from '../assets/point1.svg'
import P2 from '../assets/point2.svg'
import P3 from '../assets/point3.svg'
import P4 from '../assets/point4.svg'
import {StyledButton} from "./Header";
import {animateScroll} from 'react-scroll';

const ReasonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 220px;
  padding: 0 220px;
  @media (max-width: 1415px) {
    margin: 0;
  }
  @media (max-width: 1250px) {
    margin: 0;
  }

  @media (max-width: 1150px) {
    padding: 0 100px;
  }

  @media (max-width: 900px) {
    padding: 0 32px;
  }

  @media (max-width: 500px) {
    padding: 0 16px;
  }
`;

const StyledIcon = styled.img`
  width: 100px;
`;

const PointWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 1250px) {
    width: 100%;
  }
`;

const PointText = styled.p`
  max-width: 350px;
  margin: 0 0 0 10px;
`;

const PointsList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

const ReasonButton = styled(StyledButton)`
  margin-top: 48px;
`

export const Reasons = () => {
  return(
      <ReasonsWrap>
        <h1>4 причины заполнить анкету предзаписи</h1>
        <PointsList>
          <Point img={P1} text={'Самая выгодная цена, которой больше не будет нигде'}/>
          <Point img={P2} text={'Гарантированное место на курсе со скидкой'}/>
          <Point img={P3} text={'Возможность узнать об открытии курса одним из первых'}/>
          <Point img={P4} text={'Бесплатная консультация для первых 20 записавшихся'}/>
        </PointsList>
        <ReasonButton onClick={() => animateScroll.scrollTo(1865)}>Заполнить анкету</ReasonButton>
      </ReasonsWrap>
  )
}

const Point = ({img, text}) => {
  return(
      <PointWrap>
        <StyledIcon src={img}/>
        <PointText>{text}</PointText>
      </PointWrap>
  )
}