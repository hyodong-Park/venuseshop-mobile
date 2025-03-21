import Headers from '../../components/Header';
import Footer from '../../components/Footer';
import React from "react";

function ProductDetail() {

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  return (
    <div>
      product detail page<br />
      {id}
    </div>
  );
}

export default ProductDetail;