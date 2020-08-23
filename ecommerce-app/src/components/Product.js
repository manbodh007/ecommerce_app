import React, { Component } from "react";
import { connect } from "react-redux";
import Form from './Product_form';
import { fetchProducts ,updateCartValue,deleteProducts, editProduct,sortProduct} from "../actions";


function mapStateToProps(state) {
  return {
    products:state.products,
    other:state.other,
  };
}

class Product extends Component {
  constructor(props){
    super(props);

    
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

 handleAddToCartBtn = ()=>{
  
   const {other} = this.props;
   
   this.props.dispatch(updateCartValue(other.cart_item+1));
 }

 handleDeleteBtn = (e)=>{
  
   let items = this.props.products.filter(item=>item!=e);
   this.props.dispatch(deleteProducts(items));
   alert('one item deleted');
 }
 handleEditBtn = (item)=>{
    console.log('item',item)
    this.props.dispatch(editProduct(item));
 }

 sortProducts= ()=>{
   const { products,other} = this.props;
   
   
   console.log('sorted',products);
   let i=1;
   products.map((item)=>item.id = i++);

   if(!other.sorted){
      products.sort((a,b)=>a.price - b.price);
      this.props.dispatch(sortProduct(true));
   }else{
     this.props.dispatch(sortProduct(false));
     this.props.dispatch(fetchProducts());
   }
  
 }



  render() {
    console.log("product rendering...");
    console.log("prop", this.props);
    const { products , other} = this.props;

    
    console.log("product", products);

    return (
       <div>
        <Form/>
        <button className = 'sort-btn' onClick = {this.sortProducts}>Sort</button>
        {
          other.sorted==true?<span><img className = 'unsort-btn' onClick = {this.sortProducts} src="https://img.icons8.com/flat_round/64/000000/delete-sign.png"/></span>:<span></span>
        }
        <div className="product-container">
        {products.map((item) => (
          <div className="product-item" key={item.id}>
            <div className="product-img">
              <img src={item.image} />
            </div>
            <div className="product-detail">
              <div className="product-name">{item.name}</div>
              <div className="product-price">Price:{item.price}</div>
              <div className="product-rating">Rating {item.rating}</div>
            </div>

            <div>
              <div className="product-info">{item.info}</div>
              <div className="product-action">
                <button>
                  <img src="https://image.flaticon.com/icons/svg/595/595579.svg" onClick = {()=>{this.handleEditBtn(item)}}/>
                </button>
                <button onClick = {()=>{this.handleDeleteBtn(item)}}>
                  <img src="https://image.flaticon.com/icons/svg/3143/3143497.svg" />
                </button>
                <button onClick = {this.handleAddToCartBtn}>
                    <img src = 'https://www.flaticon.com/premium-icon/icons/svg/2816/2816012.svg'/>
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
     
    );
  }
}

export default connect(mapStateToProps)(Product);
