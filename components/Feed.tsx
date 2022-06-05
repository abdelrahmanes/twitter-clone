import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from '../components/Tweet'
import toast from 'react-hot-toast'
import { fetchTweets } from '../utils/fetchTweets'
interface Props {
  tweets: Tweet[]
}
function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState(tweetsProp)
  const handleRefresh = async () => {
    const refreshToast = toast.loading('Loading...')
    const tweets = await fetchTweets()
    setTweets(tweets)
    toast.success('Feed Updated!', {
      id: refreshToast,
    })
  }
  return (
    <div
      id="scorll"
      className=" col-span-7 h-screen overflow-y-scroll border-x xl:col-span-5"
    >
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-lg font-bold">Home</h1>
        <div onClick={handleRefresh} className="">
          <RefreshIcon className="mt-5 mr-5 h-6 w-6 cursor-pointer text-primary transition-all duration-500 ease-out hover:rotate-180 active:scale-125 " />
        </div>
      </div>

      {/* tweet box */}
      <div>
        <TweetBox />
      </div>
      <div className="border-b border-gray-200">
        {tweets.map((tweet) => {
          return <TweetComponent key={tweet._id} tweet={tweet} />
        })}
      </div>
    </div>
  )
}

export default Feed
