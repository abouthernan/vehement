export const hyphenToUnderscore = (slug) => {
  return slug.split('-').join('_')
}

export const concatImgToObject = (obj, images) => obj.map(item => ( 
  {
    ...item,
    img: images[hyphenToUnderscore(item.slug)]
  } 
))
