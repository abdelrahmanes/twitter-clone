import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import React from 'react'
import ReactTimeago from 'react-timeago'
import { Comment, Tweet } from '../typings'

interface Props {
  comment: Comment
  comments: Comment[]
}

function Comment({ comment, comments }: Props) {
  return (
    <div className="relative flex items-start justify-start mb-6 space-x-2">
      {/* making big rounded border to fix the height of the hr dilemma */}
      <div className="w-12 h-12 mb-2 border-white rounded-full border-5">
        <img
          src={comment.profileImage}
          className="object-cover w-full rounded-full "
        />
      </div>
      <div className="flex flex-col" style={{ width: 'calc(100% - 50px)' }}>
        <div className="flex items-start justify-start gap-1 ">
          <p>{comment.username}</p>
          <p className="text-sm text-gray-400">
            @{comment.handle} <span>.</span>
          </p>

          <ReactTimeago
            date={comment._createdAt}
            className="text-sm text-gray-400"
          />
        </div>
        <div className="mt-1">
          <div>{comment.comment}</div>
          {comment.image && (
            <div className="mt-4 ">
              <img
                src={comment.image}
                className="object-cover w-full rounded-lg shadow-sm max-h-80"
              />
            </div>
          )}
          {/* remove the hr from the last comment */}
          {comments.indexOf(comment) !== comments.length - 1 && (
            <hr className="absolute w-1 h-full mt-1 ml-1 bg-gray-200 border border-gray-200 max-h-hr top-12 left-5"></hr>
          )}
          <div className="flex justify-between mt-2 mb-3 max-w-5/6">
            <div className="p-2 text-gray-400 rounded-full cursor-pointer hover:bg-blue-100 hover:text-primary_hover">
              <ChatAlt2Icon className="w-5 h-5 " />
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
  )
}

export default Comment
