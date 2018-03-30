import React from 'react';


class Counter extends React.Component {

    constructor(){
        super();

        this.state = {
            counter: 0
        };

        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
    }

    addOne(){
        this.setState({
            counter: this.state.counter +  1
        });
    }
    subtractOne(){
        this.setState({
            counter: this.state.counter -  1
        });
    }


    render() {
        return(
            <div>
                <button onClick={this.addOne}>+</button>
                <button onClick={this.subtractOne}>-</button>
                <div>{this.state.counter}</div>
            </div>
        );
    }

}

export default Counter;

