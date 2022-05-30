import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  DotsHorizontalIcon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
interface Props {
  tweet: Tweet
}
function Tweet({ tweet }: Props) {
  console.log(tweet)

  return (
    <div className="border-y p-5 pb-0">
      <div className="flex  items-start justify-start space-x-2">
        <div className="h-12 w-12">
          <img
            src={tweet.profileImage}
            className="w-full rounded-full object-cover "
          />
        </div>
        <div className="flex flex-col" style={{ width: 'calc(100% - 50px)' }}>
          <div className="flex items-start justify-start gap-1 ">
            <p>{tweet.username}</p>
            <p className="text-sm text-gray-400">
              @{tweet.handle} <span>.</span>
            </p>

            <TimeAgo
              date={tweet._createdAt}
              className="text-sm text-gray-400"
            />
            <div className="ml-auto">
              <DotsHorizontalIcon className=" h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="mt-1">
            <div>{tweet.text}</div>
            {tweet.image && (
              <div className="mt-4">
                <img
                  src={tweet.image}
                  className="max-h-80 w-full rounded-lg object-cover shadow-sm"
                />
              </div>
            )}

            <div className="mt-2 mb-3 flex max-w-5/6 justify-between space-x-5">
              <div className="cursor-pointer rounded-full p-2 text-gray-400 hover:bg-blue-100 hover:text-primary_hover">
                <ChatAlt2Icon className="h-5 w-5 " />
              </div>
              <div className="cursor-pointer rounded-full p-2 text-gray-400 hover:bg-retweet hover:bg-opacity-10  hover:text-retweet">
                <SwitchHorizontalIcon className="h-5 w-5 cursor-pointer " />
              </div>
              <div className="cursor-pointer rounded-full p-2 text-gray-400 hover:bg-like hover:bg-opacity-10  hover:text-like">
                <HeartIcon className="h-5 w-5 cursor-pointer " />
              </div>
              <div className="cursor-pointer rounded-full p-2 text-gray-400 hover:bg-blue-100 hover:text-primary_hover">
                <UploadIcon className="h-5 w-5 cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
