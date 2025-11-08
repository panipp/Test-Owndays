import React from 'react'
import SpeechBubble from './SpeechBubble'
import OptionBox from './OptionBox'
import SectionTitle from './SectionTitle'

const OPTIONS = [
  { id: 1, text: '目的から選ぶ' },
  { id: 2, text: '予算から選ぶ' },
  { id: 3, text: '家族でまとめ買い' },
  { id: 4, text: '自分用に複数買い' },
]

function PurposeSection({ variant }: { variant: 'desktop' | 'mobile' }) {
  const textSizeClass = variant === 'desktop' ? 'text-4xl' : 'text-2xl'
  const spacingClass = variant === 'desktop' ? 'mb-20 mt-24' : 'my-12'

  return (
    <div className={`${spacingClass} text-center`}>
      <SpeechBubble label="PURPOSE" arrowPosition="right" align="center" />
      <p className={`text-black ${textSizeClass} font-mizolet`}>目的から選ぶ</p>
    </div>
  )
}

export default function PickUpSection() {
  return (
    <section className="w-full lg:w-3/4 mx-auto my-16 lg:my-24 bg-white" aria-label="おすすめ商品セクション">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="hidden lg:block">
          <div className="flex items-stretch gap-32 mb-6">
            <SectionTitle title="PICK UP" subtitle="おすすめアイテム" variant="desktop" />
            <div className="flex items-stretch gap-6 flex-1">
              {OPTIONS.slice(0, 2).map((option) => (
                <OptionBox
                  key={option.id}
                  text={option.text}
                  variant="desktop"
                />
              ))}
            </div>
          </div>
          <PurposeSection variant="desktop" />
        </div>

        <div className="lg:hidden">
          <SectionTitle title="PICK UP" subtitle="おすすめアイテム" variant="mobile" />
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            {OPTIONS.slice(0, 2).map((option) => (
              <OptionBox
                key={option.id}
                text={option.text}
                variant="mobile"
                textWrap="nowrap"
              />
            ))}
          </div>

          <PurposeSection variant="mobile" />

          <div className="grid grid-cols-2 gap-4">
            {OPTIONS.slice(2, 4).map((option) => (
              <OptionBox
                key={option.id}
                text={option.text}
                variant="mobile"
                textWrap="pre-line"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
