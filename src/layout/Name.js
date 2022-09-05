import React from 'react';
import { Link } from 'react-router-dom';

export default function Name() {
    return (
        <div className="navWrapper">
            <Link to="/" id="logo">
                <h1>Tyler <span className="parenthesis">(</span>Jay<span className="parenthesis">)</span> Forbes</h1>
            </Link>
        </div>
    )
}