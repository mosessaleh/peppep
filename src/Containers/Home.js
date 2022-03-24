import React from "react";
import MyNav from "../Components/nav/MyNav";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <MyNav />
                <h1>Home</h1>
            </div>
        )
    }
}