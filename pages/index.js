import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getRoute } from '../utilities/get-route'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace(getRoute())
  }, [])

  return <h1>Redirecting...</h1>
}
