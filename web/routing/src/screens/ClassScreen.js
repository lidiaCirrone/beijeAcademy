import React, { Component } from "react";
import withRouter from "../wrapRoutingClass/withNavigation";

class ClassScreen extends Component {

    goTo = (e) => {

        this.props.router.navigate('/', {
            state: {
                id: 5,
                name: 'roberto',
                cc: '5656 76483 92347 3847'
            }
        });
    }

    render() {
        console.log('props router', this.props)
        return (
            <>
                <p>
                    <button onClick={this.goTo}>GoTo</button>
                </p>
                <p>
                    {
                        this.props?.router.location.state.name
                    }
                </p>
            </>
        )
    }
}

export default withRouter(ClassScreen);