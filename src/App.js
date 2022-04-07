import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Nav";
import Error from "./pages/errorPage";
import LoadingSpinner from "./components/LoadingSpinner";

const Main = lazy(() => import("./pages/main"));
const Result = lazy(() => import("./pages/result"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<Result />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
