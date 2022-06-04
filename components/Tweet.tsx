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
    <div className="p-5 pb-0 border-y">
      <div className="flex items-start justify-start space-x-2">
        <div className="w-12 h-12">
          <img
            src={tweet.profileImage}
            className="object-cover w-full rounded-full "
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
              <DotsHorizontalIcon className="w-5 h-5 text-gray-400 " />
            </div>
          </div>
          <div className="mt-1">
            <div>{tweet.text}</div>
            {tweet.image && (
              <div className="mt-4">
                <img
                  src={tweet.image}
                  className="object-cover w-full rounded-lg shadow-sm max-h-80"
                />
              </div>
            )}

            <div className="flex justify-between mt-2 mb-3 space-x-5 max-w-5/6">
              <div
                className="flex items-center justify-start p-2 text-gray-400 rounded-full cursor-pointer hover:bg-blue-100 hover:text-primary_hover"
                onClick={toggleShowComments}
              >
                <ChatAlt2Icon className="w-5 h-5 " />
                <div>{comments.length}</div>
              </div>
              <div className="p-2 text-gray-400 rounded-full cursor-pointer hover:bg-retweet hover:bg-opacity-10 hover:text-retweet">
                <SwitchHorizontalIcon className="w-5 h-5 cursor-pointer " />
              </div>
              <div className="p-2 text-gray-400 rounded-full cursor-pointer hover:bg-like hover:bg-opacity-10 hover:text-like">
                <HeartIcon className="w-5 h-5 cursor-pointer " />
              </div>
              <div className="p-2 text-gray-400 rounded-full cursor-pointer hover:bg-blue-100 hover:text-primary_hover">
                <UploadIcon className="w-5 h-5 cursor-pointer " />
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
