import NavBar from '@/components/NavBar'
import PromotionSection from '@/components/PromotionSection'
import PickUpSection from '@/components/PickUpSection'
import FamilySection from '@/components/FamilySection'
import DailySection from '@/components/DailySection'
import BudgetSection from '@/components/BudgetSection'
import OptionSection from '@/components/OptionSection'

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
