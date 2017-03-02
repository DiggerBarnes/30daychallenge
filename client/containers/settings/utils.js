import {
  EXERCISE_STANDING_PRESS,
  EXERCISE_BENCH_PRESS,
  EXERCISE_DEADLIFT,
  EXERCISE_SQUAT,
} from '../../modules/constants/exercises';


export const getFields = () => ([
  { label: 'Standing press 1rm', key: EXERCISE_STANDING_PRESS },
  { label: 'Bench press 1rm', key: EXERCISE_BENCH_PRESS },
  { label: 'Deadlift 1rm', key: EXERCISE_DEADLIFT },
  { label: 'Squat 1rm', key: EXERCISE_SQUAT },
]);

const fields = [
  EXERCISE_STANDING_PRESS,
  EXERCISE_BENCH_PRESS,
  EXERCISE_DEADLIFT,
  EXERCISE_SQUAT,
];

export const getModel = (refs) => (
  fields.reduce((model, field) => {
    model[field] = refs[field].value;
    return model;
  }, {})
);
