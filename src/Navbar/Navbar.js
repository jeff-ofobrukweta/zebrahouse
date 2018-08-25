import React, { Component } from 'react';
import Profile from '../image/apparel-boutique-colors-135620.jpg';
import Receipt from '../Receipt/Receipt';
import BellIcon from '../image/Bell.svg';
import AddIcon from '../image/AddIcon.svg'
import './Navbar.css';

class Navbar extends Component {
    constructor(props){
      super(props);
      this.state={
          addTransaction:false
      }
      this.handleAddtransaction = this.handleAddtransaction.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleAddtransaction(event){
        event.preventDefault();
        document.querySelector('.modal-box-for-transaction').style.display = 'block';
        document.querySelector('.add-transaction-background-shadow').style.display = 'block';
    }
    handleCloseModal(event){
      event.preventDefault();
      document.querySelector('.add-transaction-background-shadow').style.display = 'none';
    }

  render() {
    return (
      <div className="Navbar">
        <div className="parent-top-Nav-wrapper">
          <ul className="first-navbar">
            <li><a class="active" href="#home"><b className="left-header-topic">Transaction</b></a></li>
            <li><a href="#news"><b>Sort:</b>Newest</a></li>
            <li><a href="#"></a></li>
            <li><a href="#contact"><input type="text" placeholder="Search" className="search-bar-top-right"/></a></li>
            <li><a href="#about"><small>
              <div className="icon-wrapper-bell" style={{position: 'relative',width: '21px'}}>
              <img style={{width:' 25px',position:' relative',left:' 114%',width: '21px'}} src={BellIcon} alt="icon-notification"/>
              <div className="notification-count">22</div>
              </div></small></a>
            </li>
            <li><a href="#about"><img src={Profile} alt="profilepics" className="circle-icon" style={{borderRadius: '50%',background:"#eee",width:"50px",height:"50px",marginTop:"-13px"}}/></a></li>
          </ul>
      </div>
          <ul className="second-navbar">
            <li><a class="active" href="#home"><div className="isActive" style={{fontSize:'22px'}}><b>All</b></div></a></li>
            <li><a href="#news"><b>Old</b></a></li>
            <li><a href="#about"><b>New</b></a></li>
            <li className="button-addtransaction"><a href="#addTransaction"> <button onClick={this.handleAddtransaction} className="blue-submit"  style={{
              width: '150px',
              height: '35px',
              outline: 'none',
              border: 'none',
              borderRadius: '3px',
              background:'#187be4',
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#fff',
            }}> <img src={AddIcon}/> ADD TRANSACTION</button> </a></li>
          </ul>
    <Receipt/>

<div className="add-transaction-background-shadow ">
    <div className="modal-box-for-transaction">
    <section class="split-modal-add left-modal-add">
          <form style={{margin: '0px 17%'}}>
          <div style={{margin:'5.15% 0',fontSize:' 20px',color:'#1a7be4'}}>Add New</div>
          <div>
            <small className="label">Type</small>
          </div>
          <input type="text" className="modal-input-select" placeholder="Transaction" style={{width: '331px'}}/>
          <div>
            <small className="label">item/Service</small>
          </div>
          <input type="text" className="modal-input-select" placeholder="Select Item/Service" style={{width: '331px'}}/>
          <div>
            <small className="label">Name of Custormer</small>
          </div>
          <input type="text" className="modal-input-select" placeholder="Guest"style={{width: '331px'}}/>
          <div>
           <small className="label">Amount</small>
          </div>
          <input type="text" className="modal-input-select" placeholder="N0,000" style={{width: '331px'}}/>
          </form>
    </section>

    <section class="split-modal-add right-modal-add">
    <span class="close-action" onClick={this.handleCloseModal}  >&times;</span>
          <form style={{margin: '4.67em 0em'}}>
          <div>
            <small className="label">Quantity</small>
          </div>
          <input type="text" className="modal-input-select" placeholder="0" style={{width: '331px'}}/>
          <div>
            <small className="label">Mode of Payment</small>
          </div>
          <input type="text" className="modal-input-select"  placeholder="Cash" style={{width: '331px'}}/>
          <div>
          <small className="label">Card Code</small>
          </div>
          <input type="text" className="modal-input-select" placeholder="Card" style={{width: '331px'}}/>
           <div>
            <span>
            <input type="submit" className="button-1" value="Add"/>
            </span>
          </div>
          </form>
    </section>
    </div>
</div>
      </div>
    );
  }
}

export default Navbar;
