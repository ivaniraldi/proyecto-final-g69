import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});


    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    };

    const getProductById = async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() =>{
        getProducts();
    }, []);

    

    return (
        <ProductsContext.Provider value={{products, getProductById, product}}>
          {children}
        </ProductsContext.Provider>
      );
    
}

export default ProductsProvider;