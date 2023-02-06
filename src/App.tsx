import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SortPage from "./pages/SortPage";
import SearchPage from "./pages/SearchPage";
import HashTablePage from "./pages/HashTablePage";
import GraphPage from "./pages/GraphPage";

function App() {
  const AppContainer = styled.div`
    margin: 20px;
  `;

  return (
    <AppContainer>
      <Router>
        <Routes>
        <Route path="/" element={<MainPage />}/>
            <Route path="sort/:id" element={<SortPage />} />
            <Route path="search/:id" element={<SearchPage />} />
            <Route path="hash-table/:id" element={<HashTablePage />} />
            <Route path="graph/:id" element={<GraphPage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
