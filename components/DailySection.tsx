import Image from 'next/image'
import ProductGrid from './ProductGrid'
import OptionsList from './OptionsList'
import FullWidthSection from './FullWidthSection'
import SectionHeader from './SectionHeader'
import ImageTextContent from './ImageTextContent'
import { Product, Option } from '@/lib/types'

export default function DailySection() {
  const products: Product[] = [
    { 
      id: 1, 
      name: 'John Dillinger', 
      model: 'JD1045Z-4A C2 ゴールド',
      price: '¥20,000',
      tax: '税込',
      category: 'GLASSES',
      image: '/images/Section4/JD1045Z-4A_C2.png',
      imageMobile: '/images/Section4/JD1045Z-4A_C2-1x.png'
    },
    { 
      id: 2, 
      name: 'ESSENTIAL', 
      model: 'FC2035V-4A C2 ブラウン',
      price: '¥8,000',
      tax: '税込',
      category: 'GLASSES',
      image: '/images/Section4/FC2035V-4A_C2.png',
      imageMobile: '/images/Section4/FC2035V-4A_C2-1x.png'
    },
    { 
      id: 3, 
      name: 'Graph Belle', 
      model: 'GB1043G-4A C1 マットブラウン',
      price: '¥10,000',
      tax: '税込',
      category: 'GLASSES',
      image: '/images/Section4/GB1043G-4A_C1.png',
      imageMobile: '/images/Section4/GB1043G-4A_C1-1x.png'
    },
  ]

  const options: Option[] = [
    {
      id: 1,
      title: '調光レンズ',
      description: '紫外線によってレンズカラーが変化！日差しが強くなる季節も、1本2役で荷物にならず持ち運びも便利。',
      price: '+¥6,000',
      tax: '税込'
    },
    {
      id: 2,
      title: 'ニュアンスカラーレンズ',
      description: 'メガネをかけるだけで、目元を明るく、健康的な印象に！オフの日はもちろん忙しい朝のメイク代わりやコーデのアクセントに最適。',
      price: '+¥4,000',
      tax: '税込'
    },
  ]

  const descriptionText = '手元作業の多いオフィスワーク、スポーツ、ドライブなど、日常のシーンごとに複数のメガネを持っておくのもおすすめ。使用場面に適したメガネなら、目の負担を軽減し、より快適な視界を保つことができます。さらに、ファッションに合わせておしゃれを楽しんだり、仕事とプライベートの気持ちの切り替えをスムーズにする手助けに！'

  return (
    <section className="w-full relative overflow-hidden rounded-t-[5rem] lg:rounded-t-[10rem] -mt-24 md:-mt-20 lg:-mt-40 z-10">
      <div className="hidden md:block">
        <FullWidthSection backgroundColor="bg-owndays-brown-4">
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <ImageTextContent
              imageSrc="/images/Section4/Frame.png"
              imageAlt="日常使いのメガネを選ぶイラスト - デスクワークをする人々"
              variant="desktop"
            >
              <SectionHeader text="日常使いで" badges={['大', '活', '躍']} />
              <div className="text-left mb-4">
                <div className="bg-white px-2 py-1 lg:px-4 lg:py-2 inline-block">
                  <p className="text-2xl lg:text-4xl font-bold text-center font-mizolet">肌馴染みのいいフレーム</p>
                </div>
              </div>
              <p className="text-sm lg:text-md mb-6 font-noto-sans-jp py-2 px-0 leading-relaxed">
                {descriptionText}
              </p>
            </ImageTextContent>

            <ProductGrid 
              products={products}
              variant="desktop"
              buttonVariant="rounded"
              badgeVariant="brown"
            />
          </div>
        </FullWidthSection>

        <OptionsList 
          options={options} 
          backgroundColor="bg-owndays-brown-3"
          speechBubbleLabel="OPTION"
          title="おすすめオプション"
          className="mb-8"
        />
      </div>

      <div className="md:hidden">
        <FullWidthSection backgroundColor="bg-owndays-brown-4" py="py-8">
          <div className="container mx-auto px-6 relative z-10">
            <ImageTextContent
              imageSrc="/images/Section4/Frame.png"
              imageAlt="日常使いのメガネを選ぶイラスト - デスクワークをする人々"
              imageMobileSrc="/images/Section4/Frame-1x.png"
              variant="mobile"
            >
              <SectionHeader text="日常使いで" badges={['大', '活', '躍']} align="center" />
              <div className="text-center md:text-left mb-4">
                <div className="bg-white px-2 inline-block">
                  <p className="text-2xl font-bold text-center font-mizolet">肌馴染みのいいフレーム</p>
                </div>
              </div>
              <p className="text-sm mb-6 font-noto-sans-jp py-2 px-6 md:px-0 leading-relaxed">
                {descriptionText}
              </p>
            </ImageTextContent>

            <ProductGrid 
              products={products}
              variant="mobile"
              buttonVariant="rounded"
              badgeVariant="brown"
            />
          </div>
        </FullWidthSection>

        <OptionsList 
          options={options} 
          backgroundColor="bg-owndays-brown-3"
          speechBubbleLabel="OPTION"
          title="おすすめオプション"
        />
      </div>
    </section>
  )
}
