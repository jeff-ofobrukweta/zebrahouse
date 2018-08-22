import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';
import Pagenation from '../Pagenation/Pagenation';
import './Transactions.css';

class App extends Component {
  render() {
    return (
      <div className="Transactions">
      <div class="split-trans left-trans">
      <div className="parent-sidebar-container">
        <div style={{margin:'0 auto',position: 'relative'}}>
            ZEBRA HOUSE
        </div>
        <div className="sidebar-container">
           <div className="sidebar-container-item-1"><a>Dashboard</a></div>
           <div className="sidebar-container-item-2"><a>Transactions</a></div>
           <div className="sidebar-container-item-3"><a>Stock</a></div>
           <div className="sidebar-container-item-4"><a>Customers</a></div>
           <div className="sidebar-container-item-5"><a>Services</a></div>
        </div>
      </div>
    </div>
    
    <div class="split-trans right-trans">
        <Table/>
        <Pagenation/>
    </div>
      </div>
    );
  }
}

export default App;
