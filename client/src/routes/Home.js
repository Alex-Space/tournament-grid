import React from 'react';
import ModifiedSidebar from '../containers/Sidebar';
import MainContentArea from '../containers/MainContentArea/MainContentArea';
import SidebarHeader from '../containers/SidebarHeader/SidebarHeader';
import SidebarPlayers from '../containers/SidebarPlayers/SidebarPlayers';

export default () => {
    const sidebarContent = (
        <div>
            <SidebarHeader/>
            <SidebarPlayers/>
        </div>
    );

    return (
        <div className="App">
            <ModifiedSidebar sidebarContent={sidebarContent}>
                <MainContentArea/>
            </ModifiedSidebar>
        </div>
    );
};