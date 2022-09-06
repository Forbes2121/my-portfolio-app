import React from 'react';
import Avatar from '../layout/Avatar';
import Menu from '../layout/Menu';
import Name from '../layout/Name';

export default function Header() {
    return (
        <>
        <div className="headerStrip"></div>
        <div className="container-fluid container-md">
            <div className="header row flex-column flex-md-row">
                <div className="col order-md-1">
                    <Name />
                </div>
                <div className="col order-md-3">
                    <Menu />
                </div>
                <div className="col order-md-2">
                    <Avatar />
                </div>
            </div>
        </div>
        </>
    )
}