import Footer from './pages/footer'
import Home from './pages/home'
import Story from './pages/story'
import Vision from './pages/vision'
import Head from 'next/head'


export default function Main() {
  return (
    <>
      <Head>
        <title>Altitude</title>
        <meta name="description" content="Sharing our passion for coffee to everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Home />
        <Story />
        <Vision />
        <Footer />
    </>
  )
}
