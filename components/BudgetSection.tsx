'use client'

import Image from 'next/image'
import ArrowButton from './ArrowButton'
import SpeechBubble from './SpeechBubble'
import ProductCarousel from './ProductCarousel'
import OnlineStoreButton from './OnlineStoreButton'
import PriceDisplay from './PriceDisplay'
import { Product } from '@/lib/types'

interface PriceRange {
  title: string
  suffix?: string
  products: Product[]
}

export default function BudgetSection() {
  const priceRanges: PriceRange[] = [
    { 
      title: '20,000円',
      suffix: '以上',
      products: [
        { id: 1, name: '千一作', model: 'SENICHI12 C2', price: '¥20,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product1.png', imageMobile: '/images/Section5/product1-1x.png' },
        { id: 2, name: 'marcus raw', model: 'MR-001', price: '¥20,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product2.png', imageMobile: '/images/Section5/product2-1x.png' },
        { id: 3, name: '千一作', model: 'SENICHI12 C2', price: '¥20,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product3.png', imageMobile: '/images/Section5/product3-1x.png' },
        { id: 4, name: 'OWNDAYS × HUAWEI Eyewear 2', model: 'HW-002', price: '¥20,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product4.png', imageMobile: '/images/Section5/product4-1x.png' },
      ]
    },
    { 
      title: '10,000円',
      suffix: '台',
      products: [
        { id: 5, name: 'AIR', model: 'AIR-001', price: '¥10,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product5.png', imageMobile: '/images/Section5/product5-1x.png' },
        { id: 6, name: 'Graph Belle', model: 'GB-001', price: '¥10,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product6.png', imageMobile: '/images/Section5/product6-1x.png' },
        { id: 7, name: 'AIR', model: 'AIR-002', price: '¥10,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product7.png', imageMobile: '/images/Section5/product7-1x.png' },
        { id: 8, name: 'SUN', model: 'SUN-001', price: '¥10,000', tax: '税込', category: 'サングラス', image: '/images/Section5/product8.png', imageMobile: '/images/Section5/product8-1x.png' },
      ]
    },
    { 
      title: '8,000円',
      suffix: '以下',
      products: [
        { id: 9, name: 'ESSENTIAL', model: 'ESS-001', price: '¥8,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product9.png', imageMobile: '/images/Section5/product9-1x.png' },
        { id: 10, name: 'SUN', model: 'SUN-002', price: '¥8,000', tax: '税込', category: 'サングラス', image: '/images/Section5/product10.png', imageMobile: '/images/Section5/product10-1x.png' },
        { id: 11, name: 'Junni', model: 'JUN-001', price: '¥8,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product11.png', imageMobile: '/images/Section5/product11-1x.png' },
        { id: 12, name: 'ESSENTIAL', model: 'ESS-002', price: '¥8,000', tax: '税込', category: 'メガネ', image: '/images/Section5/product12.png', imageMobile: '/images/Section5/product12-1x.png' },
      ]
    },
  ]

  const getFullRangeText = (range: PriceRange) => {
    return range.suffix ? `${range.title}${range.suffix}` : range.title
  }

  return (
    <section className="w-full bg-white py-20 md:py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-24">
          <div className="flex justify-center mb-4">
            <SpeechBubble label="BUDGET" arrowPosition="right" align="center" />
          </div>
          
          <div className="text-center mb-10 lg:mb-16 font-mizolet font-bold">
            <p className="text-2xl lg:text-3xl font-bold mb-1">予算から選ぶ</p>
            <p className="text-md lg:text-sm">メガネ・サングラス</p>
          </div>
          
          <div className="lg:max-w-4xl mx-auto grid grid-cols-3 gap-4 lg:gap-6">
            {priceRanges.map((range, index) => (
              <button
                key={index}
                className="group bg-white border-2 border-black rounded-lg p-3 lg:p-2 flex flex-col lg:flex-row items-center lg:items-stretch justify-between hover:bg-gray-50 transition-colors min-h-[80px]"
              >
                <span className="text-md lg:text-lg text-center lg:text-left mb-2 lg:mb-0 font-mizolet font-bold flex flex-1 items-center justify-center lg:justify-center">{getFullRangeText(range)}</span>
                <div className="hidden lg:flex items-center gap-4">
                  <div className="w-[2px] h-full bg-black" aria-hidden="true" />
                  <ArrowButton direction="down" size="sm" asDiv />
                </div>
                <div className="lg:hidden">
                  <ArrowButton direction="down" size="sm" asDiv />
                </div>
              </button>
            ))}
          </div>
        </div>

        {priceRanges.map((range, rangeIndex) => (
          <div key={rangeIndex} className="mb-16 lg:mb-20">
            <h3 className="font-bold mb-6 lg:mb-8 text-center underline decoration-black decoration-2 underline-offset-[24px]">
              <span className="text-owndays-yellow text-stroke-1-black text-2xl lg:text-3xl">{range.title}</span>
              {range.suffix && <span className="text-lg lg:text-xl">{range.suffix}</span>}
            </h3>

            <div className="hidden lg:grid lg:grid-cols-4 gap-6 mt-16 my-12">
              {range.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow font-outfit text-center flex flex-col h-full">
                  <div className="relative w-full h-48 mb-4">
                    <Image 
                      src={product.image} 
                      alt={`${product.name} ${product.model} - OWNDAYS メガネ`} 
                      fill 
                      className="object-contain" 
                      loading="lazy" 
                      sizes="(max-width: 1024px) 25vw, 256px" 
                    />
                  </div>
                  <p className="font-bold text-base mb-1">{product.name}</p>
                  <p className="text-xs mb-3">{product.model}</p>
                  <PriceDisplay price={product.price} tax={product.tax} />
                  <div className="flex justify-center mt-auto">
                    <OnlineStoreButton productName={product.name} variant="rounded" size="md" className="w-auto" />
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:hidden mt-8 mb-3">
              <ProductCarousel key={rangeIndex} products={range.products} />
            </div>

            <div className="flex justify-center">
              <div className="hidden lg:flex group bg-white border-t-2 border-l-2 border-r-2 border-b-[4px] border-black rounded-full px-8 py-4 items-center gap-3 hover:shadow-lg transition-shadow font-bold">
                <span className="text-sm whitespace-nowrap">
                  {getFullRangeText(range)}の商品を見る
                </span>
                <ArrowButton direction="right" size="sm" onClick={() => {}} />
              </div>
              
              <div className="lg:hidden group bg-white border-t-2 border-l-2 border-r-2 border-b-[4px] border-black rounded-full p-2 flex items-center justify-between gap-3 hover:shadow-lg transition-shadow font-bold w-full max-w-xs">
                <div className="text-sm whitespace-nowrap px-6">
                  {getFullRangeText(range)}の商品を見る
                </div>
                <ArrowButton direction="right" size="sm" onClick={() => {}} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
