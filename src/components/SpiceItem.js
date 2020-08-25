import React from 'react'
import StarRating from './StarRating'

class SpiceItem extends React.Component {

  state = {
    favorited: false,
  }

  handleClick = (event) => {
    this.setState(prevState => ({favorited: !prevState.favorited}))
  }

  render() {
    const { image, title, description, notes, rating } = this.props.spice
    return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <button className="favorite">
            <span onClick={this.handleClick} role="img" aria-label="heart">
              {this.state.favorited ? "🤍" : "♡"}
            </span>
          </button>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Tasting Notes: <em>{notes}</em></p>
          <div>Rating: <StarRating percentage={rating / 5} /></div>
        </div>
      </div>
    )
  }
}

export default SpiceItem