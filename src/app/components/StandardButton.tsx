import React from 'react'

type Props = {
    action:()=>any;
    status?:boolean;
    title:string;
    description:string;
}

const StandardButton = ({action,status,title,description}: Props) => {
  return (
    <a
          onClick={action}
          className="border  cursor-pointer  group rounded-lg border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title}
          </h2>
          <p className={`m-0 w-full text-sm opacity-50`}>
            {description}
          </p>
        </a>
  )
}

export default StandardButton