import React, { FC } from 'react';
import Title from '../Title';
import { Constants } from '../../constants/default';
import Hamburger from '../../assets/hamburger.png';
import Arrow from '../../assets/left-arrow.png';
import './navigation.scss';

interface navigationProps {
    handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    showMenu: boolean;
}

function Navigation({ handleClick, showMenu }: navigationProps) {
    return (<div className="navigation">
        <div className="left"><img src={showMenu ? Arrow : Hamburger} alt="Show full menu" onClick={handleClick} ></img></div>
        <div className="center">
            <Title title={showMenu ? Constants.MENU_TITLE : Constants.DEFAULT_TITLE}></Title>
        </div>
    </div>)
}

export default Navigation;