import React, { Component } from 'react';
import Monsters from "./components/Monsters";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import './App.css';


class App extends Component {

  state = {
    monsters: [
      {
        id: 1,
        Name: "Nergigante",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/1/1d/Nergigante_16.jpg?width=325",
        clicked: false
      },
      {
        id: 2,
        name: "Vaal Hazak",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/b/b5/Vaal_Hazak28.jpg?width=325",
        clicked: false
      },
      {
        id: 3,
        name: "Kushala Daora",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/e/e2/Kushala_Daora13.jpg?width=325",
        clicked: false
      },
      {
        id: 4,
        name: "Teostra",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/c/cb/Teostra24.jpg?width=325",
        clicked: false
      },
      {
        id: 5,
        name: "Lunastra",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/7/7a/Djm-CSgW4AEFEO9.jpg?width=325",
        clicked: false
      },
      {
        id: 6,
        name: "Kirin",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/e/ee/Kirin11.jpg?width=325",
        clicked: false
      },
      {
        id: 7,
        name: "Xeno'jiiva",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/b/b6/Djm-GB3WwAIu-db.jpg?width=325",
        clicked: false
      },
      {
        id: 8,
        name: "Kulve Taroth",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/c/cb/Djm-EXPX4AcK9S-.jpg?width=325",
        clicked: false
      },
      {
        id: 9,
        name: "Velkhana",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/c/c3/Velkhanaicon.jpg?width=325",
        clicked: false
      },
      {
        id: 10,
        name: "Namielle",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/a/a4/Namielleicon.jpg?width=325",
        clicked: false
      },
      {
        id: 11,
        name: "Shara Ishvalda",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/4/4b/Shara_Ishvaldaicon.jpg?width=325",
        clicked: false
      },
      {
        id: 12,
        name: "Zinogre",
        img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/1/1f/Zinogreicon.jpg?width=325",
        clicked: false
      }
    ]
  };

  markClicked = (id) => {
    this.setState({
      monsters: this.state.monsters.map(monster => {
        if (monster.id === id) {
          monster.clicked = !monster.clicked;
          console.log("You guessed correctly!")
        }
        if (monster.id === id && !monster.clicked !== false) {
          monster.clicked = !monster.clicked;
          alert("Oh No! You have hunted a monster twice. It could go extinct!")
          window.location.reload(false)
        }
        return monster;
      })
    })
  };

  render() {
    return (
      <div>

        <Jumbotron />
        <div className="container">
          <div className="row">
            <Monsters
              monsters={this.state.monsters}
              markClicked={this.markClicked}

            />
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}

export default App;

//Pseudo code:
  //design webpage layout
      // **** fixed navbar
      // **** container for all the images to shuffle
      // **** jumbotron with "Click game" and instructions
      // **** navbar with "click game" on the left
      // navbar with click result "You Guessed Correctly" or You guesses incorrectly in center
      // navbar with your score/ top score on the left, top score is not persistent
      // sticky footer
  // **** Render 12 different images on the page 
  // **** on click for each image that changes the data state
  // on click for each image makes click result in navbar flash blue or red
  // on click resets image locations
  // use data state to keep track of score
  // if user clicks on an image that has already been clicked score resets