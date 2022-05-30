import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import React, { useState } from 'react'

function TweetBox() {
  const [input, setInput] = useState<string>('')
  return (
    <div className="flex space-x-3 p-5">
      <div className="h-14 w-14">
        <img src="/user.jpg" className="w-full rounded-full object-cover"></img>
      </div>

      <form
        className="flex  flex-col space-y-4 py-3"
        style={{ width: 'calc(100% - 76px)' }}
      >
        <input
          value={input}
          type="text"
          placeholder="What's happening?"
          className="bg-transparent px-1.5 outline-none"
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <div className="flex items-center justify-between">
          <div className="flex justify-start space-x-2">
            <PhotographIcon className="h-9 w-9 cursor-pointer rounded-full p-2 text-primary transition-transform duration-150 ease-out hover:bg-blue-100" />
            <SearchCircleIcon className="h-9 w-9 cursor-pointer rounded-full p-2 text-primary transition-transform duration-150 ease-out hover:bg-blue-100" />
            <EmojiHappyIcon className="h-9 w-9 cursor-pointer rounded-full p-2 text-primary transition-transform duration-150 ease-out hover:bg-blue-100" />
            <CalendarIcon className="h-9 w-9 cursor-pointer rounded-full p-2 text-primary transition-transform duration-150 ease-out hover:bg-blue-100" />
            <LocationMarkerIcon className="9-5 w-9 cursor-pointer rounded-full p-2 text-primary transition-transform duration-150 ease-out hover:bg-blue-100" />
          </div>
          <button
            className=" rounded-full  bg-primary px-5 py-1.5 font-bold text-white transition-all duration-200 hover:bg-primary_hover disabled:opacity-40 disabled:hover:bg-primary"
            disabled={!input}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  )
}

export default TweetBox
