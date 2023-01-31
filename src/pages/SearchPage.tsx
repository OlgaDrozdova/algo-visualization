import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import RenderElementsInput from "../components/RenderElementsInput";
import styled from "styled-components";
import CodeText from "../components/CodeText";
import { bubbleSortCode, bubbleSortText } from "../common/algoText";
import SortingSpeed from "../components/SortingSpeed";
import { useParams } from "react-router-dom";
import { createRandomArray, selectAlgoProps } from "../helpers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlgoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContainerInput = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const ButtonRun = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 20px;
  outline: none;
  border: none;
  border-radius: 6px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  background-color: #f13c20;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
`;

const NumbersInput = styled.input`
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  padding: 0 20px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  width: 73%;
  height: 40px;
  margin-right: 30px;
`;

const AlgoText = styled.div`
  text-align: justify;
  width: 50%;
  margin: 13px 0;
  padding-left: 30px;
  white-space: pre-wrap;
`;

const CodeTextCustom = styled.div`
  width: 50%;
`;

const RandomLink = styled.a`
  cursor: pointer;
  color: #f13c20;
  font-weight: 800;
`;

const resetArray = (array: number[], searchItem: number) => ({
  type: "CONTROLS/RESET_SEARCH",
  array,
  searchItem,
});

const SearchPage: React.FC = () => {
  const params = useParams();
  const sortId = params.id || "";

  const algoProps = selectAlgoProps(sortId);

  const dispatch = useDispatch();
  const inputArrayRef = useRef<HTMLInputElement>(null);
  const inputSearchItemRef = useRef<HTMLInputElement>(null);
  const [errorText, setErrorText] = useState<string>();
  const [isError, setIsError] = useState<boolean>(false);

  const inputRandom = () => {
    inputArrayRef.current.value = createRandomArray();
  };

  const createArray = () => {
    const regTest = /^[1-9][0-9;,\s]/g;
    if (!inputArrayRef.current?.value) {
      setErrorText("Введите числа для сортировки");
      setIsError(true);
    } else if (!regTest.test(inputArrayRef.current.value)) {
      setErrorText(
        "В введенных значениях использованы недопустимые символы. Используйте только числа, запятые, пробелы и точки с запятой"
      );
      setIsError(true);
    } else {
      //13,3,70,81,27,67,79,57,43,30,32,50,9,91,7,2,17,60,90
      //100 numbers
      //4039, 7151, 7022, 1657, 5721, 2927, 2446, 9425, 9416, 8660, 3802, 2066, 9660, 7177, 947, 5334, 3476, 7919, 7900, 7807, 8227, 5421, 2474, 5521, 8807, 9589, 4148, 4593, 8967, 3784, 9398, 3089, 1707, 4118, 9299, 6054, 6471, 2218, 4484, 8920, 2213, 2110, 7833, 6108, 4392, 8628, 3386, 7522, 8377, 8484, 9509, 4866, 6208, 7658, 5115, 3453, 1871, 7326, 6904, 7945, 2437, 7114, 6759, 8010, 4887, 9072, 9211, 5407, 1184, 6095, 504, 3297, 921, 7425, 4235, 2420, 5172, 4569, 5275, 9699, 7275, 7779, 9579, 6677, 9663, 5571, 6814, 3958, 426, 7360, 2098, 680, 4876, 8745, 7760, 7034, 2951, 5293, 2276, 2831
      const re = /[,\s;]/g;
      const array = inputArrayRef.current.value
        .trim()
        .split(re)
        .filter(Boolean)
        .map(Number);
      console.log(
        "dddd",
        inputArrayRef.current.value.trim().split(re).map(Number)
      );
      setIsError(false);
      dispatch(resetArray(array, Number(inputSearchItemRef.current?.value)));
    }
    dispatch(algoProps.dispatchtype);
  };

  return (
    <Container>
      <div>
        Введите числа - элементы массива (не больше 100 значений). В качестве
        разделителя используйте пробел, запятую или точку с запятой. Или
        воспользуйтесь{" "}
        <RandomLink onClick={inputRandom}>РАНДОМАЙЗЕРОМ</RandomLink>.
      </div>
      <NumbersInput type="text" ref={inputArrayRef} />
      <ContainerInput>
        <div>Введите искомое значение</div>
        <NumbersInput type="text" ref={inputSearchItemRef} />
        <ButtonRun onClick={createArray}>Запустить поиск</ButtonRun>
      </ContainerInput>
      <>
        <SortingSpeed />
        <AlgoContainer>
          <CodeTextCustom>
            <CodeText codeText={algoProps.code} />
          </CodeTextCustom>
          <AlgoText>{algoProps.description}</AlgoText>
        </AlgoContainer>
        {isError ? <>{errorText}</> : <RenderElementsInput />}
      </>
    </Container>
  );
};
export default SearchPage;
