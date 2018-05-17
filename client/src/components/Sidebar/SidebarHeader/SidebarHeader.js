import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './SidebarHeader.css';

class SidebarHeader extends Component {
    setClassActive = (e) => {
        const gameTypes = [...document.querySelectorAll('.game-type-container > div')].map((el) => {
            console.log(el.className = '');
        });

        e.target.className = 'active';
    }

    render() {
        return (
            <header className='sidebar-header'>
                <div className='game-type-container'>
                    <div className='active' onClick={this.setClassActive}>1 vs 1</div>
                    <div onClick={this.setClassActive}>2 vs 2</div>
                    <div onClick={this.setClassActive}>3 vs 3</div>
                    <div onClick={this.setClassActive}>5 vs 5</div>
                </div>
                <h3><FontAwesome name='users' /> Players:</h3>
            </header>
        );
    };
}

export default SidebarHeader;