import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SortPage from "./pages/SortPage";

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
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
