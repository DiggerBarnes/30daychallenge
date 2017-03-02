import { PROGRAM_WEEKS } from '../../modules/constants/wendler_program';
import {
  EXERCISE_STANDING_PRESS,
  EXERCISE_BENCH_PRESS,
  EXERCISE_DEADLIFT,
  EXERCISE_SQUAT,
} from '../../modules/constants/exercises';


export const getWeeks = () => (
  PROGRAM_WEEKS.map((item, index) => ({ label: `${index + 1} Week` }))
);

export const getExercises = () => ([
  { key: EXERCISE_STANDING_PRESS, label: 'Standing press' },
  { key: EXERCISE_DEADLIFT, label: 'Deadlift' },
  { key: EXERCISE_BENCH_PRESS, label: 'Bench press' },
  { key: EXERCISE_SQUAT, label: 'Squat' },
])
