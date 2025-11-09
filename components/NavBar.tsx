'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <div className="bg-gray-800 py-2">
          <div className="container mx-auto px-4 xl:px-8">
            <p className="text-center text-white text-sm font-proxima-nova">
              オンラインストア発送遅延のおしらせ
            </p>
          </div>
        </div>
        
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 xl:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <a href="/" className="block relative w-32 h-10">
                    <Image
                      src="/images/logo-owndays.png"
                      alt="OWNDAYS"
                      width={128}
                      height={40}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </a>
                </div>
                
                <nav className="flex items-center space-x-6 font-proxima-nova">
                  <a href="#" className="text-sm hover:text-gray-600 transition-colors">
                    商品検索
                  </a>
                  <a href="#" className="text-sm hover:text-gray-600 transition-colors">
                    ブランド
                  </a>
                  <a href="#" className="text-sm hover:text-gray-600 transition-colors">
                    レンズ
                  </a>
                  <a href="#" className="text-sm hover:text-gray-600 transition-colors">
                    OWNDAYSについて
                  </a>
                  <a href="#" className="text-sm hover:text-gray-600 transition-colors">
                    店舗検索
                  </a>
                </nav>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm text-gray-700 font-proxima-nova">0pt (円相当)</span>
                </div>
                
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Wishlist">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Shopping Cart">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute top-0 right-0 w-5 h-5 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center font-proxima-nova">
                    4
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border-b border-gray-200 py-2">
          <div className="container mx-auto px-4 xl:px-8">
            <nav className="text-sm text-gray-600 font-proxima-nova flex items-center gap-2">
              <span>メガネのOWNDAYS トップ</span>
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>ニュース</span>
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>みんなメガネ割</span>
            </nav>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        <div className="px-4 py-3 flex items-center justify-between bg-white border-b border-gray-200">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Shopping Cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-0 right-0 w-4 h-4 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center font-proxima-nova">0</span>
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <div className="flex-1 flex justify-center">
            <a href="/" className="block relative w-24 h-8">
              <Image
                src="/images/logo-owndays-1x.png"
                alt="OWNDAYS"
                width={96}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </a>
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Call">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        
        <div className="bg-white border-b border-gray-200 py-2">
          <div className="container mx-auto px-4">
            <nav className="text-xs text-gray-600 font-proxima-nova flex items-center gap-1.5">
              <span>メガネのOWNDAYS トップ</span>
              <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>ニュース</span>
              <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>みんなメガネ割</span>
            </nav>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <nav className="px-4 pb-4 space-y-2 border-t border-gray-200 bg-white">
            <a href="#" className="block py-2 text-sm font-proxima-nova hover:bg-gray-50 transition-colors">商品検索</a>
            <a href="#" className="block py-2 text-sm font-proxima-nova hover:bg-gray-50 transition-colors">ブランド</a>
            <a href="#" className="block py-2 text-sm font-proxima-nova hover:bg-gray-50 transition-colors">レンズ</a>
            <a href="#" className="block py-2 text-sm font-proxima-nova hover:bg-gray-50 transition-colors">OWNDAYSについて</a>
            <a href="#" className="block py-2 text-sm font-proxima-nova hover:bg-gray-50 transition-colors">店舗検索</a>
          </nav>
        )}
      </nav>
    </header>
  )
}
