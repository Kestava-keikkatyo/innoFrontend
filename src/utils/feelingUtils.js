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
      backgroundColor: ['green', 'white'],
      // hoverBackgroundColor: 'blue',
    } ]
}

export const getTotalDataSet = (total) => {
  return [ {
      data: [total, 99-total],
      backgroundColor: ['green', 'white'],
      // hoverBackgroundColor: 'blue',
    } ]
}