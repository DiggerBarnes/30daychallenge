import moment from 'moment';


export const getDays = (startDate) => {
  const startDateMoment = moment(startDate);
  const days = moment().diff(startDateMoment, 'days') + 1;

  if (days > 30) return 30;
  return days;
};
