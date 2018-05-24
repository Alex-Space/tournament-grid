import React from 'react';
import './TournamentGrid.css';
import FontAwesome from 'react-fontawesome';

const TournamentGrid = (props) => {
    console.log(props);
    return (
        <div className='tournament-grid'>

            <div className='column-container'>
                <header className='match-order-header'>
                    <h2>Round 1</h2>
                </header>
                <div className="grid-container">
                    <div className="pairs">
                        <div className='pair-container'>
                            <div className='top-player-container'>
                                <span>Игрок первый</span>
                                <div className='match-result'>
                                    <FontAwesome name='trophy-alt' />
                                </div>
                            </div>
                            <div className='bottom-player-container'>
                                Игрок второй
                        </div>
                        </div>

                        <div className='pair-container'>
                            <div className='top-player-container'>
                                <span>Игрок третий</span>
                            </div>
                            <div className='bottom-player-container'>
                                Игрок четвертый
                        <div className='match-result'>
                                    <FontAwesome name='trophy-alt' />
                                </div>
                            </div>
                        </div>

                        <div className='pair-container'>
                            <div className='top-player-container'>
                                <span>Игрок первый</span>
                                <div className='match-result'>
                                    <FontAwesome name='trophy-alt' />
                                </div>
                            </div>
                            <div className='bottom-player-container'>
                                Игрок второй
                        </div>
                        </div>

                        <div className='pair-container'>
                            <div className='top-player-container'>
                                <span>Игрок третий</span>
                            </div>
                            <div className='bottom-player-container'>
                                Игрок четвертый
                        <div className='match-result'>
                                    <FontAwesome name='trophy-alt' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='column-container'>
                <header className='match-order-header'>
                    <h2>Semifinal</h2>
                </header>
                <div className="grid-container">
                    <div className="pairs">
                        <div className='pair-container'>
                            <div className='top-player-container'>
                                <span>Игрок первый</span>
                                <div className='match-result'>
                                    <FontAwesome name='trophy-alt' />
                                </div>
                            </div>
                            <div className='bottom-player-container'>
                                Игрок четвертый
                            </div>
                        </div>
                        <div className='pair-container'>
                            <div className='top-player-container'>
                                <span>Игрок первый</span>
                                <div className='match-result'>
                                    <FontAwesome name='trophy-alt' />
                                </div>
                            </div>
                            <div className='bottom-player-container'>
                                Игрок четвертый
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='column-container'>
                <header className='match-order-header'>
                    <h2>Final</h2>
                </header>
                <div className="grid-container">
                    <div className="pairs">
                        <div className='pair-container'>
                            <div className='top-player-container'>
                                <span>Игрок первый</span>
                                <div className='match-result'>
                                    <FontAwesome name='trophy-alt' />
                                </div>
                            </div>
                            <div className='bottom-player-container'>
                                Игрок четвертый
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='column-container'>
                <header className='match-order-header'>
                    <h2>Champion</h2>
                </header>
                <div className="grid-container">
                    <div className="pairs">
                        <div className='pair-container'>
                            <div className='top-player-container'>
                                <span>Игрок первый</span>
                                <div className='match-result'>
                                    <FontAwesome name='trophy-alt' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TournamentGrid;