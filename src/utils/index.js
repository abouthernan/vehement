export const hyphenToUnderscore = (slug) => {
  return slug.split('-').join('_')
}

export const concatImgToObject = (obj, images) => obj.map(item => ( 
  {
    ...item,
    img: images[hyphenToUnderscore(item.slug)]
  } 
))

export const generateSlug = service => {
  return service 
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .trim()
}
