import React from 'react';

const GifList = props => {
console.log(props)
const gifItems = props.gifData.map(function(gif) {
  return (
    <li><img src={gif.images.original.url}/></li>
  )
})
return(
  // null
  <ul>
{gifItems}
  </ul>
)

};

export default GifList;
//
// // <GIFLIST />
// // <GifList /> is a presentational component. It receives data from it's props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.
