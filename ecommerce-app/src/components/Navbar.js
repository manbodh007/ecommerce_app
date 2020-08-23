import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showProductForm} from '../actions';


function mapStateToProps(state) {
    return {
      other:state.other,
    };
  }

class Navbar extends Component {

    constructor(props){
         super(props);
    }

    showForm = ()=>{
      let value = 'flex';
      this.props.dispatch(showProductForm(value));
    }


    render() {
        const {other} = this.props;
        console.log('navber rendering...');
        console.log('other',other);

        return (
            <div className = 'navbar'>
                <div className = 'app-name'>
                   E-Seller
                </div>
                <div>
                 <button className = 'nav-btn'>Products</button>
                </div>
                <div>
                  <button  className = 'nav-btn' onClick = {this.showForm}> Add Product</button>
                </div>
                <div className = 'user-profile'>
                    <img src='https://www.flaticon.com/premium-icon/icons/svg/2202/2202112.svg'/>
                    <img style={{marginLeft:40}}src = 'https://image.flaticon.com/icons/svg/2036/2036879.svg'/>
                    <span className='cart-item'>{other.cart_item}</span>
                </div>
                
            </div>
        );
    }
}


export default connect(mapStateToProps)(Navbar);