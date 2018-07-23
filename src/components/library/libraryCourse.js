import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title"><h1>Problem Solving</h1></label>
                    {Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow" />
                <Action className="library-course__action" />
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Bacon ipsum dolor amet turkey beef pork loin pork ball tip. Prosciutto alcatra shank, meatloaf ball tip porchetta jerky ham spare ribs venison. Pastrami spare ribs short loin sirloin.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;