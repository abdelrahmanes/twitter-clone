import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from '../components/Tweet'
interface Props {
  tweets: Tweet[]
}
function Feed({ tweets }: Props) {
  return (
    <div className="h-screen col-span-7 overflow-y-scroll border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-lg font-bold">Home</h1>
        <RefreshIcon className="w-6 h-6 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-primary hover:rotate-180 active:scale-125 " />
      </div>

      {/* tweet box */}
      <div>
        <TweetBox />
      </div>
      <div>
        {tweets.map((tweet) => {
          return <TweetComponent key={tweet._id} tweet={tweet} />
        })}
      </div>
    </div>
  )
}

export default Feed
