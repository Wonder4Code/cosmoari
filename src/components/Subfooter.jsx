import styled from "styled-components";

const SubWrap = styled.div`
  display: flex;
  justify-content: center;
  background: #333333;
  padding: 10px;
`;

const Title = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;

export const Subfooter = () => (
    <SubWrap>
      <Title>made by @IB</Title>
    </SubWrap>
)