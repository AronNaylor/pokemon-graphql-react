import React from 'react';

export default function Pokemon(props) {
    return (
        <div className='pokemon' key={props.id}>
            <div className='metaBox'>
            <span className='meta'>{props.maxCP}</span>
            <span className='name'>{props.name}</span>
            <span className='maxHP'>{props.maxHP}</span>
            </div>
            <div className='imgBox'>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='attacksBox'>
                attacks
            </div>
    <style jsx>{
        `

        img {
            max-width: 100px;
            height: auto;
        }
        `
    }</style>
        </div>
    )
}