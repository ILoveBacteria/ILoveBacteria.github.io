import React from "react";
import {Repository} from "./repository/Repository";
import '/resources/scss/styles.scss'
import {Info} from "./info/Info";
import {P} from "../../utils/tags";


export let Github = () => {
    let style = {
        backgroundColor: '#24292e',
    }
    const githubStyle = {
        background: 'linear-gradient(to right, #6f86d6, #48c6ef)',
        fontSize: '4rem',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }

    return (
        <section id="github" className="mb-5" style={style}>
            <div className="d-flex justify-content-around align-items-center flex-wrap pt-4 container">
                <div>
                    <h2 className="fw-bold" style={githubStyle}>GitHub</h2>
                    <p className="mb-4" style={{color: 'rgb(173, 186, 199)'}}>
                        Here you can find my latest open source projects.
                    </p>
                    <Info/>
                </div>
                <div>
                    <Repository/>
                    <Repository/>
                    <Repository/>
                    <Repository/>
                </div>
            </div>
        </section>
    );
}
