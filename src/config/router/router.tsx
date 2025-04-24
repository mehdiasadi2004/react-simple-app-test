import IndexPage from "@/pages";
import DetailPage from "@/pages/detail";
import {
  Routes,
  Route,
} from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DetailPage />} path="/detail/:id" />
    </Routes>
  );
};

export default AppRouter;
