import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends React.Component {

    constructor () {
      super()
      this.state = {
        gifs: [],
        searchTerm: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    fetchGifs (event) {
      event.preventDefault()
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`
      fetch(url)
      .then(res => res.json())
      .then(json => this.setState({
          gifs: json.data.slice(0,3)
      }))
    }

      handleChange (event){
        event.preventDefault()
        this.setState ({
        searchTerm: event.target.value
      })
    }

      handleSubmit = (event)=> {
        event.preventDefault()
        this.fetchGifs(event)
      }

    render(){
      return (
        <div>
        <GifSearch
          gifData={this.state.gifs}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchTerm={this.state.searchTerm}
        />
        <GifList gifData={this.state.gifs}/>
      </div>
      )
    }

}

export default GifListContainer;

{/* <GifList gifData={this.state.gifs}/> */}
