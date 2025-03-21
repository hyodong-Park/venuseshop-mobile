import Headers from '../../components/Header';
import Footer from '../../components/Footer';
import React from "react";

function BrandPage() {

    const queryParams = new URLSearchParams(location.search);
    const brand = queryParams.get("brand");

    return (
        <div>
            {brand} page
        </div>
    );
}

export default BrandPage;