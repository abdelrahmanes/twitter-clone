import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  PencilIcon,
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'
function SideBar() {
  return (
    <div className="col-span-2 flex h-screen flex-col items-center  gap-2 px-4 lg:items-start">
      <div className="m-2 h-12 w-12 cursor-pointer p-2 hover:rounded-full hover:bg-blue-100">
        <img className="w-full " src="https://links.papareact.com/drq" />
      </div>

      <div className="mb-2 flex flex-col gap-2">
        <SideBarRow Icon={HomeIcon} title="Home" />
        <SideBarRow Icon={HashtagIcon} title="Explore" />
        <SideBarRow Icon={BellIcon} title="Notifications" />
        <SideBarRow Icon={MailIcon} title="Messages" />
        <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SideBarRow Icon={CollectionIcon} title="Lists" />
        <SideBarRow Icon={UserIcon} title="Profile" />
        <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
      </div>
      <button className="hidden w-full max-w-12 rounded-full  bg-primary px-10 py-3 font-bold text-white transition-all duration-200 hover:bg-primary_hover lg:inline">
        Tweet
      </button>
      <button className="rounded-full bg-primary p-3   text-white transition-all duration-200 hover:bg-primary_hover lg:hidden">
        <PencilIcon className="h-7 w-7 " />
      </button>
      <div className=" mt-auto mb-5 flex cursor-pointer items-center justify-between space-x-4  rounded-full  p-2 transition-all  duration-150 hover:bg-secondary_hover lg:py-2">
        <div className="h-12 w-12 ">
          <img src="/user.jpg" className="w-full rounded-full object-cover" />
        </div>
        <div className="hidden lg:inline">
          <p className="text-lg">🇪🇬❤️🇵🇸</p>
          <p className="text-xs">@superdo2do2</p>
        </div>
        <div className="ml-auto hidden lg:inline">
          <DotsCircleHorizontalIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

export default SideBar
