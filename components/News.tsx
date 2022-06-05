import React from 'react'

function News() {
  return (
    <div className="my-4 flex flex-col ">
      <div className="duration-400 flex cursor-pointer items-start justify-start gap-4 py-4 px-4  transition hover:bg-gray-200">
        <div className="h-14 w-20 rounded-3xl ">
          <img
            src="https://pbs.twimg.com/semantic_core_img/1533047551699472385/X8uerXfl?format=jpg&name=120x120"
            alt="news"
            className="h-full w-full rounded-lg"
          />
        </div>
        <div
          className="flex flex-col justify-between gap-2"
          style={{ width: 'calc(100% - 80px)' }}
        >
          <p className="text-sm text-gray-500">
            News . <span>Yesterday</span>
          </p>
          <p className="ellipsis font-semibold">Earthquake in Kuwait</p>
        </div>
      </div>
      <div className="duration-400 flex cursor-pointer items-start justify-start gap-4 py-4 px-4  transition hover:bg-gray-200">
        {/* <div className="h-14 w-20 rounded-3xl ">
                <img
                  src="https://pbs.twimg.com/semantic_core_img/1533047551699472385/X8uerXfl?format=jpg&name=240x240"
                  alt="news"
                  className="h-full w-full rounded-lg"
                />
              </div> */}
        <div
          className="flex flex-col justify-between gap-2"
          style={{ width: 'calc(100% - 80px)' }}
        >
          <p className="text-sm text-gray-500">Trending in Egypt</p>
          <p className="ellipsis font-semibold">#السحابه_وصلت</p>
          <p>25.8K Tweets</p>
        </div>
      </div>
      <div className="duration-400 flex cursor-pointer items-start justify-start gap-4 py-4 px-4  transition hover:bg-gray-200">
        <div className="h-14 w-20 rounded-3xl ">
          <img
            src="https://pbs.twimg.com/media/FUd2an0WYAEITJF?format=jpg&name=120x120"
            alt="news"
            className="h-full w-full rounded-lg"
          />
        </div>
        <div
          className="flex flex-col justify-between gap-2"
          style={{ width: 'calc(100% - 80px)' }}
        >
          <p className="text-sm text-gray-500">
            5 hours ago . <span>مجلة هي </span>
          </p>
          <p className="ellipsis font-semibold">
            أول ظهور بعد غياب 15 عام.. تصريحات شيرين سيف النصر عن سبب اعتزالها
            وعودتها المنتظرة
          </p>
        </div>
      </div>
      <div className="duration-400 flex cursor-pointer items-start justify-start gap-4 py-4 px-4  transition hover:bg-gray-200">
        <div className="h-14 w-20 rounded-3xl ">
          <img
            src="https://pbs.twimg.com/semantic_core_img/1532710911546273792/KyCxZ1rC?format=jpg&name=120x120"
            alt="news"
            className="h-full w-full rounded-lg"
          />
        </div>
        <div
          className="flex flex-col justify-between gap-2"
          style={{ width: 'calc(100% - 80px)' }}
        >
          <p className="text-sm text-gray-500">
            War in Ukraine . <span>LIVE</span>
          </p>
          <p className="ellipsis font-semibold">
            Russia continues attacks in Eastern Ukraine
          </p>
        </div>
      </div>

      <div className="w-full cursor-pointer rounded-b-lg px-4 py-3 text-sm font-bold text-primary hover:bg-gray-200">
        <a href="#">Show more</a>
      </div>
    </div>
  )
}

export default News
