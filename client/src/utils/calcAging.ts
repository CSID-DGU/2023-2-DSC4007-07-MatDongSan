export const calcAging = (construction_year: string) => {
  const now = 2023;
  const year = parseInt(construction_year);
  const age = now - year;

  if (age > 40) return '#808080';
  else if (age > 30) return '#FF0000';
  else if (age > 20) return '#FFC0CB';
  else if (age > 10) return '#0000FF';
  else return '#87CEEB';
};
