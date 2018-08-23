import React, { Component } from 'react';
import './Table.css';
import Navbar from '../Navbar/Navbar';

class Table extends Component {
  constructor(){
    super();
    this.state={
        addView:false
    }
    this.handleView = this.handleView.bind(this);
  }

  componentWillUpdate(){
    const modal = document.querySelector('.receipt-parent-background');

      window.onclick=((event)=>{
        if(this.state.addView === true){
          console.log(">>>>",this.state.addView,event.target);
      
          if(event.target === modal || event.target === document.querySelector('.Receipt')){
               modal.style.display = 'none';
               document.querySelector('.Receipt').style.display = "none";    
               this.setState({addView:false});      
          }
          
        }
       
     })
  }

  handleView=()=>{
    if(this.state.addView===false){
      console.log(this.state.addView)
      document.querySelector('.receipt-wrapper').style.display = 'block';
      this.setState({addView:true});
    }
  
}
  render() {
    const addviewionarray =[];
   
    return (
      <div className="Table">
        <Navbar array={addviewionarray}/>
      <table>
      <tr>
        <th></th>
        <th>Item/Service</th>
        <th>Reciept ID</th>
        <th>Qty</th>
        <th>Discount</th>
        <th>Price</th>
        <th>User</th>
        <th>Type</th>
        <th>Date</th>
        <th></th>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" onClick={this.handleView} value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>307 Gentleman's Pedicure</td>
        <td>145643567544678</td>
        <td>3</td>
        <td>N50</td>
        <td>N5,000</td>
        <td>Tracy CHB</td>
        <td>Service</td>
        <td>2018/05/19</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
    </table>
      </div>
    );
  }
}

export default Table;
