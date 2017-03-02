import React, { PureComponent } from 'react';

import { saveWorkout, getWorkout } from '../../../modules/session';
import { PROGRAM_WEEKS, PROGRAM_REPEATS } from '../../../modules/constants/wendler_program';


class WorkoutCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { repeats: this.getRepeats(props) };
    this.handleRepeatsChange = this.handleRepeatsChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.week !== this.props.week || nextProps.exercise.key !== this.props.exercise.key) {
      this.setState({ repeats: this.getRepeats(nextProps) });
    }
  }

  getRepeats(props) {
    return getWorkout(props.exercise.key, props.week) || '';
  }

  handleRepeatsChange(event) {
    const repeats = event.target.value;
    saveWorkout(this.props.exercise.key, this.props.week, repeats);
    this.setState({ repeats });
  }

  render() {
    const percents = PROGRAM_WEEKS[this.props.week]
    const repeats = PROGRAM_REPEATS[this.props.week]

    // Warmup
    const warmupCards = [0, 1].map((item) => {
      const percent = percents[item];
      const repeat = repeats[item];
      const weight = Math.round(this.props.oneRM / 100 * percent);

      return (
        <tr key={item}>
          <td className="col">
            {weight}kg <small>{percent}%</small>
          </td>
          <td className="col">
            {repeat}rep
          </td>
        </tr>
      );
    });

    // PrevRecord

    // MaxCard
    const maxPercent = percents[2]
    const maxWeight = Math.round(this.props.oneRM / 100 * maxPercent);
    const maxRepeats = repeats[2];

    const maxCard = [
      <tr key={0}>
        <td className="col text-muted" colSpan="2">
          no prev record
        </td>
      </tr>,
      <tr key={1}>
        <td colSpan="2">
          <small>new record</small>
          <div className="input-group">
            <input ref="repeats" type="text" className="form-control" placeholder={maxRepeats} value={this.state.repeats} onChange={this.handleRepeatsChange} />
            <span className="input-group-addon" id="basic-addon2">rep X {maxWeight}kg</span>
          </div>
        </td>
      </tr>
    ];

    return (
      <article className="c-workout_card card">
        <header className="card-header">
          {this.props.exercise.label} <small className="text-muted">{this.props.oneRM}kg</small>
        </header>
        <table className="table table-bordered">
          <tbody>
            {warmupCards}
            {maxCard}
          </tbody>
        </table>
      </article>
    );
  }
}

WorkoutCard.defaultProps = {
  oneRM: 0,
};

export default WorkoutCard;
