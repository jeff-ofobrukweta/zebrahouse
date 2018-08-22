import React, { Component } from 'react';
import './Pagenation.css';

class Pagenation extends Component {
  render() {
    return (
      <div className="Pagenation">
      <div class="navbar">
      <a href="#home">Show:<b>10 results<span>icon</span></b></a>
      <a href="#contact" style={{position: 'relative',left:' 34%'}}>
        <div className="pagnation-card-right-bottom">
        <div class="pagination">
        <a href="#">&laquo;Previous</a>
        <a href="#">1</a>
        <a href="#" class="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">Next&raquo;</a>
        </div>
        </div>
      </a>
    </div>
      </div>
    );
  }
}

export default Pagenation;
