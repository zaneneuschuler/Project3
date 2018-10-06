import React, { Component } from "react";
import styled from 'react-emotion';
import Header from "../../components/Header/Header";

const AboutWrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
});


class About extends Component {


    render() {
        return (
            <div>
                <AboutWrapper>
                    <Header />

                    {/* <Jumbotron />

                    <List /> */}
                        
                </AboutWrapper>
            </div>
        );
    }
}

export default About;