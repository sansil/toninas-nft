import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import NavBar from '@/components/Navbar'
import VideoHero from '@/components/VideoHero'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

const Home: FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 dark:bg-gray-900 sm:items-center sm:pt-0">
      <VideoHero />
      <NavBar></NavBar>
      <ThemeSwitcher className="absolute bottom-6 right-6" />
      <div className="z-10 mx-auto mt-8 max-w-7xl lg:px-8 sm:mt-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="#"
                className="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-sm font-semibold leading-5 bg-indigo-500 rounded-full">
                  early access
                </span>
                <span className="ml-4 text-sm">join our whitelist</span>
                <ChevronRightIcon className="w-5 h-5 ml-2 text-gray-500" aria-hidden="true" />
              </a>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl sm:tracking-tight lg:mt-6 xl:text-6xl xl:tracking-tight">
                <span className="block">Save the dolphins</span>
                <span className="block text-indigo-400">Minting NFT</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="mt-3 sm:mt-0 ">
                      <button
                        type="submit"
                        className="block w-full px-4 py-3 font-medium text-indigo-500 bg-white rounded-md shadow hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                      >
                        Green paper
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full px-4 py-3 font-medium text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                      >
                        Mint your dolphin NFT
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                    our{' '}
                    <a href="#" className="font-medium text-white">
                      terms of service
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home