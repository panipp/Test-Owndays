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
      <NavBar />
      <main className="flex-grow">
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
