import React from 'react';
import { SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrap, 
        SidebarRoute 
        } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='discover' onClick={toggle}>
                    The Game 
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                    Levels
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        Trailer
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact Form
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="https://apps.apple.com/us/app/wristroad/id6468395372">
                        Download Now!
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
