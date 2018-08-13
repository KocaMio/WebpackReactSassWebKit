'use strict'

import '../styles/style.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render () {
        return (
            <div className="hello">
                <span>Hello, World!</span>
                <i class="fa fa-address-card-o"></i>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("mount_point"));

if (module.hot) {
    module.hot.accept();
}