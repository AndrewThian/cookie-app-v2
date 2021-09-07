export interface MainCTAProps {
  title: string
  subTitle: string
}

export const MainCTA: React.FC<MainCTAProps> = ({ title, subTitle }) => {
  return (
    <div className="mt-28">
      <div className="px-2">
        <h1 className="text-grey-400">{title}</h1>
        <div className="rounded-lg-mid bg-blue-200 m-auto items-end -mt-12 flex home-page_main-block">
          <p className="text-base text-center">{subTitle}</p>
        </div>
      </div>
      <div className="flex gap-x-3.5 mt-4 justify-center">
        <div className="w-7 h-1.5 rounded-lg bg-blue-400"></div>
        <div className="w-7 h-1.5 rounded-lg bg-blue-300"></div>
        <div className="w-7 h-1.5 rounded-lg bg-blue-300"></div>
        <div className="w-7 h-1.5 rounded-lg bg-blue-300"></div>
      </div>
    </div>
  )
}
