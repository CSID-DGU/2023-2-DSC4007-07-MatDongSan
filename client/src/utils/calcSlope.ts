export const calcSlope = (slope_avg: number, slope_max: number) => {
  if (slope_avg >= slope_max * 2.5 && slope_max >= 20) return '경사 높음';

  return '경사 보통';
};
