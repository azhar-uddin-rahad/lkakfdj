import React, { useState } from "react";
import ShopCollection from "./Pages/ShopCollection/ShopCollection";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<ShopCollection></ShopCollection>}
        ></Route>
        <Route
          path="/product-details"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/cartpage"
          element={<CartPage></CartPage>}
        ></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
