import React from 'react';

export default function Logo({ logo: { title, state } }) {
    return (
    <img src="https://www.totalwine.com/global-static-resources/@totalwinelabs/twc-icon/3.13.0/twm-logo-color.svg#twm-logo-color" aria-label={title} className="logo" alt="total wine logo"/>
    );
}

