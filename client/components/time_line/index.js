import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import { getDays } from './utils';


class TimeLine extends PureComponent {
  renderItem(item) {
    const url = item || 'public/images/not_done.jpg';
    return (
      <span className="c-time_line-item" style={{ backgroundImage: `url(${url})` }} />
    );
  }

  render() {
    const className = classNames('c-time_line', this.props.className);
    const { children, participantA, participantB, startDate, ...cleanProps, } = this.props;

    const days = getDays(startDate);
    const participantAItems = [];
    const participantBItems = [];


    for (let day = 0; day < days; day += 1) {
      const participantAItem = (
        <li key={day}>
          <span className="c-time_line-benchmark">
            {day + 1}
            <small>day</small>
          </span>
          {this.renderItem(participantA.items[day])}
        </li>
      );

      const participantBItem = (
        <li key={day}>
          {this.renderItem(participantB.items[day])}
        </li>
      );

      participantAItems.push(participantAItem);
      participantBItems.push(participantBItem);
    }

    return (
      <article {...cleanProps} className={className}>
        <div className="c-time_line-container">
          <div className="c-time_line-column">
            <h2>{participantA.name}</h2>
            <ul className="c-time_line-list">
              {participantAItems}
            </ul>
          </div>
          <div className="c-time_line-column">
            <h2>{participantB.name}</h2>
            <ul className="c-time_line-list">
              {participantBItems}
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

TimeLine.propTypes = {
  children: PropTypes.string,
  classNames: PropTypes.node,

  participantA: PropTypes.object.isRequired,
  participantB: PropTypes.object.isRequired,

  startDate: PropTypes.string.isRequired,
};

export default TimeLine;
