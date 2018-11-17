import './counter.scss';

const { Component } = wp.element;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
         this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h2><em>Counting up and down all day long</em></h2>
                <h2>Count: { this.state.count }</h2>
                <button onClick={ this.handleAddOne }>+1</button>
                <button onClick={ this.handleMinusOne }>-1</button>
                <button onClick={ this.handleReset }>reset</button>
            </div>
        );
    }
}


export default Counter;