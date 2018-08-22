import React, { Component } from 'react';
import Profile from '../image/apparel-boutique-colors-135620.jpg';
import './Navbar.css';

class Navbar extends Component {
    constructor(props){
      super(props);
      this.state={
          addTransaction:false
      }
      this.handleAddtransaction = this.handleAddtransaction.bind(this);
    }

    handleAddtransaction(event){
        event.preventDefault();
        this.setState(prevState1 => ({
          addTransaction: !prevState1.addTransaction
        }));
    }
  render() {
    const addTransactionarray =[];
    if(this.state.addTransaction==true){
      addTransactionarray.push('modal-box-for-transaction');
    }else
    {
      addTransactionarray.push('modal-box-for-transaction-none');
    }
    return (
      <div className="Navbar">
      <ul className="first-navbar">
      <li><a class="active" href="#home"><b>Transaction</b></a></li>
      <li><a href="#news"><b>Sort:</b>Newest</a></li>
      <li style={{marginLeft: '30%',position:'relative'}}><a href="#contact"><input type="text" placeholder="Search" className="search-bar-top-right"/></a></li>
      <li><a href="#about"><small>About</small></a></li>
      <li><a href="#about"><img src={Profile} alt="profilepics" className="circle-icon" style={{borderRadius: '50%',background:"#eee",width:"50px",height:"50px"}}/></a></li>
    </ul>
    <ul className="second-navbar">
      <li><a class="active" href="#home"><div className="borderbottom" style={{fontSize:'22px'}}><b>All</b></div></a></li>
      <li><a href="#news"><b>Old</b></a></li>
      <li><a href="#about"><b>New</b></a></li>
      <li  style={{marginLeft: '32%',position:'relative'}}><a href="#about"><input type="submit" onClick={this.handleAddtransaction}  value="ADD TRANSACTION" className="blue-submit" style={{
        width: '150px',
        height: '35px',
        outline: 'none',
        border: 'none',
        borderRadius: '3px',
        background:'#187be4',
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#fff',
      }}/></a></li>
    </ul>
    <div className={addTransactionarray} id={this.props.array}>
    <div class="split-modal-add left-modal-add">
          <input type="text"/>
    </div>

    <div class="split-modal-add right-modal-add">
    <span class="close-action">&times;</span>
      <div class="centered-modal-add">
        <img src="img_avatar.png" alt="Avatar man"/>
        <h2>John Doe</h2>
        <p>Some text here too.</p>
      </div>
    </div>
    </div>
      </div>
    );
  }
}

export default Navbar;
