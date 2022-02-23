import { Component } from 'react';

class TestClassComponent extends Component {
    // static defaultProps = {
    //     label: 'Default label text'
    // }
    // 
    state = {
        count: 0
    }

    handelClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handelClickDecrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        const { label } = this.props;
        const { count } = this.state;
        return (<div>
            <h1>{label}</h1>
            {count}
            <button onClick={this.handelClick}>increase</button>
            <button onClick={this.handelClickDecrease}>decrease</button>
        </div>)
    }
};

TestClassComponent.defaultProps = {
    label: 'Default label text'
};


export default TestClassComponent;