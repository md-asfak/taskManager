import React from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Update from "../Components/Update";

function Router() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default Router;
