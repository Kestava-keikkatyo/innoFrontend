import { BreadcrumbLink } from '../types/types'

/**
 * Returns list of path objects
 * Karvalakki certified :D
 */
export default (path: string) => {
  const list: BreadcrumbLink[] = []
  let nameList = path.trim().split('/')
  nameList = nameList.filter((e: string) => e !== '')
  let p = ''
  nameList.forEach((e: string) => {
    if (e.startsWith(':')) return
    p = p + '/' + e
    list.push({
      name: capitalizeFirstLetter(e),
      link: p,
    })
  })
  return list
}

export function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
