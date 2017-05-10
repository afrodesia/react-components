import React, {Component} from 'react';
import styled from 'styled-components';

const Plist = styled.section`
	max-width:40%;
	background:#eccdcd;
	padding:20px;


	h1{
		color:tomato;
		font-size:1.3em;
		text-transform:uppercase;
		font-family: 'AvenirMedium';

	}

`

class ProductList extends Component {
  render() {
    return (
      <Plist className="">
       	<h1>Products List</h1>
      </Plist>
    )
  }
}

export default ProductList;