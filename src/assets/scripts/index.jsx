import '../style/style.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render () {
        return (
            <div className="hello">
                <span>Hello, World!</span>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("mount_point"));

if (module.hot) {
    module.hot.accept();
}