import React from 'react';
import '../App.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

export default Rating;
