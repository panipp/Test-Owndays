import NavBar from '@/components/navigation/NavBar'
import PromotionSection from '@/components/sections/PromotionSection'
import PickUpSection from '@/components/sections/PickUpSection'
import FamilySection from '@/components/sections/FamilySection'
import DailySection from '@/components/sections/DailySection'
import BudgetSection from '@/components/sections/BudgetSection'
import OptionSection from '@/components/sections/OptionSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-[1920px] mx-auto w-full">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-owndays-red focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-owndays-red"
      >
        メインコンテンツへスキップ
      </a>
      <NavBar />
      <main id="main-content" className="flex-grow" role="main">
        {/* Promotional Section */}
        <PromotionSection />
        
        {/* PICK UP Section */}
        <PickUpSection />
        
        {/* FAMILY Section */}
        <FamilySection />
        
        {/* DAILY Section */}
        <DailySection />
        
        {/* Budget Selection Section */}
        <BudgetSection />
        
        {/* OPTION Section */}
        <OptionSection />
      </main>
    </div>
  )
}
