export const combineText = (rent_type: string, deposit: number, rent: number) => {
  const formattedDeposit = deposit >= 10000 ? `${deposit / 10000}억` : `${deposit}만원`;

  if (rent_type === '월세') {
    return ` ${formattedDeposit}/${rent}`;
  }

  return `${formattedDeposit}`;
};
