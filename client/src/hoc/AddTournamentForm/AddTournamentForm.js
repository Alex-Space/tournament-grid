import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Form from '../../components/Form/Form';
import GeneralBtn from '../../components/GeneralBtn/GeneralBtn';
import FontAwesome from 'react-fontawesome';
import {addDuelTournament} from '../../actions';

class AddTournamentForm extends Component {

    onSubmitHandle = (e) => {
        e.preventDefault();

        const name = document.querySelector('#form-tournament-name').value;
        const type = document.querySelector('#form-tournament-type').value;

        let date = document.querySelector('#form-tournament-date').value;
        const year = date.slice(0,4);
        const day = date.slice(8,10);
        const month = date.slice(5,7);
        date = day + '.' + month + '.' + year;
        
        this.props.addDuelTournament(name, type, date);
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandle}>
                    <label htmlFor="form-tournament-name">
                        <span>Название турнира</span>
                        <input id="form-tournament-name" type="text" name="tournament-name" required/>
                    </label>
                    <label htmlFor="form-tournament-type">
                        <span>Тип турнира</span>
                        <select id="form-tournament-type" name="tournament-type" required>
                            <option value="1vs1">1 vs 1</option>
                            <option value="2vs2">2 vs 2</option>
                            <option value="3vs3">3 vs 3</option>
                        </select>
                    </label>
                    <label htmlFor="form-tournament-date">
                        <span>Дата турнира</span>
                        <input id="form-tournament-date" type="date" name="tournament-date" required />
                    </label>

                    <GeneralBtn text="Добавить турнир">
                        <FontAwesome name="calendar-plus"/>
                    </GeneralBtn>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameType: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addDuelTournament
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTournamentForm);