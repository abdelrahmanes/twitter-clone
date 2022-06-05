import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import News from './News'
import WhoToFollow from './WhoToFollow'

function Widgets() {
  return (
    <aside className="col-span-2 mt-2 hidden px-2 xl:inline">
      <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search twitter"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="mx-1">
        <div className="my-4 rounded-lg bg-gray-100   pt-1">
          <h1 className="my-2 px-4 text-xl font-bold">What' happening</h1>
          <News />
        </div>
        <div className="my-4 rounded-lg bg-gray-100   pt-1">
          <h1 className="my-2 px-4 text-xl font-bold">Who to follow</h1>
          <WhoToFollow />
        </div>
      </div>
      {/* <TwitterTimelineEmbed
        sourceType="profile"
        screenName="superdo2do2"
        options={{ height: '92vh' }}
      /> */}
    </aside>
  )
}

export default Widgets
