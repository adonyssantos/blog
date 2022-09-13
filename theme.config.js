const YEAR = new Date().getFullYear()
const AUTHOR = <a href="https://www.adonys.me/">www.adonys.me</a>

export default {
  projectLink: 'https://github.com/adonyssantos/blog',
  titleSuffix: ' | Adonys Santos',
  nextLinks: true,
  prevLinks: true,
  search: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © {AUTHOR}.<a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
