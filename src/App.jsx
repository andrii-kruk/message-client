import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("./pages/MainPage/MainPage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage.jsx"));

import { Layout, Loader } from "./pages/components/index.js";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
