const Colors = {
  current: 0,
  color: [
    "#7bd96c73",
    "#6b8df2b3",
    "#ADC8D9",
    "#C5C9BB",
    "#F9C75E",
    "#FFA355",
    "#F6B1C3",
    "#F0788C",
  ],
};

const format = (circuit, isMultipleWiner = false, color = "") => {
  return {
    name: circuit.raceName,
    date: circuit.date,
    url: circuit.url,
    country: circuit.Circuit.Location.country,
    winner: {
      color,
      driverId: circuit.Results[0].Driver.driverId,
      familyName: circuit.Results[0].Driver.familyName,
      givenName: circuit.Results[0].Driver.givenName,
      nationality: circuit.Results[0].Driver.nationality,
      multipleWins: isMultipleWiner,
    },
  };
};

export default (info) => {
  Colors.current = 0;
  const newData = [];
  for (let i = 0; i < info.length; i++) {
    if (newData[i]) {
      continue;
    }

    newData[i] = format(info[i], false);
    for (let j = i + 1; j < info.length; j++) {
      if (newData[i].winner.driverId === info[j].Results[0].Driver.driverId) {
        let color = newData[i].winner.color;
        if (color === "") {
          color = Colors.color[Colors.current++];
          newData[i].winner.color = color;
        }

        newData[i].winner.multipleWins = true;
        newData[j] = format(info[j], true, color);
      }
    }
  }

  return newData;
};
