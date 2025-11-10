import OptionsList from '@/components/shared/OptionsList'
import ProductGrid from '@/components/products/ProductGrid'
import FullWidthSection from '@/components/sections/FullWidthSection'
import SectionHeader from '@/components/shared/SectionHeader'
import ImageTextContent from '@/components/shared/ImageTextContent'
import CheckCard from '@/components/shared/CheckCard'
import { Product, Option } from '@/lib/types'

export default function FamilySection() {
  const products: Product[] = [
    { 
      id: 1, 
      name: 'AIR', 
      model: 'AU2101E-3A C3 カーキ',
      price: '¥11,000',
      tax: '税込',
      category: 'GLASSES',
      image: '/images/Section3/product1.png',
      imageMobile: '/images/Section3/product1-1x.png'
    },
    { 
      id: 2, 
      name: 'SUN', 
      model: 'SUN2107N-4S C1 ブラック',
      price: '¥8,000',
      tax: '税込',
      category: 'SUNGLASSES',
      image: '/images/Section3/product2.png',
      imageMobile: '/images/Section3/product2-1x.png'
    },
    { 
      id: 3, 
      name: 'Junni', 
      model: 'JU2037N-4S C3 クリアブルー',
      price: '¥7,000',
      tax: '税込',
      category: 'KIDS GLASSES',
      image: '/images/Section3/product3.png',
      imageMobile: '/images/Section3/product3-1x.png'
    },
  ]

  const options: Option[] = [
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

  const descriptionText = '小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめです。'

  return (
    <section className="w-full relative overflow-hidden rounded-t-[5rem] lg:rounded-t-[10rem] -mt-8 lg:-mt-8 z-10">
      <div className="hidden md:block">
        <FullWidthSection backgroundColor="bg-owndays-green-3">
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <ImageTextContent
              imageSrc="/images/Section3/family.png"
              imageAlt="家族でメガネを選ぶイラスト - 両親と子供がメガネをかけている様子"
              imageMobileSrc="/images/Section3/family-1x.png"
              variant="desktop"
              unoptimized
            >
              <SectionHeader text={['小さなお子様がいる', '家庭でも']} badges={['安', '心']} />
              <div className="text-left mb-4">
                <div className="bg-white px-2 py-1 lg:px-4 lg:py-2 inline-block">
                  <p className="text-2xl lg:text-4xl font-bold text-center font-mizolet">軽くて丈夫なフレーム</p>
                </div>
              </div>
              <p className="text-sm lg:text-md mb-6 font-noto-sans-jp py-2 px-0 leading-relaxed">
                {descriptionText}
              </p>
            </ImageTextContent>

            <ProductGrid 
              products={products}
              variant="desktop"
            />
          </div>
        </FullWidthSection>

        <OptionsList 
          options={options} 
          backgroundColor="bg-owndays-green-2"
          speechBubbleLabel="OPTION"
          title="おすすめオプション"
        />

        <section className="w-full bg-owndays-green-3 py-24 lg:py-20 relative z-10">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="relative mb-32 lg:mb-52">
              <CheckCard
                imageSrc="/images/Section3/tablet-smartphone.png"
                imageAlt="タブレットとスマートフォンの画面表示"
                title="お子さまの度数や保証書を"
                subtitle="親子で楽らくリンク機能"
                highlightText="一括管理!"
                variant="desktop"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="md:hidden">
        <FullWidthSection backgroundColor="bg-owndays-green-3" py="py-8">
          <div className="container mx-auto px-6 relative z-10">
            <ImageTextContent
              imageSrc="/images/Section3/family.png"
              imageAlt="家族でメガネを選ぶイラスト - 両親と子供がメガネをかけている様子"
              imageMobileSrc="/images/Section3/family-1x.png"
              variant="mobile"
              unoptimized
            >
              <SectionHeader 
                text={['小さなお子様がいる', '家庭でも']} 
                badges={['安', '心']} 
                align="center"
                variant="multi"
              />
              <div className="text-center md:text-left mb-4">
                <div className="bg-white px-2 inline-block">
                  <p className="text-2xl font-bold text-center font-mizolet">軽くて丈夫なフレーム</p>
                </div>
              </div>
              <p className="text-sm mb-6 font-noto-sans-jp py-2 px-6 md:px-0 leading-relaxed">
                {descriptionText}
              </p>
            </ImageTextContent>

            <ProductGrid 
              products={products}
              variant="mobile"
            />
          </div>
        </FullWidthSection>

        <OptionsList 
          options={options} 
          backgroundColor="bg-owndays-green-2"
          speechBubbleLabel="OPTION"
          title="おすすめオプション"
        />

        <section className="w-full bg-owndays-green-3 py-20 relative z-10">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="relative mb-40">
              <CheckCard
                imageSrc="/images/Section3/tablet-smartphone.png"
                imageMobileSrc="/images/Section3/tablet-smartphone-1x.png"
                imageAlt="タブレットとスマートフォンの画面表示"
                title="お子さまの度数や保証書を"
                subtitle="親子で楽らくリンク機能"
                highlightText="一括管理!"
                variant="mobile"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
