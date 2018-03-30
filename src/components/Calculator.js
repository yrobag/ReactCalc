import React from 'react';
import Button from "./Button";
import Screen from "./Screen";


class Calculator extends React.Component {


    static Buttons = [
        {sign: '1', isNumber: true},
        {sign: '2', isNumber: true},
        {sign: '3', isNumber: true},
        {sign: '+', isNumber: false},
        {sign: '4', isNumber: true},
        {sign: '5', isNumber: true},
        {sign: '6', isNumber: true},
        {sign: '-', isNumber: false},
        {sign: '7', isNumber: true},
        {sign: '8', isNumber: true},
        {sign: '9', isNumber: true},
        {sign: '*', isNumber: false},
        {sign: '0', isNumber: true},
        {sign: 'C', isNumber: false},
        {sign: '=', isNumber: false},
        {sign: '/', isNumber: false},
    ];

    constructor(){
        super();

        this.state = {
            display: 0,
            memory: '',
            wasNumber: false
        };

        this.receiveClick = this.receiveClick.bind(this);
    }

    receiveClick(click){
        let display, memory, wasNumber;
        if(click) {

            if(!this.state.wasNumber && !click.isNumber){
                return;
            }

            if (click.sign === '=') {
                let result = eval(this.state.memory);
                display = result === undefined ? 0 : result;
                memory = '';
                wasNumber = false;
            } else if(click.sign === 'C'){
                display = 0;
                memory = '';
                wasNumber = false;
            } else {
                if(this.state.wasNumber === true && click.isNumber === true){
                    display = this.state.display + click.sign;
                }else {
                    display = click.isNumber === true ? click.sign : this.state.display;
                }
                memory = this.state.memory + click.sign;
                wasNumber = click.isNumber;

            }

            this.setState({
                display: display,
                memory: memory,
                wasNumber: wasNumber
            });
        }
    }


    render() {
        let buttons = Calculator.Buttons.map((button, key)=>{
            return<span><Button sign={button.sign} isNumber={button.isNumber} receiveClick={this.receiveClick}/></span>

        });
        return(
            <div className={'container'}>
                <Screen value={this.state.display}/>
                <div className='buttons-container'>
                    {buttons}
                </div>
            </div>
        );
    }

}

export default Calculator;

