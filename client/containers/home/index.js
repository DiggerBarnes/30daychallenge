import React, { PureComponent } from 'react';
import Layout from '../../components/layout';
import Link from '../../components/link';
import WorkoutCard from './components/workout_card';

import classNames from 'classnames';
import { getWeeks, getExercises } from './utils';
import {
  get1RMs,

  saveActiveWeek,
  getActiveWeek,

  saveActiveExercise,
  getActiveExercise,
} from '../../modules/session';


class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeWeek: getActiveWeek() || 0,
      activeExercise: getActiveExercise() || 0,
    };
  }

  handleWeekSelect(activeWeek) {
    saveActiveWeek(activeWeek);
    this.setState({ activeWeek });
    this.handleExerciseSelect(0);
  }

  handleExerciseSelect(activeExercise) {
    this.setState({ activeExercise });
    saveActiveExercise(activeExercise);
  }

  render() {
    const weeks = getWeeks();

    // Weeks
    const weeksDropdownItems = weeks.map((item, index) => (
      <span onClick={this.handleWeekSelect.bind(this, index)} key={item.label} className="dropdown-item" href="#">{item.label}</span>
    ));

    const weeksDropdown = (
      <div className="dropdown c-home-weeks_dropdown">
        <button className="btn btn-secondary btn-block dropdown-toggle" type="button" id="weeksDropdown" data-toggle="dropdown">
          {weeks[this.state.activeWeek].label}
        </button>
        <div className="dropdown-menu" aria-labelledby="weeksDropdown">
          {weeksDropdownItems}
        </div>
      </div>
    );

    // Exercises
    const exercises = getExercises();

    const exercisesButtons = exercises.map((item, index) => (
      <button
        key={item.key}
        type="button"
        className={classNames('btn', { 'btn-secondary': index !== this.state.activeExercise, 'btn-primary': index === this.state.activeExercise })}
        onClick={this.handleExerciseSelect.bind(this, index)}
      >
        {item.label}
      </button>
    ));

    const exercisesButtonGroup = (
      <div className="btn-group c-home-exercises_group" role="group" aria-label="Basic example">
        {exercisesButtons}
      </div>
    );

    // Workout
    const activeExercise = exercises[this.state.activeExercise];
    const oneRM = (get1RMs() || {})[activeExercise.key];

    return (
      <Layout className="c-home">
        {weeksDropdown}
        <WorkoutCard week={this.state.activeWeek} exercise={activeExercise} oneRM={oneRM} />
        {exercisesButtonGroup}
      </Layout>
    );
  }
};

export default Home;
