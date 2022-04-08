import React, {Component} from 'react';
import '../index.css';
import Card from './Card.js'

class SelectedCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section>
            <div className='row'>
                <div className='col-6'>
                    <h1> Mon Deck </h1>
                </div>
                <div className='col-6'>
                    {this.createButton()}
                </div>
            </div>
                <div class="row justify-content-md-center">
                    {Object.keys(this.props.selectedcards).map((key, index) => {
                        return <div className='col-4' onClick = {() => this.selectCard(key)}> <Card name={key} atk = {this.props.selectedcards[key].atk} def = {this.props.selectedcards[key].def} mag = {this.props.selectedcards[key].mag} img = {this.props.selectedcards[key].img}/> </div>
                    })}
                </div>
             </section>
        );
    }

    selectCard(key){
        this.props.cards[key] = this.props.selectedcards[key];
        delete this.props.selectedcards[key];
        this.props.handleupdate(this.props.cards, this.props.selectedcards)
    }

    validDeck(){
        console.log(this.props)
        this.props.handledeck(this.props.selectedcards)
    }

    createButton(){
        if(Object.keys(this.props.selectedcards).length == 20){
            return <button onClick = {this.validDeck}>Valider</button>
        }
        else{
            return <button disabled>Valider</button>
        }
    }


}

export default SelectedCard