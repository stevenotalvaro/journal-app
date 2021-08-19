import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:
                        'url(https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg)',
                }}
                className="journal__entry-picture"
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">un nuevo dia</p>
                <p className="journal__entry-content">
                    lorem ipsum askjdlkasd nlasjdlkasjdlajsldkjalskdjalskjd
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28th</h4>
            </div>
        </div>
    )
}
