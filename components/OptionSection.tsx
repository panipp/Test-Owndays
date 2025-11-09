import ArrowButton from './ArrowButton'
import OptionCard from './OptionCard'

export default function OptionSection() {
  const options = [
    { 
      id: 1, 
      title: '超極薄レンズ', 
      description: '「より薄く」 「より軽く」を実現した世界最高屈折のプレミアムレンズ。目の大きさなどに影響する歪みを極限まで抑えることができます。',
      price: '+¥12,000',
      tax: '税込'
    },
    { 
      id: 2, 
      title: 'PCレンズ', 
      description: 'スマホ・パソコンなど電子機器から出るブルーライトから眼を守るレンズ。度無しクリアの場合は、追加料金なしでお作りいただけます。',
      price: '+¥4,000',
      tax: '税込'
    },
    { 
      id: 3, 
      title: 'カラーレンズ', 
      description: 'お好みのフレームと組み合わせることでファッション性を楽しんだり、サングラスとして使用したりできるレンズです。',
      price: '+¥4,000',
      tax: '税込'
    },
    { 
      id: 4, 
      title: '調光レンズ', 
      description: '紫外線によってレンズカラーが変化! 日差しが強くなる季節も、1本2役で荷物にならず持ち運びも便利。',
      price: '+¥6,000',
      tax: '税込'
    },
    { 
      id: 5, 
      title: 'くもり止めコート', 
      description: '表面に特殊なコーティングを施すことで、レンズを曇りにくくしクリアな視界を保ちます。マスクとメガネを併用される方ににおすすめ。',
      price: '+¥4,000',
      tax: '税込'
    },
    { 
      id: 6, 
      title: '傷防止コート', 
      description: '「レンズの傷が気になる方」におすすめ! ブルーライトカット機能を搭載した、傷に強い特殊コーティング。',
      price: '+¥6,000',
      tax: '税込'
    },
  ]

  return (
    <section className="w-full bg-gray-200 pt-8 pb-20 lg:pt-16 lg:pb-32 z-10 relative">
      <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-owndays-red font-outfit tracking-[0.15em] lg:tracking-[0.1em] -translate-y-1/2 [text-shadow:-2px_-2px_0_black,2px_-2px_0_black,-2px_2px_0_black,2px_2px_0_black,-2px_0_0_black,2px_0_0_black,0_-2px_0_black,0_2px_0_black]">
          OPTION
        </h2>
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-center z-20 translate-y-[calc(50%+1rem)] lg:translate-y-[calc(50%+2rem)]">
        <p className="text-base lg:text-lg font-mizolet font-bold">おすすめオプションレンズ</p>
      </div>
      <div className="container mx-auto px-6 lg:px-8 pt-16 lg:pt-20 font-mizolet">
        <div className="hidden md:grid md:grid-cols-3 gap-2">
          {options.map((option) => (
            <div 
              key={option.id} 
              className="group bg-white border-2 border-black rounded-lg p-2 hover:shadow-lg transition-shadow relative"
            >
              <div className="px-4 py-2">
                <h3 className="text-lg font-bold mb-3 ">{option.title}</h3>
                <p className="text-sm mb-4 ">{option.description}</p>
                <p className="text-lg font-bold ">{option.price} {option.tax}</p>
              </div>
              <div className="absolute bottom-2 right-2">
                <div className="rotate-45">
                  <ArrowButton direction="right" size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden space-y-4">
          {options.map((option) => (
            <OptionCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  )
}
