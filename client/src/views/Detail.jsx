import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductContext";

export default function Detail() {
  const { id } = useParams();
  const { product, getProductById } = useContext(ProductsContext);
  useEffect(() => {
    getProductById(id);
  }, [id]);
  return     <div key={product.id} className="col-md-4">
  <div className="card mb-4 shadow-sm">
  <img src={product.image} className="bd-placeholder-img card-img-top" alt={product.name} />
  <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-secondary">View</Link>
          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
      </div>
      <small className="text-muted">${product.price}</small>
      </div>
  </div>
  </div>
</div>
    ;
}
