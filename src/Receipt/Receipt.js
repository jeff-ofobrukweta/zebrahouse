import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Print from '../image/print.svg';
import ReactToPrint from "react-to-print";
import Printreceipt from '../Printreceipt/Printreceipt';
import './Receipt.css';

class Receipt extends Component {
    constructor(){
        super();
}

  render() {
    return (
    <div className="receipt-wrapper" style={{zIndex:'999'}}>
      <div className="Receipt">
        <Printreceipt/>
      </div>
      <div className="receipt-parent-background">
      </div>
      </div>
    );  
  }
}

export default Receipt;