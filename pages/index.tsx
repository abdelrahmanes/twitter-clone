import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
  console.log(tweets)

  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Toaster />
      <main className="m-0 grid w-full grid-cols-9 lg:m-auto lg:w-5/6">
        {/* sideBar */}
        <SideBar />
        {/* Feed */}
        <Feed tweets={tweets} />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets()
  return {
    props: {
      tweets,
    },
  }
}
