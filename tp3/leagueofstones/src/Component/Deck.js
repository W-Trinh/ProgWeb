import React, {Component} from 'react';
import '../index.css';
import Card from './Card.js'

class Deck extends Component{

    render(){
        return(
                <section>
                <h1>Champions disponibles</h1>
                    <div class="row justify-content-md-center" >
                    {Object.keys(this.props.cards).map((key, index) => {
                        return <div className='col-4' onClick = {() => this.selectCard(key)}> <Card name={key} atk = {this.props.cards[key].atk} def = {this.props.cards[key].def} mag = {this.props.cards[key].mag} img = {this.props.cards[key].img}/> </div>
                    })}
                    </div>
                </section>
        );
    }

    selectCard(key){
        if(Object.keys(this.props.selectedcards).length < 20){
            this.props.selectedcards[key] = this.props.cards[key];
            delete this.props.cards[key];
            this.props.handleupdate(this.props.cards, this.props.selectedcards)
        }
    }
}
export default Deck