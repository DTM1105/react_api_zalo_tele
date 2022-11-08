import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './containers/Header/Header'
import Receive_sms from './Receive_sms/Receive_sms';
import Send_sms from './Send_sms';

class System extends Component {
    constructor(props) {
        super(props);
        this.state = {
            systemMenuPath:'/send'
        };
      }
    render() {
        const { systemMenuPat } = this.state.systemMenuPath;
        return (
            <React.Fragment>
            {<Header />}
            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        <Route path="/send" component={Send_sms} />
                        <Route path="/receive" component={Receive_sms} />
                        <Route component={() => { return (<Redirect to={systemMenuPat} />) }} />
                    </Switch>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
