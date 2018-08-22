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
  handleView(event){
    event.preventDefault();
    this.setState(prevState1 => ({
      addView: !prevState1.handleView
    }));
}
  render() {
    const addviewionarray =[];
    if(this.state.addView==true){
      addviewionarray.push('modal-box-for-transaction');
    }else
    {
      addviewionarray.push('modal-box-for-transaction-none');
    }
    return (
      <div className="Table">
        <Navbar array={addviewionarray}/>
      <table>
      <tr>
        <th></th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Savings</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Savings</th>
        <th>Lastname</th>
        <th>Savings</th>
        <th></th>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
        <td>Griffin</td>
        <td>$100</td>
        <td><input type="submit" onClick={this.handleView} value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
        <td>Griffin</td>
        <td>$150</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>Swanson</td>
        <td>$300</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
      <tr className="card-table">
        <td>
        <label class="container">
        <input type="checkbox"/>
        <span class="checkmark"></span>
        </label>
        </td>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>$250</td>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>$250</td>
        <td>Brown</td>
        <td>$250</td>
        <td><input type="submit" value="view" className="button-view-table"/></td>
      </tr>
    </table>
      </div>
    );
  }
}

export default Table;
