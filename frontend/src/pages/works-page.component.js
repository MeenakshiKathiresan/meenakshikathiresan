import React from 'react';
import WorkCard from '../components/work-card.component';

const Works = () => {

    const p = [1, 2, 3]
    return (
        <div className="parent-div content">
            <div className="row">
                {p.map((x) => (
                    <div>
                        <WorkCard />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works