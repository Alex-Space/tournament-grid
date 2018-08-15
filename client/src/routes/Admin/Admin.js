import React from 'react';
import ModifiedSidebar from '../../containers/Sidebar/index';
import AdminContentArea from '../../containers/AdminContentArea/AdminContentArea'
import AddTournamentForm from '../../hoc/AddTournamentForm/AddTournamentForm';
import './Admin.css';

export default () => {
    const sidebarContent = (
        <div>
            <h2 className="sidebar-title">Новый Турнир</h2>
            <AddTournamentForm/>
        </div>
    );

    return (
        <div className="App">
            <ModifiedSidebar sidebarContent={sidebarContent}>
                <AdminContentArea/>
            </ModifiedSidebar>
        </div>
    );
};