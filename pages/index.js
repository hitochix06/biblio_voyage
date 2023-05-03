import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Connexion from '@/pages/connexion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Road trip voyage</title>
        <meta name="description" content="Road trip voyage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar> </Navbar>



    </>
  )
}
