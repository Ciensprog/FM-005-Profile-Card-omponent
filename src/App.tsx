import { Attribution } from '@/components/Attribution'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 z-10">
        <div className="max-w-[21.875rem] relative rounded-2xl shadow-[0_50px_100px_-20px_rgba(8_70_94_/_0.50)] w-full">
          <img
            src="oval-top.png"
            className="absolute h-[61rem] left-0 max-w-none opacity-50 pointer-events-none rounded-full top-0 -translate-x-[82%] -translate-y-[72%] w-[61rem] -z-10"
          />
          <img
            src="oval-bottom.png"
            className="absolute h-[61rem] left-full max-w-none opacity-25 pointer-events-none rounded-full top-full -translate-x-[22%] -translate-y-[16%] w-[61rem] -z-10"
          />
          <div className="bg-slate-50 overflow-hidden rounded-2xl">
            <header className="h-[8.75rem]">
              <figure className="h-full">
                <img
                  src="banner.jpg"
                  className="h-full object-cover w-full"
                  alt="Banner"
                />
              </figure>
            </header>
            <section className="">
              <figure className="h-[6.625rem] mb-5 -mt-12 mx-auto w-[6.625rem]">
                <img
                  src="profile.jpg"
                  className="border-[0.3125rem] h-full border-white rounded-full w-full"
                  alt="Profile"
                />
              </figure>
              <div className="text-lg">
                <div className="flex justify-center gap-2">
                  <h3 className="font-bold">Victor Crest</h3>
                  <span className="text-grey-light">26</span>
                </div>
                <div className="mb-7 mt-2 text-center text-grey-light text-sm">
                  London
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Attribution />
    </>
  )
}
