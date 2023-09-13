import React from 'react';
import './timer.scss';

interface TimerProps {
    isPulsating: boolean;
    timer: number;
}

const Timer: React.FC<TimerProps> = ({ isPulsating, timer }) => {
    return (
        <section className={`timer ${isPulsating ? 'pulse' : ''}`}>
            Next turn: {timer} seconds
        </section>
    );
};

export default Timer;
