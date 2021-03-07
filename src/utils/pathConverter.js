/**
 * Returns list of path objects
 * Karvalakki certified :D
 */
export default (path) => {
  let list = []
  let nameList = path.trim("/").split("/")
  nameList = nameList.filter(e => e !== "")
  let p = ""
  nameList.forEach(e => {
    p=p+"/"+e
    list.push({
      name: capitalizeFirstLetter(e),
      link: p
    })
  });
  return list
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}