/**
 * How to persist layout in nextjs:
 * There are many ways to persist layout in nextjs
 * 
 * /
 
 /**
 * 1. use a single shared layout in custome app component
 */
// /pages/_app_.js
import React from 'react'
import App from 'next/app'
import GlobalLayout from './components/GlobalLayout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <GlobalLayout>
        <Component {...pageProps}></Component>
      </GlobalLayout>
    )
  }
}

export default MyApp

/**
 * 1. Render a different layout in `<App>` based on the current URL
 *
 * https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
 */