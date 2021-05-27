import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
    list: true,
    card: false,
    players: [],
    player: {}
    };
    }
    componentDidMount() {
      fetch("http://localhost:3001/players/list")
      .then(response => response.json())
      .then( responseJson=> {
      this.setState({ players:responseJson.data });
      },
      )}
    showCard = id => {
      fetch(`http://localhost:3001/players/list${id}`)
      .then(response => response.json())
      .then( responseJson=> {
      this.setState({ player:responseJson.data });
      });
    }

      render() {
        return (
            <div>
              {/* {this.state.players.map(player => {
                return (
                  <div>
                    <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">{player.name}</div>
            <div className="card-body text-primary">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
                  </div>
                )
              })} */}
               
               
               {this.state.players.map(player => {
                return (
                  <div>
                    <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">{this.showCard(player._id)
            }</div>
            <div>{console.log(this.showCard(player._id))}</div>
            <div className="card-body text-primary">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
                  </div>
                )
              })}
              {console.log(this.showCard(this.state.players[0]._id))}


            </div>
            
        )
    
  }
}

// export default App;
