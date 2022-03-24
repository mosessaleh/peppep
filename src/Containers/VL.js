import React from "react";
import MyNav from "../Components/nav/MyNav";
import {Container} from 'react-bootstrap'
import axios from 'axios'

export default class VL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <MyNav />
                <Container>
                    <center>
                        <br />
                        <h1>VOGNLØB</h1>
                        <hr />
                    </center>
                    
                </Container>
            </div>
        )
    }
}