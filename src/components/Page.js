import React from 'react';
import './Page.css';

export default function({children}) {
    return (
        <section className='page'>
            {children}
        </section>
    )
}
