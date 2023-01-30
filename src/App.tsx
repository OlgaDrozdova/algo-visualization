import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SortPage from "./pages/SortPage";
import SearchPage from "./pages/SearchPage";

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
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
