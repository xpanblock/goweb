﻿import React from 'react';
import ReactDOM from 'react-dom';
import Api from "../services/Api";

class AnimalListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: []
        };
        Api.fetch("/api/v1/animals").then(r => this.setState({animals: r}));

        fetch("/api/v1/animals").then(r => {
            console.log(r.json().then(j => {
                console.log(j)
            }))
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.animals.map(i => {
                        return (
                            <article key={i.id}>
                                <b>{i.name} (id: {i.id})</b>
                                <p>
                                    {i.age} years old {i.legs ? 'with' : 'without'} legs
                                </p>
                            </article>
                        )
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(<AnimalListing/>, document.getElementById("react-container"))