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
    <div className="flex p-5 space-x-3">
      <div className="h-14 w-14">
        <img src="/user.jpg" className="object-cover w-full rounded-full"></img>
      </div>

      <form
        className="flex flex-col py-3 space-y-4"
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
            <PhotographIcon className="p-2 transition-transform duration-150 ease-out rounded-full cursor-pointer h-9 w-9 text-primary hover:bg-blue-100" />
            <SearchCircleIcon className="p-2 transition-transform duration-150 ease-out rounded-full cursor-pointer h-9 w-9 text-primary hover:bg-blue-100" />
            <EmojiHappyIcon className="p-2 transition-transform duration-150 ease-out rounded-full cursor-pointer h-9 w-9 text-primary hover:bg-blue-100" />
            <CalendarIcon className="hidden p-2 transition-transform duration-150 ease-out rounded-full cursor-pointer md:inline h-9 w-9 text-primary hover:bg-blue-100" />
            <LocationMarkerIcon className="p-2 transition-transform duration-150 ease-out rounded-full cursor-pointer 9-5 w-9 text-primary hover:bg-blue-100" />
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
