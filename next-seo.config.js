const description = `Welcome to my portfolio website, Data Science Gal. Explore my projects, expertise, and achievements in the field of data science. Discover how I leverage data to uncover valuable insights, build predictive models, and drive informed decision-making. Get a glimpse of my diverse skill set, including machine learning, statistical analysis, data visualization, and more. Join me on this data-driven journey and immerse yourself in the exciting world of data science through my projects and blog posts.`
const title = `Jiannina Pinto - Data Science Gal`
const url = `https://datasciencegal.com`

const seo = {
  title,
  titleTemplate: '%s | DataScienceGal',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@DSGal',
    site: '@DSGal'
  }
}

export { seo as defaultSEO, url as defaultUrl }
