import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Title = styled.div`
  font-size: 56px;
`;

const ButtonContainer = styled.div`
  margin: 12px auto 16px;
`;

const AlgoButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 40px;
  margin: 0 15px 15px 0;
  outline: none;
  border: none;
  border-radius: 6px;
  height: 150px;
  line-height: 40px;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
`;

const resetData = () => ({ type: "CONTROLS/RESET_DATA" });

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    dispatch(resetData());
    navigate(path);
  }, [path]);

  return (
    <>
      <Title>Сортировки</Title>
      <ButtonContainer>
        <AlgoButton
          color={"#D79922"}
          onClick={() => setPath("sort/bubblesort")}
        >
          Пузырьком
        </AlgoButton>
        <AlgoButton
          color={"#D79922"}
          onClick={() => setPath("sort/insertionsort")}
        >
          Вставками
        </AlgoButton>
        <AlgoButton
          color={"#D79922"}
          onClick={() => setPath("sort/selectionsort")}
        >
          Выбором
        </AlgoButton>
        <AlgoButton color={"#D79922"} onClick={() => setPath("sort/quicksort")}>
          Быстрая
        </AlgoButton>
      </ButtonContainer>
      <Title>Поиск</Title>
      <ButtonContainer>
        <AlgoButton color={"#F13C20"} onClick={() => setPath("search/linearsearch")}>
          Линейный
        </AlgoButton>
        <AlgoButton color={"#F13C20"} onClick={() => setPath("search/binarysearch")}>
          Бинарный
        </AlgoButton>
        <AlgoButton
          color={"#F13C20"}
          onClick={() => setPath("search/interpolationsearch")}
        >
          Интерполирующий
        </AlgoButton>
      </ButtonContainer>
      <Title>Хэш-таблицы</Title>
      <ButtonContainer>
        <AlgoButton color={"#4056A1"} onClick={() => setPath("/")}>
          1
        </AlgoButton>
        <AlgoButton color={"#4056A1"} onClick={() => setPath("/")}>
          2
        </AlgoButton>
        <AlgoButton color={"#4056A1"} onClick={() => setPath("/")}>
          3
        </AlgoButton>
      </ButtonContainer>
      <Title>Деревья</Title>
      <ButtonContainer>
        <AlgoButton color={"#C5CBE3"} onClick={() => setPath("/")}>
          1
        </AlgoButton>
        <AlgoButton color={"#C5CBE3"} onClick={() => setPath("/")}>
          2
        </AlgoButton>
        <AlgoButton color={"#C5CBE3"} onClick={() => setPath("/")}>
          3
        </AlgoButton>
      </ButtonContainer>
    </>
  );
};
export default MainPage;
