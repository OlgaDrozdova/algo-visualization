import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Title = styled.div`
  font-size: 64px;
  font-weight: 800;
  text-decoration: underline;
  margin-bottom: 40px;
`;

const SubTitle = styled.div`
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
      <Title>Учим алгоритмы наглядно</Title>
      <SubTitle>Сортировки</SubTitle>
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
      <SubTitle>Поиск</SubTitle>
      <ButtonContainer>
        <AlgoButton
          color={"#F13C20"}
          onClick={() => setPath("search/linearsearch")}
        >
          Линейный
        </AlgoButton>
        <AlgoButton
          color={"#F13C20"}
          onClick={() => setPath("search/binarysearch")}
        >
          Бинарный
        </AlgoButton>
        <AlgoButton
          color={"#F13C20"}
          onClick={() => setPath("search/interpolationsearch")}
        >
          Интерполирующий
        </AlgoButton>
      </ButtonContainer>
      <SubTitle>Хэш-таблицы</SubTitle>
      <ButtonContainer>
        <AlgoButton color={"#4056A1"} onClick={() => setPath("hash-table/open-addressing")}>
          С открытой адресацией
        </AlgoButton>
        <AlgoButton color={"#4056A1"} onClick={() => setPath("hash-table/closed-addressing")}>
          С закрытой адресацией
        </AlgoButton>
      </ButtonContainer>
      <SubTitle>Ориентированные графы</SubTitle>
      <ButtonContainer>
        <AlgoButton color={"#C5CBE3"} onClick={() => setPath("graph/breadth-first")}>
          Поиск в ширину
        </AlgoButton>
        <AlgoButton color={"#C5CBE3"} onClick={() => setPath("graph/depth-first")}>
          Поиск в глубину
        </AlgoButton>
        <AlgoButton color={"#C5CBE3"} onClick={() => setPath("graph/dijkstra")}>
          Алгоритм Дейкстры
        </AlgoButton>
      </ButtonContainer>
    </>
  );
};
export default MainPage;
