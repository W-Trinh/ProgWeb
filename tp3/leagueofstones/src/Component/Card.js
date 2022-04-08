import React, {Component} from 'react';
import '../index.css';

class Card extends Component{
    render(){
        return(
            <section>
                <img className = "carte" src = {this.props.img}></img>
                <section className = "statCarte">
                {this.props.name}
                <br/> Attaque : {this.props.atk}
                <br/> Magie : {this.props.mag}
                <br/> Defense : {this.props.def}
                </section>

            </section>
        )
    }
}
export default Card;
