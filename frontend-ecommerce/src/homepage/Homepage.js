import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Homepage.actions';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>
        <h1>Flowers</h1><br/>
        <h3>Flowers in stock</h3><br/>
        </div>
          <div>
            {this.props.images.map((image, idx) =>
            <a key={idx} href= {`/#/product/${image.id}`}>
            <img key={idx} src={`images/${image.name}.jpeg`} alt={image.id}/>
            </a>
            )}
          </div>
      </div>
    );
  }
}

/*
home refer to index js in the combine reducers page
*/
const HomepageContainer = ReactRedux.connect(
  state => state.homePage,
  actions
)(Homepage);

export default HomepageContainer;
