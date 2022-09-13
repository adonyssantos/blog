const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate(lang) {
  const feed = new RSS({
    title: 'Adonys Santos RSS',
    site_url: 'https://www.adonys.me',
    feed_url: `https://blog.adonys.me/${lang}/feed.xml`
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', lang))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', lang, name)
      )
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `/${lang}/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  await fs.writeFile(`./public/${lang}/feed.xml`, feed.xml({ indent: true }))
}

generate('en')
generate('es')
