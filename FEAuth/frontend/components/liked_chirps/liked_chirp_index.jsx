import React from 'react';
import ChirpItem from './liked_chirp_item';

class ChirpIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChirps();
  }

  render() {
    const { chirps } = this.props;
    return (
      <div>
        <h1>Here are all your liked Chirps!</h1>
        <ul>
          {
            chirps.map(chirp => (
              <ChirpItem
              key={`chirp${chirp.id}`}
              chirp={chirp}
              likeChirp={this.props.likeChirp}
              unLikeChirp={this.props.unLikeChirp}/>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default ChirpIndex;
