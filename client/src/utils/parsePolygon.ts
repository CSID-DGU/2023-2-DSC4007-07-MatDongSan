export function parsePolygon(wktString: string) {
  const regex = /\d+\.\d+/g;

  const matches = wktString.match(regex);

  if (matches === null) return [];

  const latLngArray = [];

  for (let i = 0; i < matches.length; i += 2) {
    const lat = parseFloat(matches[i]);
    const lng = parseFloat(matches[i + 1]);
    latLngArray.push({ lat, lng });
  }

  return latLngArray;
}
