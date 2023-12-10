export enum DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum RADAR_ICON_TYPE {
  SCHOOL = 'school',
  SUBWAY = 'subway',
}

export enum MAP_ICON_TYPE {
  HOUSE = 'house',
  SUBWAY = 'subway',
}

export const RADAR_ICON_SORUCE = {
  school: {
    image:
      'data:image/png;base64,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',
    color: 'purple',
    text: '학교',
  },
  subway: {
    image:
      'data:image/png;base64,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',
    color: 'red',
    text: '지하철',
  },
};

export const MAP_ICON_SOURCE = {
  house: {
    image:
      'data:image/png;base64,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',
    color: 'rgb(232, 76, 185)',
    text: '주택',
  },
  subway: {
    image:
      'data:image/png;base64,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',
    color: 'red',
    text: '주택',
  },
};

export const AGING_COLOR = {
  warn: '#808080',
  old: '#FF0000',
  middle: '#FFC0CB',
  new: '#0000FF',
  modern: '#87CEEB',
};