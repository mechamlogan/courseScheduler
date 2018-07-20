import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Bacon ipsum dolor amet turkey beef pork loin pork ball tip. Prosciutto alcatra shank, meatloaf ball tip porchetta jerky ham spare ribs venison. Pastrami spare ribs short loin sirloin.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;