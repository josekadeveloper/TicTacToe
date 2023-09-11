import React from 'react';
import './turn.scss';

interface TurnProps {
    turn: string;
}

const Turn: React.FC<TurnProps> = ({ turn }) => {
    return (
        <section className='turn'>{`Next player: ${turn}`}</section>
    );
};

export default Turn;
