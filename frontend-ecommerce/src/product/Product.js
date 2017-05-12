import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Product.actions';


class Product extends React.Component {
  componentDidMount() {
    this.props.fetchPage(this.props.params.id)
  }
  componentWillReceiveProps(newProps) {
    if(this.props.params.id !== newProps.params.id) {
      this.props.fetchPage(newProps.params.id);
    }
  }
  render() {
    let name;
    let price;
    let description;
    let image;

    if (this.props.product) {

      name = this.props.product.name;
      price = this.props.product.price;
      description = this.props.product.description;
      image = this.props.product.image_path;
    }
    return (
      <div>
        <h1> more flowers</h1>
        <h3>{name}</h3><br/>
        <h3>${price}</h3><br/>
        <p> <img src={image}/> {description}</p>

      </div>
    );
  }
}



const ProductContainer = ReactRedux.connect(
  state => state.product,
  actions
)(Product);

export default ProductContainer;
