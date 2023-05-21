import { Feeling } from "../types/types"
import i18n from 'i18next';

const colors = ["red", "orange", "yellow", "yellowgreen", "green"]
const cheers = [i18n.t("cheer_one"), i18n.t("cheer_two"), i18n.t("cheer_three"), i18n.t("cheer_four"), i18n.t("cheer_five")]


const calculateColor = (value: number, maxValue: number) => {
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

//
export const calculateCheer = (value: number, maxValue: number) => {
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

export const averageFeeling = (feelingList: Feeling[]) => {

  let total = 0;

  //console.log("Feeling list lenght: " + feelingList.length)
  for(let i = 0; i < feelingList.length; i++) {
      total = total + Number(feelingList[i]);
      //console.log("Feeling value: "+ feelingList[i])
  }
  let avg = total / feelingList.length;
  return Math.round((avg + Number.EPSILON) * 10) / 10
}

export const getDataSet = (value: number) => {
  return [ {
      data: [value, 3-value],
      backgroundColor: [calculateColor(value, 3), '#ddd'],
      // hoverBackgroundColor: 'blue',
    } ]
}

export const getTotalDataSet = (total: number) => {
  return [ {
      data: [total, 99-total],
      backgroundColor: [calculateColor(total, 100), '#ddd'],
      // hoverBackgroundColor: 'blue',
    } ]
}