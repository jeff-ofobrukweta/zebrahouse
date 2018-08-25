import React, { Component } from 'react';
import Print from '../image/print.svg';
class Printreceipt extends Component {
    constructor(){
        super();
        this.handleprint = this.handleprint.bind(this);
    }
    handleprint(){
        window.print();
      }
  render() {
    return (
      <div className="Printreceipt">
            <div className="right-div">
            <div className="middle-position-card">
                <div style={{borderBottom: '2px solid rgb(228, 228, 228)'}}>
                    <div><b>Customer Receipt</b></div>
                    <div className="flex-container">
                        <small>Customer Receipt</small>
                        <small className="print"><img src={Print} onClick={this.handleprint} alt="print" className="print-icon"/></small>
                    </div>
                    <div className="table-content">
                    <table className="table-recept" style={{
                        fontSize: '13px',
                        margin: '-8% -3% -1% !important'
                    }}>
                        <tr>
                        <th className="th-part"></th>
                        <th className="th-part"></th>
                        </tr>
                        <tr>
                        <td className="td-part">Receipt Id:</td>
                        <td className="td-part">145643567544678</td>
                        </tr>
                        <tr>
                        <td className="td-part">Date:</td>
                        <td className="td-part">2018/05/19</td>
                        </tr>
                        <tr>
                        <td className="td-part">Custormers Name:</td>
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
                <table className="table-recept" style={{fontSize: '13px',margin: '-3%',marginBottom:'-1%'}}>
                    <tr>
                    <th className="th-part"></th>
                    <th className="th-part"></th>
                    </tr>
                    <tr>
                    <td className="td-part">Item(s)/service:</td>
                    <td className="td-part">307 Gentleman's Pedicure</td>
                    </tr>
                </table>
                </div>
            </div>
            <div>
                <div className="flex-container">
                <tr>
                <th className="th-part">Total</th>
                <th className="th-part">$4000</th>
                </tr>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Printreceipt;










