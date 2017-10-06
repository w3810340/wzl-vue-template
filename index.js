import React from 'react';
import PropTypes from 'prop-types';

export default class Capacity extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
    }

    formatValue(value) {
        if (value < 1048576) return Math.round(value / 1024 * 100 / 100) + ' Kb';
        else return Math.round(value / 1048576 * 100) / 100 + ' Mb';
    }

    render() {
        const { value } = this.props;
        return (
            <span {...this.props}>
                {this.formatValue(value)}
            </span>
        )
    }
}