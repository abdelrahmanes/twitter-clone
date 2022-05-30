import React, { SVGProps } from 'react'
interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}
function SideBarRow({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit cursor-pointer items-center  space-x-2 rounded-full p-3 transition-all duration-150  hover:bg-secondary_hover lg:py-2 lg:px-4">
      <Icon className="h-7 w-7" />
      <p className="hidden lg:inline">{title}</p>
    </div>
  )
}

export default SideBarRow
