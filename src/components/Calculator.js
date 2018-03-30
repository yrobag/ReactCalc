import React from 'react';
import Button from "./Button";
import Screen from "./Screen";


class Calculator extends React.Component {

    constructor(){
        super();

        this.state = {
            display: 0,
            memory: '',
            wasNumber: '0'
        };

        this.receiveClick = this.receiveClick.bind(this);
    }

    receiveClick(click){
        let display, memory, wasNumber;
        if(click) {
            if (click.sign === '=') {
                display = eval(this.state.memory);
                memory = '';
                wasNumber = '0';
            } else if(click.sign === 'C'){
                display = 0;
                memory = '';
                wasNumber = '0';
            } else {
                if(this.state.wasNumber === '1' && click.isNumber === '1'){
                    display = this.state.display + click.sign;
                }else {
                    display = click.isNumber === '1' ? click.sign : this.state.display;
                }
                memory = this.state.memory + click.sign;
                wasNumber = click.isNumber === '1' ? '1' : '0';

            }

            this.setState({
                display: display,
                memory: memory,
                wasNumber: wasNumber
            });
        }
    }


    render() {
        return(
            <div>
                <Screen value={this.state.display}/>
                <div>
                    <Button sign="1" isNumber="1" receiveClick={this.receiveClick}/>
                    <Button sign="2" isNumber="1" receiveClick={this.receiveClick}/>
                    <Button sign="3" isNumber="1" receiveClick={this.receiveClick}/>
                    <br/>
                    <Button sign="4" isNumber="1" receiveClick={this.receiveClick}/>
                    <Button sign="5" isNumber="1" receiveClick={this.receiveClick}/>
                    <Button sign="6" isNumber="1" receiveClick={this.receiveClick}/>
                    <br/>
                    <Button sign="7" isNumber="1" receiveClick={this.receiveClick}/>
                    <Button sign="8" isNumber="1" receiveClick={this.receiveClick}/>
                    <Button sign="9" isNumber="1" receiveClick={this.receiveClick}/>
                    <br/>
                    <Button sign="+" isNumber="0" receiveClick={this.receiveClick}/>
                    <Button sign="-" isNumber="0" receiveClick={this.receiveClick}/>
                    <Button sign="*" isNumber="0" receiveClick={this.receiveClick}/>
                    <br/>
                    <Button sign="/" isNumber="0" receiveClick={this.receiveClick}/>
                    <Button sign="=" isNumber="0" receiveClick={this.receiveClick}/>
                    <Button sign="C" isNumber="0" receiveClick={this.receiveClick}/>
                </div>
            </div>
        );
    }

}

export default Calculator;

