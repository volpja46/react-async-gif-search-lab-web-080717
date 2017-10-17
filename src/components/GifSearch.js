import React from 'React';

class GifSearch extends React.Component {
	render() {

		    return (
		       <form onSubmit={this.props.handleSubmit}>
		         <input type="text" onChange={this.props.handleChange} />
		         <input type="submit" />
		       </form>
		);
	}
}
export default GifSearch;
