import React from 'react'

function WhoToFollow() {
  return (
    <div>
      <div className="duration-400 cursor-pointer transition hover:bg-gray-200">
        <div className="flex justify-start p-4 ">
          <div className="h-14 w-14">
            <img
              className="h-full w-full rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="john doe"
            />
          </div>
          <div className="mx-2 w-20">
            <p className="font-semibold">John Doe</p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-500">
              @johndoejohndoejohndoe
            </p>
          </div>
          <button
            style={{ width: 'calc(100% - 200px)' }}
            className=" ml-auto h-10 rounded-full  bg-black text-sm font-semibold text-white"
          >
            Follow
          </button>
        </div>
      </div>
      <div className="duration-400 cursor-pointer transition hover:bg-gray-200">
        <div className="flex justify-start p-4 ">
          <div className="h-14 w-14">
            <img
              className="h-full w-full rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="john doe"
            />
          </div>
          <div className="mx-2 w-20">
            <p className="font-semibold">John Doe</p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-500">
              @johndoejohndoejohndoe
            </p>
          </div>
          <button
            style={{ width: 'calc(100% - 200px)' }}
            className=" ml-auto h-10 rounded-full  bg-black text-sm font-semibold text-white"
          >
            Follow
          </button>
        </div>
      </div>
      <div className="duration-400 cursor-pointer transition hover:bg-gray-200">
        <div className="flex justify-start p-4 ">
          <div className="h-14 w-14">
            <img
              className="h-full w-full rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="john doe"
            />
          </div>
          <div className="mx-2 w-20">
            <p className="font-semibold">John Doe</p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-500">
              @johndoejohndoejohndoe
            </p>
          </div>
          <button
            style={{ width: 'calc(100% - 200px)' }}
            className=" ml-auto h-10 rounded-full  bg-black text-sm font-semibold text-white"
          >
            Follow
          </button>
        </div>
      </div>
      <div className="w-full cursor-pointer rounded-b-lg px-4 py-3 text-sm font-bold text-primary hover:bg-gray-200">
        <a href="#">Show more</a>
      </div>
    </div>
  )
}

export default WhoToFollow
