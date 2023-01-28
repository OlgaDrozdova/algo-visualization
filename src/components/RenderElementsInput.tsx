import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CircleEl from "./CircleEl";
import { Colors } from "../common/colorSort";
import { IArraySettings, IComparison } from "../common/reduxTypes";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RenderElementsInput: React.FC = () => {
  const { activeElements, auxiliaryElements, sortedElements } = useSelector(
    ({ comparison }) => ({
      activeElements: comparison.activeElements,
      auxiliaryElements: comparison.auxiliaryElements,
      sortedElements: comparison.sortedElements,
    }),
    shallowEqual
  );

  const array = useSelector(({ arraySettings }) => arraySettings.array);

  return (
    <Container>
      {array.map((el, index) => {
        const circleColor =
          (sortedElements.includes(index) && Colors.SORTED_COLOR) ||
          (activeElements.includes(index) && Colors.ACTIVE_COLOR) ||
          (auxiliaryElements.includes(index) && Colors.AUXILIARY_COLOR) ||
          Colors.DEFAULT_COLOR;
        return <CircleEl key={index} arrayNumber={el} color={circleColor} />;
      })}
    </Container>
  );
};

export default RenderElementsInput;
