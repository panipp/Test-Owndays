import React from 'react'
import Image from 'next/image'

export default function PromotionSection() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <div className="bg-owndays-red rounded-2xl md:rounded-3xl p-6 md:p-12">
          <div className="mx-auto">
            <div className="mb-8 md:mb-12 lg:mx-12">
              <div className="hidden md:grid md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_3fr] md:gap-12 lg:gap-32 md:my-8 w-full items-center">
                <div className="relative w-full h-auto lg:px-8 lg:py-4 min-w-0">
                  <Image 
                    src="/images/Section1/date-layout.png" 
                    alt="キャンペーン期間: 2024年12月22日まで" 
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain" 
                    priority
                  />
                </div>
                <div className="relative w-full h-auto min-w-0">
                  <Image 
                    src="/images/Section1/Group.png" 
                    alt="OWNDAYS メガネアイコン" 
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain" 
                    priority
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:hidden mb-6">
                <div className="relative w-full h-auto px-8 py-4">
                  <Image 
                    src="/images/Section1/date-layout-1x.png" 
                    alt="キャンペーン期間: 2024年12月22日まで" 
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain" 
                    priority
                  />
                </div>
                <div className="relative w-full h-auto">
                  <Image 
                    src="/images/Section1/Group-1x.png" 
                    alt="OWNDAYS メガネアイコン" 
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain" 
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="mb-8 md:mb-12 text-center">
            <div className="relative w-full max-w-2xl mx-auto mb-6 md:hidden">
              <Image 
                src="/images/Section1/main-text-logo-1x.png" 
                alt="2本同時購入で 2本目半額！" 
                width={800}
                height={200}
                className="w-full h-auto object-contain" 
                loading="lazy"
              />
            </div>
            <div className="hidden md:block lg:hidden relative w-full max-w-2xl mx-auto my-8">
              <Image 
                src="/images/Section1/main-text-logo-1x.png" 
                alt="2本同時購入で 2本目半額！" 
                width={800}
                height={200}
                className="w-full h-auto object-contain" 
                loading="lazy"
                unoptimized
              />
            </div>
            <div className="hidden lg:block relative w-full max-w-2xl mx-auto my-8">
              <Image 
                src="/images/Section1/main-text-logo.png" 
                alt="2本同時購入で 2本目半額！" 
                width={800}
                height={200}
                className="w-full h-auto object-contain" 
                loading="lazy"
              />
            </div>
            <div className="md:hidden text-center text-lg m-4">
              <p className="text-white mb-2">まとめ買いがオトク!</p>
              <p className="text-white mb-2">家族・友達や恋人、</p>
              <p className="text-white mb-2">自分買いでも複数本購入で、</p>
              <span className="inline-block bg-owndays-dark-green text-white px-2">
                2本目以降半額。
              </span>
            </div>
            <div className="hidden md:block text-center mb-4">
              <p className="text-white text-lg mb-2">まとめ買いがオトク!</p>
              <p className="text-white text-base mb-2">
                家族・友達や恋人、自分買いでも複数本購入で、<span className="bg-owndays-dark-green text-white px-2">2本目以降半額。</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className="text-black text-base text-center font-bold mb-6 md:hidden">
              <p>例えば</p>
              <p>「12,000円」と「10,000円」の</p>
              <p>メガネをセットで購入する場合</p>
            </div>
            <p className="hidden md:block text-black text-md lg:text-lg text-center font-bold mb-8">
              例えば「12,000円」と「10,000円」のメガネをセットで購入する場合
            </p>
            
            <div className="lg:hidden">
              <div className="md:hidden relative w-full max-w-xl mx-auto mb-6">
                <Image 
                  src="/images/Section1/main-example-1x.png" 
                  alt="家族・友達・恋人と一緒にメガネを購入するイラスト" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain" 
                  loading="lazy"
                />
              </div>
              <div className="hidden md:block relative w-full max-w-xl mx-auto mb-6">
                <Image 
                  src="/images/Section1/main-example.png" 
                  alt="家族・友達・恋人と一緒にメガネを購入するイラスト" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain" 
                  loading="lazy"
                />
              </div>
              <div className="w-full h-8 border-t-4 border-owndays-red mb-4"></div>
              <div className="text-center mb-4">
                <p className="text-black text-xl md:text-2xl font-bold mb-2">2本目半額で</p>
                <p className="text-owndays-red font-bold flex items-center justify-center gap-1">
                  <span className="text-4xl md:text-5xl">¥5,000</span>
                  <span className="text-xl md:text-2xl">がお得に!</span>
                </p>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-stretch lg:gap-6 lg:mb-4 lg:mx-6">
              <div className="relative w-full h-auto flex-[2] flex items-center m-3">
                <Image 
                  src="/images/Section1/main-example.png" 
                  alt="家族・友達・恋人と一緒にメガネを購入するイラスト" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain" 
                  loading="lazy"
                />
              </div>
              <div className="border-l-4 border-owndays-red flex-shrink-0"></div>
              <div className="text-center flex-[3] self-center">
                <p className="text-black text-base font-bold flex items-center justify-center gap-2">
                  <span>2本目半額で</span>
                  <span className="text-owndays-red font-bold flex items-center gap-2">
                    <span className="text-5xl">¥5,000</span>
                    <span className="text-2xl">がお得に!</span>
                  </span>
                </p>
                <p className="text-black text-xs md:text-sm text-center font-bold mt-2 hidden md:block">
                  ※お値段が低い商品からの割引となります。
                </p>
              </div>
            </div>

            <p className="text-black text-xs md:text-md text-center font-bold lg:hidden">
              ※お値段が低い商品からの割引となります。
            </p>
          </div>

            <div className="text-center mb-8 md:mb-12">
              <p className="text-white text-lg md:text-xl font-bold mx-6">
              この機会に、みんなで一緒にメガネを購入しよう！
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-4xl mx-auto font-bold">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-16">
                <div className="flex-shrink-0 text-center md:text-left self-center">
                <h2 
                  className="text-4xl md:text-6xl text-owndays-red font-outfit mb-2 tracking-[0.15em] md:tracking-[0.1em] [text-shadow:-2px_-2px_0_black,2px_-2px_0_black,-2px_2px_0_black,2px_2px_0_black,-2px_0_0_black,2px_0_0_black,0_-2px_0_black,0_2px_0_black]"
                >
                  NOTE
                </h2>
                <p className="text-xs md:text-xl font-light font-mizolet">注意事項</p>
              </div>
              <div className="flex-1">
                <ul className="text-black text-xs md:text-sm space-y-2">
                  <li>• 対象商品がなくなり次第終了です。</li>
                  <li>• 表示価格が低額の商品からの割引です。</li>
                  <li>• 2本目以降すべてのメガネ・サングラスが表示価格より半額となります。</li>
                  <li>• 6,000円(税込)以上のOWNDAYSオリジナルメガネ・サングラスが対象です。</li>
                  <li>• オプションレンズ・セール商品・コラボ商品・レンズ交換・雑貨・修理等は対象外です。</li>
                  <li>• 他の割引との併用はできません。</li>
                  <li>• 本キャンペーンは予告なく変更・終了させていただく場合がございます。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
