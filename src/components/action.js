import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {
    render() {
        return (
            <div className={`${this.props.className} action`}>
                {Icon('fas fa-plus-circle','library-course__icon')}
                {/* fas fa-times-circle */}
            </div>
        )
    }
}

export default Action;