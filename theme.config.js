import RssLink from './components/rss-link'
import CopyrightText from './components/copyright-text'

export default {
  projectLink: 'https://github.com/adonyssantos/blog',
  titleSuffix: ' | Adonys Santos',
  nextLinks: true,
  prevLinks: true,
  search: true,
  footer: (
    <small
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8rem'
      }}
    >
      <CopyrightText />
      <RssLink />
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
