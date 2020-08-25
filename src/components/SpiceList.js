import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  renderSpices() {
    let filteredSpices = this.props.spices.filter(spice => {
      return this.state.fourStarOnly ? spice.notes.includes(this.state.search) && spice.rating >= 4 : spice.notes.includes(this.state.search)
    })
    return filteredSpices.map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }

  handleInput = (event) => {
    let searchTerm = event.target.value ? `${event.target.value[0].toUpperCase()}${event.target.value.slice(1)}` : ""
    this.setState(previousState => ({search: searchTerm}));
  }

  handleChange = (event) => {
    event.persist()
    this.setState(previousState => event.target.checked ? {fourStarOnly: true} : {fourStarOnly: false})
  }

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input onInput={this.handleInput} type="text" placeholder="Search By Tasting Notes..." />
            </div>
            <label>
              4 Star Only <input onChange={this.handleChange} type="checkbox" />
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList