export const calcSlope = (slope_avg: number, slope_max: number) => {
  if (slope_avg * 2.5 >= slope_max && slope_max >= 20) return '경사 높음';

  return '경사 보통';
};
