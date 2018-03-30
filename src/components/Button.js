import React from 'react';


class Button extends React.Component {

    constructor(){
        super();

        this.state = {
            sign: null,
            isNumber: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){

        this.setState({
            sign: this.props.sign,
            isNumber: this.props.isNumber
        });
    }


    handleClick(e){
        this.props.receiveClick(this.state)
    }


    render() {
        return(
            <button onClick={this.handleClick}>{this.state.sign}</button>
        );
    }

}

export default Button;

