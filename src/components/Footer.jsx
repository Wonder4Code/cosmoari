import styled from "styled-components";

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: #efefef;
  margin-top: 32px;
`;

const StyledText = styled.p`
  margin: 0 0 8px 0;
  opacity: 0.7;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #ff8562;
`;

export const Footer = () => (
    <FooterWrap>
          <StyledText>Контент создан и права на него принадлежат Бойченко Арине Александровне</StyledText>
          <StyledText>Контакты для связи: <StyledLink>yarushina.arisha@mail.ru</StyledLink></StyledText>
    </FooterWrap>
)