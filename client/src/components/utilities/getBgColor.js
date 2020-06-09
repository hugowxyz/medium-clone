const getBgColor = () => {
  const colors = ['#f5f5dc', '#ebeb70', '#64c564', '#a03131']

  return {
    backgroundColor: colors[Math.floor(Math.random() * Math.floor(3))]
  }
}

export default getBgColor