import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Layout = (props) => (
  <React.Fragment>
    <nav>
      <Head>
        <link rel="stylesheet" href="static/style.css" />

        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

      </Head>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <style jsx>{`
     
    `}</style>
    </nav>
    <header>

    </header>
    <main className="container">
      {props.children}
    </main>
    <footer>

    </footer>
  </React.Fragment>
)

export default Layout
