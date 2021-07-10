import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1 className="title">glossary</h1>
      </Header>
      <main>
        <ul>
          <li>term</li>
        </ul>
      </main>
    </div>
  )
}
