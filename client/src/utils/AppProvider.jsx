/* eslint-disable react/prop-types */

import ProductsProvider from "../context/ProductContext";
import UserProvider from "../context/UserContext";

export default function AppProvider({ children }) {
  return (
    <ProductsProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </ProductsProvider>
  );
}