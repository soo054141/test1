import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Main from "./pages/main";
import Result from "./pages/result";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
