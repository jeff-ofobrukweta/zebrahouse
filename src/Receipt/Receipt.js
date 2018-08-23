import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Print from '../image/print.svg';
import './Receipt.css';

class Receipt extends Component {
    constructor(){
        super();
        
        this.handleprint = this.handleprint.bind(this);
      }

      handleprint(){
        window.print();
      }

  render() {
    return (
    <div className="receipt-wrapper" style={{zIndex:'999'}}>
      <div className="Receipt">
                <div className="right-div">
                    <div className="middle-position-card">
                        <div style={{borderBottom: '2px solid rgb(228, 228, 228)'}}>
                            <div><b>Customer Receipt</b></div>
                            <div className="flex-container">
                                <small>Customer Receipt</small>
                                <small className="print"><img src={Print} onClick={this.handleprint} alt="print"/></small>
                            </div>
                            <div className="table-content">
                            <table style={{
                                fontSize: '13px',
                                margin: '-8% -3% -1% !important'
                            }}>
                                <tr>
                                <th className="th-part"></th>
                                <th className="th-part"></th>
                                </tr>
                                <tr>
                                <td className="td-part">Receipt Id</td>
                                <td className="td-part">145643567544678</td>
                                </tr>
                                <tr>
                                <td className="td-part">Date</td>
                                <td className="td-part">2018/05/19</td>
                                </tr>
                                <tr>
                                <td className="td-part">Custormers Name</td>
                                <td className="td-part">Ofobrukweta Oghenerukevwe jeff</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        <div style={{borderBottom: '2px solid rgb(228, 228, 228)'}}>
                        <div className="flex-container">
                            <small>Customer Receipt</small>
                            <small className="print">Print</small>
                        </div>
                        <div className="table-content">
                        <table style={{fontSize: '13px',margin: '-3%',marginBottom:'-1%'}}>
                            <tr>
                            <th className="th-part"></th>
                            <th className="th-part"></th>
                            </tr>
                            <tr>
                            <td className="td-part">Item(s)/service</td>
                            <td className="td-part"><small>307 Gentleman's Pedicure</small></td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <div>
                        <div className="flex-container">
                            <small style={{width:'114%'}}>Total</small>
                            <small className="print" style={{width: '12%'}}>$4000</small>
                        </div>
                    </div>
                    </div>
                </div>
      </div>
      <div className="receipt-parent-background">
      </div>
      </div>
    );  
  }
}

export default Receipt;