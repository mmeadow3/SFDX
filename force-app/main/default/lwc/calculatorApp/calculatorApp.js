/* eslint-disable no-case-declarations */
import { LightningElement } from 'lwc';

export default class CalculatorApp extends LightningElement {
    value = 0; //// only for display
    firstValue = null;
    secondValue = '';
    operation;

    handleClear(){
        this.value = null;
        this.firstValue = null;
        this.secondValue = '';
        this.operation = null;
    }

    handleEquals(){
        switch (this.operation) {
            case '+':
                this.value = Number(this.firstValue) + Number(this.secondValue);
                // eslint-disable-next-line no-case-declarations
                let firstValue;
                let secondValue;

                if (this.firstValue % 1 !== 0){   /////check for decimal
                    firstValue = this.firstValue.toString().split('.')[1].length;
                } else {
                    firstValue = 0;
                }
                if (this.secondValue % 1 !== 0){
                    secondValue = this.secondValue.toString().split('.')[1].length;
                } else {
                    secondValue = 0;
                }
                let fixedDigits = Math.max(firstValue, secondValue);
                this.value = this.value.toFixed(fixedDigits);
                this.firstValue = this.value;
                break;
            case '-':
                this.value = this.firstValue - this.secondValue;
                this.value = this.value.toFixed(2);
                this.firstValue = this.value;
                break;
            case 'x':
                this.value = this.firstValue * this.secondValue;
                this.value = this.value.toFixed(2);
                this.firstValue = this.value;
                break;
            case '/':
                this.value = this.firstValue / this.secondValue;
                this.value = this.value.toFixed(2);
                this.firstValue = this.value;
                break;
            default:
            console.log('No operation');
        }
    }

    handleDecimal(){
        if (!this.value) {
                this.value = '0.';
                this.firstValue = '0.';
                this.secondValue = '0.';
            } else if (!this.value.includes('.')){
                this.value = this.value + '.'; 
        }

        if (this.operation && this.secondValue && !this.secondValue.includes('.')){
            this.secondValue = this.secondValue + '.';
        }
        if (this.firstValue && !this.firstValue.includes('.')) {
            this.firstValue = this.firstValue + '.';
        }    
    }

    handleNumber(event){
        event.stopPropagation();
        if (this.value === 0){
            this.value = null;
        }
       // console.log(event.target.dataset.test); /// this is just an example of adding attributes to div using data-*
        if (this.operation == null){
            if (this.value === null){
                this.value = event.target.dataset.value;
                this.firstValue = event.target.dataset.value;
            } else {
                this.firstValue = this.firstValue + event.target.dataset.value;
                this.value = this.firstValue;
            }
        }  else {
            this.secondValue = this.secondValue + event.target.dataset.value;
            this.value = this.secondValue;
       }
    }

    handleSubtract(){
        let numberInput = Number(this.refs.calcInput.value);
        this.firstValue = numberInput;
        this.secondValue = '';
        this.operation = '-';
    }

    handlePlus(){
        let numberInput = Number(this.refs.calcInput.value); //// this is passing by a custom "ref" on the HTML - this is preferred over queryselector
        this.firstValue = numberInput;
        this.secondValue = '';
        this.operation = '+';
    }

    handleMultiply(){
        let numberInput = Number(this.refs.calcInput.value);
        this.firstValue = numberInput;
        this.secondValue = '';
        this.operation = 'x';
    }

    handleDivide(){
        let numberInput = Number(this.refs.calcInput.value);
        this.firstValue = numberInput;
        this.secondValue = '';
        this.operation = '/';
    }


    ////imperatively call an Apex method
    //// break out catch logic to another file (service class) - Since all Apex errors should be handled the same from an LWC
    /// make the apex class a "Service Class"""

}