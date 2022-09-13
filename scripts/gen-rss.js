const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Adonys Santos',
    site_url: 'https://www.adonys.me',
    feed_url: 'https://blog.adonys.me/feed.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'en'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'en', name)
      )
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: '/en/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
