import localStorage from 'local-storage';


export const save1RMs = (model) => (localStorage.set('1rm', model));
export const get1RMs = () => (localStorage.get('1rm'));

export const saveActiveWeek = (activeWeek) => (localStorage.set('activeWeek', activeWeek));
export const getActiveWeek = (activeWeek) => (localStorage.get('activeWeek'));

export const saveActiveExercise = (activeExercise) => (localStorage.set('activeExercise', activeExercise));
export const getActiveExercise = (activeExercise) => (localStorage.get('activeExercise'));

export const saveWorkout = (exercise, week, repeats) => (localStorage.set(`week:${week}:${exercise}`, repeats));
export const getWorkout = (exercise, week) => (localStorage.get(`week:${week}:${exercise}`));
