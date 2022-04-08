import React, {Component} from 'react';
import '../index.css';
import Deck from './Deck.js'
import SelectedCard from './SelectedCard.js'

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            'cards' : {}, 
            'selectedCards': {},
            'disabled': 'disabled',
            'valider': false,
        }
    }
    render(){
        if(!this.state.valider){
            return(
                <div className = "app">
                    <div className = "topnav"> 
                    League of Stones
                    </div>
            
                    <div className="container">
                        <div className = "row">
                            <div className="col-6">
                                <Deck cards = {this.state.cards} selectedcards = {this.state.selectedCards} handleupdate = {this.handleUpdate}/>
                            </div>
                
                            <div className="col-6">
                            <section className="deck">
                                <SelectedCard cards = {this.state.cards} selectedcards = {this.state.selectedCards} handleupdate = {this.handleUpdate} buttonState = {this.state.disabled} handledeck = {this.handleDeck}/>
                            </section>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className = "app">
                    <div className = "topnav"> 
                    League of Stones
                    </div>
            
                    <div className="container">
                        <div className = "row">
                            <section className="deck">
                                <SelectedCard cards = {this.state.cards} selectedcards = {this.state.selectedCards} handleupdate = {this.handleUpdate} buttonState = {this.state.disabled} handledeck = {this.handleDeck}/>
                            </section>
                        </div>
                    </div>
                </div>
            )
        }

    }
    
    componentDidMount(){
        let cards = {};
        fetch("http://localhost:3001/cards")
        .then(response => response.json())
        .then(data => {
            for(const character of data){
                //cards += "<Card name =" + character.name + "atk = " + character.info.attack + "def =" + character.info.defense + "mag =" + character.info.magic + "img =" + "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + character.key + "_0.jpg" + "/>"
                cards[character.name] = {
                    atk : character.info.attack, 
                    def : character.info.defense, 
                    mag : character.info.magic, 
                    img : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+character.key+"_0.jpg" }
            }
            this.setState({'cards':cards})
        })
        .catch(err => console.error(err))  
    }

    handleUpdate = (cards, selectedcards) =>{
        this.setState({
            'cards':cards, 
            'selectedCards':selectedcards
        })
    }

    handleDeck = (selectedcards) =>{
        if(Object.keys(selectedcards).length == 20){
            this.setState({
                'valider': true
            })
        }
    }
}

export default Board