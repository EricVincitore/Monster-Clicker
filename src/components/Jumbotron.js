import React from "react";
import Header from "./Header";

function Jumbotron() {
    return (

        <div className="jumbotron jumbotron-fluid">
            <Header />

            <div className="container mt-5">
        
                <h1 className="display-4">Monster Clicker: World</h1>
                <p className="lead">Click a monster to complete its hunt. Don't hunter a monster more than once!</p>
            </div>
        </div>
    )

}

export default Jumbotron;