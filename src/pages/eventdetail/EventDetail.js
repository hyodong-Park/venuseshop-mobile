import Headers from '../../components/Header';
import Footer from '../../components/Footer';
import React from "react";

function EventDetail() {

    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    return (
        <div>
            event detail page<br />
            {id}
        </div>
    );
}

export default EventDetail;