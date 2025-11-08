import React from 'react'
import Image from 'next/image'
import ArrowButton from './ArrowButton'
import OptionsList from './OptionsList'
import SpeechBubble from './SpeechBubble'
import ProductCard from './ProductCard'

export default function FamilySection() {
  const products = [
    { 
      id: 1, 
      name: 'AIR', 
      model: 'AU2101E-3A C3 カーキ',
      price: '¥11,000',
      tax: '税込',
      category: 'GLASSES',
      image: '/images/Section3/AU2101E-3A_C3.png',
      imageMobile: '/images/Section3/AU2101E-3A_C3-1x.png'
    },
    { 
      id: 2, 
      name: 'SUN', 
      model: 'SUN2107N-4S C1 ブラック',
      price: '¥8,000',
      tax: '税込',
      category: 'SUNGLASSES',
      image: '/images/Section3/SUN2107N-4S_C1.png',
      imageMobile: '/images/Section3/SUN2107N-4S_C1-1x.png'
    },
    { 
      id: 3, 
      name: 'Junni', 
      model: 'JU2037N-4S C3 クリアブルー',
      price: '¥7,000',
      tax: '税込',
      category: 'KIDS GLASSES',
      image: '/images/Section3/JU2037N-4S_C3.png',
      imageMobile: '/images/Section3/JU2037N-4S_C3-1x.png'
    },
  ]

  const options = [
    {
      id: 1,
      title: '傷防止コート',
      description: '「レンズの傷が気になる方」におすすめ! ブルーライトカット機能を搭載した、傷に強い特殊コーティング。',
      price: '+¥6,000',
      tax: '税込'
    },
    {
      id: 2,
      title: 'UV・PCダブルカットレンズ',
      description: '目や肌に影響を与えるUV-A、UV-Bをカット。パソコンやスマホから出るブルーライトもカット。',
      price: '+¥6,000',
      tax: '税込'
    },
  ]

  return (
    <section className="w-full bg-owndays-green-3 py-8 lg:py-16 relative overflow-hidden rounded-t-[5rem] lg:rounded-t-[10rem] -mt-8 lg:-mt-8 z-10">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-6 mt-12 lg:my-24">
            <div className="relative w-1/2 h-64 flex-shrink-0">
              <Image src="/images/Section3/Frame.png" alt="家族でメガネを選ぶイラスト - 両親と子供がメガネをかけている様子" fill className="object-contain" loading="lazy" sizes="(max-width: 1024px) 100vw, 512px" />
            </div>

            <div className="flex-1">
              <div className="mb-4 font-mizolet font-bold">
                <div className="flex items-center justify-start gap-1 flex-wrap">
                  <p className="text-black text-xl">小さなお子様がいる</p>
                  <p className="text-black text-xl">家庭でも</p>
                  <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-6 h-6 text-xl font-light">安</span>
                  <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-6 h-6 text-xl font-light">心</span>
                </div>
              </div>
              <div className="text-left mb-4">
                <div className="bg-white px-2 py-1 lg:px-4 lg:py-2 inline-block">
                  <p className="text-black text-2xl lg:text-4xl font-bold text-center font-mizolet">軽くて丈夫なフレーム</p>
                </div>
              </div>
              <p className="text-black text-sm lg:text-md mb-6 font-noto-sans-jp py-2 px-0 leading-relaxed">
                小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめです。
              </p>
            </div>
          </div>

            <div>
              <div className="bg-white rounded-2xl p-4 mb-8 lg:mb-32">
                <div className="grid grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      variant="desktop"
                      buttonVariant="rounded"
                    />
                  ))}
                </div>
              </div>

            <OptionsList 
              options={options} 
              backgroundColor="bg-owndays-green-2"
              speechBubbleLabel="OPTION"
              title="おすすめオプション"
              className="mb-8"
            />

            <div className="relative mb-40 lg:mb-52">
              <div className="bg-white rounded-3xl p-2 relative lg:max-w-3xl lg:mx-auto">
                <div className="absolute top-0 right-0 -translate-y-1/2 -translate-x-1/4 z-10">
                  <SpeechBubble label="CHECK!" arrowPosition="right" align="right" textColor="black" />
                </div>
                <div className="flex flex-row items-center gap-6 p-6 lg:py-2">
                  <div className="relative w-1/3 h-52 flex-shrink-0">
                    <Image src="/images/Section3/isolated_tablet_laptop_and_smartphone_composition.png" alt="タブレットとスマートフォンの画面表示" fill className="object-contain" loading="lazy" sizes="100vw" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-black font-bold text-sm md:text-lg lg:text-xl mb-2 text-left">
                          お子さまの度数や保証書を
                          <span className="bg-owndays-yellow px-1">一括管理!</span>
                        </p>
                        <p className="text-black text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-left">親子で楽らくリンク機能</p>
                      </div>
                      <div className="group flex-shrink-0">
                        <ArrowButton direction="right" size="sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6 mt-12">
            <div className="relative w-full md:w-1/2 h-48 mb-6 md:mb-0 flex-shrink-0">
              <Image 
                src="/images/Section3/Frame-1x.png" 
                alt="家族でメガネを選ぶイラスト - 両親と子供がメガネをかけている様子" 
                width={800}
                height={192}
                className="w-full h-full object-contain" 
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <div className="mb-4 font-mizolet font-bold">
                <p className="text-black text-xl text-center md:text-left">小さなお子様がいる</p>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  <p className="text-black text-xl">家庭でも</p>
                  <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-6 h-6 text-xl font-light">安</span>
                  <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-6 h-6 text-xl font-light">心</span>
                </div>
              </div>
              <div className="text-center md:text-left mb-4">
                <div className="bg-white px-2 inline-block">
                  <p className="text-black text-2xl font-bold text-center font-mizolet">軽くて丈夫なフレーム</p>
                </div>
              </div>
              <p className="text-black text-sm mb-6 font-noto-sans-jp py-2 px-6 md:px-0 leading-relaxed">
                小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめです。
              </p>
            </div>
          </div>

          <div className="mb-16 bg-white rounded-3xl p-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="mobile"
                  buttonVariant="rounded"
                  className="font-outfit"
                />
              ))}
            </div>
          </div>

          <OptionsList 
            options={options} 
            backgroundColor="bg-owndays-green-2"
            speechBubbleLabel="OPTION"
            title="おすすめオプション"
          />

          <div className="relative mb-40">
            <div className="bg-white rounded-3xl p-2 relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 -translate-x-1/4 z-10">
                <SpeechBubble label="CHECK!" arrowPosition="right" align="right" textColor="black" />
              </div>
              <div className="px-10 pt-10 text-center">
                <div className="relative w-full h-32 mb-4">
                  <Image src="/images/Section3/isolated_tablet_laptop_and_smartphone_composition-1x.png" alt="タブレットとスマートフォンの画面表示" fill className="object-contain" loading="lazy" sizes="100vw" />
                </div>
                <p className="text-black font-bold text-sm mb-2">
                  お子さまの度数や保証書を
                  <span className="bg-owndays-yellow px-1">一括管理!</span>
                </p>
                <p className="text-black text-xl font-bold mb-4">親子で楽らくリンク機能</p>
              </div>
              <div className="group flex justify-end">
                <div className="rotate-45">
                  <ArrowButton direction="right" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}