const colors = ["red", "orange", "yellow", "yellowgreen", "green"]
const cheers = ["C'moon!", "Not Bad!", "Decent!", "Great!", "Excellent!"]

const calculateColor = (value, maxValue) => {
  const index = Math.round((value / maxValue) * 100)
    if (index < 20)
      return colors[0]
    else if (index < 40)
      return colors[1]
    else if (index < 60)
      return colors[2]
    else if (index < 80)
      return colors[3]
    else if (index >= 80)
      return colors[4]
    else
      return "white";
}

export const calculateCheer = (value, maxValue) => {
  const index = Math.round((value / maxValue) * 100)
    if (index < 20)
      return cheers[0]
    else if (index < 40)
      return cheers[1]
    else if (index < 60)
      return cheers[2]
    else if (index < 80)
      return cheers[3]
    else if (index >= 80)
      return cheers[4]
    else
      return "oops! :(";
}

export const averageFeeling = (feelingList) => {
  let total = 0;
  for(let i = 0; i < feelingList.length; i++) {
      total += feelingList[i].value;
  }
  let avg = total / feelingList.length;
  return Math.round((avg + Number.EPSILON) * 10) / 10
}

export const getDataSet = (value) => {
  return [ {
      data: [value, 3-value],
      backgroundColor: [calculateColor(value, 3), '#ddd'],
      // hoverBackgroundColor: 'blue',
    } ]
}

export const getTotalDataSet = (total) => {
  return [ {
      data: [total, 99-total],
      backgroundColor: [calculateColor(total, 100), '#ddd'],
      // hoverBackgroundColor: 'blue',
    } ]
}