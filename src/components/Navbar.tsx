/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Mission', href: '#' },
  { name: 'Roadmap', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Contact', href: '#' },
]

import Image from 'next/image'
import ConnectWallet from '@/components/ConnectWallet'
import toninasLogo from "@/assets/toninas.png"
export default function NavBar() {
  return (
    <header className="z-10 w-full bg-indigo-600/50">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Image
                className="w-auto h-10 rounded-full"
                src="/images/toninas.png"
                alt=""
                width="40" height="40"
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <ConnectWallet />
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}