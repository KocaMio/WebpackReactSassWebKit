import '../style/style.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SubApp from './subApp.jsx';

class App extends Component {
    componentDidMount () {
        console.log('I am mounted');
    }

    render () {
        return (
            <div className="hello">221fffdfef12f
                <SubApp />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("mount_point"));

if (module.hot) {
    module.hot.accept();
}