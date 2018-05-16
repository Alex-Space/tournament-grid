import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SidebarHeader.css';

const sidebarHeader = (props) => {
    return (
        <header className='sidebar-header'>
            <h3><FontAwesome name='users' /> Players:</h3>
        </header>
    );
}

export default sidebarHeader;