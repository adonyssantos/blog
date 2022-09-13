import { useRouter } from 'next/router'

export default function () {
  const router = useRouter()
  const lang = router.pathname.split('/')[1]

  return <a href={`/${lang}/feed.xml`}>RSS</a>
}
