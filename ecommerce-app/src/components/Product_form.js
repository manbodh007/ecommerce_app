import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showProductForm , addNewProduct,deleteProducts} from '../actions';
import ImageUploader from 'react-images-upload';


function mapStateToProps(state){
   return {
       other:state.other,
       products:state.products
   }
}



class Product_form extends Component {

    constructor(props){
        super(props);
       
        this.productName = null;
        this.productPrice = null;
        this.productImage = null;
        this.productInfo = null;
        this.productRating = 0;
        this.productId = null;

    }

    handleSubmit =(e)=>{
       alert('New Product Added');
       this.props.dispatch(showProductForm('none'));
       e.preventDefault();

    //    const {other } = this.props;
    //    const {editable} = other;

       let product;
       const {other } = this.props;
       const {editable} = other;

       if(editable){

        this.productImage = this.productImage==null? editable.image:this.productImage;
        this.productId   =  this.productId==null? editable.id:this.productId;
        this.productName = this.productName==null? editable.name:this.productName;
        this.productPrice = this.productPrice==null? editable.price:this.productPrice;
        this.productInfo = this.productInfo==null? editable.info:this.productInfo;
        this.productRating = this.productRating==0? editable.rating:this.productRating;

        //   product={
        //       id :editable.id,
        //       image:editable.image,
        //       name:editable.name,
        //       info:editable.info,
        //       ration:editable.rating,
        //   }

          product = {
            id: this.productId,
            image:this.productImage,
            name:this.productName,
            price:this.productPrice,
            info:this.productInfo,
            rating:this.productRating
         }

          let items = this.props.products.filter(item=>editable!=item);
          this.props.dispatch(deleteProducts(items));
          this.props.dispatch(addNewProduct(product));
       }else{
       product = {
           id:8,
           image:this.productImage,
           name:this.productName,
           price:this.productPrice,
           info:this.productInfo,
           rating:0,
       }
       this.props.dispatch(addNewProduct(product));
    }
      
    }
    componentDidMount(){
        console.log('component mounted')
        
    }

    saveImg = (pic)=>{
        // const target = event.target;
        console.log('picture',pic[0]);
        this.productImage = pic[0];

        
    }
    saveName = (event)=>{
        const target = event.target;
        this.productName = target.value;
       
    }
    savePrice = (event)=>{
        const target = event.target;
        this.productPrice = target.value;
       
    }
    saveInfo = (event)=>{
        const target = event.target;
        this.productInfo = target.value;
       
    }
    saveRating = (event)=>{
        const target = event.target;
        this.productRating = target.value;
       
    }

    render() {
        const { other} = this.props;
        let {editable} = other
        console.log('editable',editable);
        if(editable){
        return (
           <form className = 'product-form' style={{display:other.display}} onSubmit={this.handleSubmit}>
               {/* <input type = 'file' name = 'img' placeholder='Upload Image' onChange = {this.saveImg}/> */}
               <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.saveImg}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
               />
               <input type = 'text'  defaultValue = {editable.name} placeholder='Product Name' onChange = {this.saveName} />
               <input type = 'text' defaultValue = {editable.price} placeholder='Price' onChange = {this.savePrice}/>
               <input type = 'text'  defaultValue = {editable.info} placeholder= 'Product info' onChange = {this.saveInfo}/>
               <input type = 'text'  defaultValue = {editable.rating} placeholder= 'Rating' onChange = {this.saveRating}/>
               <button>add</button>
           </form>
         );
        }else {
            return (<form className = 'product-form' style={{display:other.display}} onSubmit={this.handleSubmit}>
            {/* <input type = 'file' name = 'img' placeholder='Upload Image' onChange = {this.saveImg}/> */}
            <ImageUploader
             withIcon={true}
             buttonText='Choose images'
             onChange={this.saveImg}
             imgExtension={['.jpg', '.gif', '.png', '.gif']}
             maxFileSize={5242880}
            />
            <input type = 'text' name = 'name' placeholder='Product Name' onChange = {this.saveName}/>
            <input type = 'text' name = 'price' placeholder='Price' onChange = {this.savePrice}/>
            <input type = 'text' name = 'info'  placeholder= 'Product info' onChange = {this.saveInfo}/>
            <button>add</button>
        </form>);

        }
    }
}

export default connect(mapStateToProps)(Product_form);