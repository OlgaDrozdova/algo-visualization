import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  border-radius: 50%;
  line-height: 100px;
  text-align: center;
`;

type CircleElProps = {
  arrayNumber: number;
  color: string;
};

const CircleEl: React.FC<CircleElProps> = ({ arrayNumber, color }) => {
  return <Container color={color}>{arrayNumber}</Container>;
};

export default CircleEl;
