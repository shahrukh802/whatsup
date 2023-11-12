import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import LoginPage from "./pages/login/LoginPage";
import { route } from "./utils/constants";
import HomePage from "./pages/home";
import RequireAuth from "./routes/RequireAuth";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path={route.HOME_PAGE_ROUTE} element={<HomePage />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path={route.LOGIN_PAGE_ROUTE} element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
