export default function () {
  const YEAR = new Date().getFullYear()
  return (
    <footer>
      <time>{YEAR}</time> © <a href="https://www.adonys.me/">www.adonys.me</a>.
    </footer>
  )
}
