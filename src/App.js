import { Route, Routes, useRoutes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DetailsPage from "./pages/details";
import Login from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/details/:user_id" element={<DetailsPage />} />

      </Routes>
    </BrowserRouter>
  )
};
export default App;