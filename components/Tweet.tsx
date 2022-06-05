import React, { Fragment, useEffect, useState } from 'react'
import { Comment, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  DotsHorizontalIcon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import CommentComponent from './Comment'
import { fetchComments } from '../utils/fetchComments'
interface Props {
  tweet: Tweet
}
function Tweet({ tweet }: Props) {
  const [comments, setcomments] = useState<Comment[]>([])
  const [showComments, setshowComments] = useState(false)
  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id)
    setcomments(comments)
  }
  const toggleShowComments = () => {
    setshowComments(!showComments)
  }
  useEffect(() => {
    refreshComments()
  }, [])

  console.log(comments)

  return (
    <div className="cursor-pointer border-t p-5 pb-0 transition duration-200 hover:bg-gray-50">
      <div className="flex items-start justify-start space-x-2">
        <div className="h-12 w-12">
          <img
            src={tweet.profileImage}
            className="w-full rounded-full object-cover "
          />
        </div>
        <div className="flex flex-col" style={{ width: 'calc(100% - 50px)' }}>
          <div className="flex items-start justify-start gap-1 ">
            <div className="flex items-center  gap-2 sm:gap-0">
              <div className="flex  items-center justify-start ">
                <p>{tweet.username}</p>
                <p className=" mx-1 hidden text-sm text-gray-400 sm:inline">
                  @{tweet.handle}{' '}
                  <span className="mr-1 hidden md:inline">.</span>
                </p>
              </div>

              <TimeAgo
                date={tweet._createdAt}
                className="text-sm text-gray-400"
              />
            </div>
            <div className="ml-auto">
              <DotsHorizontalIcon className="h-5 w-5 text-gray-400 " />
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
              <div
                className="flex cursor-pointer items-center justify-start rounded-full p-2 text-gray-400 hover:bg-blue-100 hover:text-primary_hover"
                onClick={toggleShowComments}
              >
                <ChatAlt2Icon className="h-5 w-5 " />
                <div>{comments.length}</div>
              </div>
              <div className="cursor-pointer rounded-full p-2 text-gray-400 hover:bg-retweet hover:bg-opacity-10 hover:text-retweet">
                <SwitchHorizontalIcon className="h-5 w-5 cursor-pointer " />
              </div>
              <div className="cursor-pointer rounded-full p-2 text-gray-400 hover:bg-like hover:bg-opacity-10 hover:text-like">
                <HeartIcon className="h-5 w-5 cursor-pointer " />
              </div>
              <div className="cursor-pointer rounded-full p-2 text-gray-400 hover:bg-blue-100 hover:text-primary_hover">
                <UploadIcon className="h-5 w-5 cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          showComments ? '' : 'hidden'
        } ml-20 max-h-44 overflow-y-scroll`}
      >
        <Fragment>
          {comments?.length > 0 &&
            comments.map((comment) => {
              return (
                <CommentComponent
                  key={comment._id}
                  comment={comment}
                  comments={comments}
                />
              )
            })}
        </Fragment>
      </div>
    </div>
  )
}

export default Tweet
