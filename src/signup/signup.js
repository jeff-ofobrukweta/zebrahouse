import React, { Component } from 'react';
import Pics from '../image/apparel-boutique-colors-135620.jpg';
import './signup.css';

class Signup extends Component {
    
  render() {
    return (
      <div>
      <div className="split left">
      <div className="centered">
      </div>
    </div>
    
    <div className="split right">
      <div className="centered">
        <section>
        <div style={{marginBottom:'5%'}}><b style={{color:'rgba(248, 19, 61, 0.94)'}}>Login</b><span style={{color:'#848282'}}> to Admin Dashboard to view stats</span></div>
        <form>
          <input type="text" placeholder="Email" className="signup-input-frontpage-1"/>
          <input type="text" placeholder="Password" className="signup-input-frontpage-2"/>
          <input type="submit" value="Proceed" className="signin"/>
        </form>
        </section>
      </div>
    </div>


    <div className="mode">
      <section className="title" style={{fontSize:"34px",padding: '20% 15%',color:'#fff'}}>
        <div>Welcome to Zebrahouse</div>
        <div>Admin Dashboard</div>
      </section>

    <div className="flex-footer-container" style={{color:'#fff'}}>
      <div className="flex-item-1">
        <div>copyright 2018.Zebrahouse</div>
      </div>
      <div className="flex-item-2">
        <div className="flex-item-inner-1">About</div>
        <div className="flex-item-inner-2">Terms</div>
        <div className="flex-item-inner-3">Policy</div>
      </div>
    </div>
    </div>
    </div>
    );
  }
}

export default Signup;
