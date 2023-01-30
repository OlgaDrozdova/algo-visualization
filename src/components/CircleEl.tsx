import styled from "styled-components";

const Container = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
`;

type CircleElProps = {
  arrayNumber: number;
  color: string;
};

const CircleEl: React.FC<CircleElProps> = ({ arrayNumber, color }) => {
  return <Container color={color}>{arrayNumber}</Container>;
};

export default CircleEl;
