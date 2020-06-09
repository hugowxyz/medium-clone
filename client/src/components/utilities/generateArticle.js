const phrases = [
  'Hard Pill to Swallow',
  'Right Off the Bat',
  'Up In Arms',
  'All Greek To Me',
  'Fit as a Fiddle',
  'Playing For Keeps',
  'Short End of the Stick',
  'Goody Two-Shoes',
]

const generateArticle = (amount) => {
  let articles = []
  for (let i = 0; i<amount; i++) {
    const article = {
      title: phrases[Math.floor(Math.random() * Math.floor(phrases.length-1))],
      teaser: phrases[Math.floor(Math.random() * Math.floor(phrases.length-1))],
      metadata: {
        why: 'Based on your reading history',
        date: '8 Jun',
        publisher: 'Dubious Cowboys',
        length: 10
      }
    }
    articles.push(article)
    }

  return articles
}

export default generateArticle