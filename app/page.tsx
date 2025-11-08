import NavBar from '@/components/NavBar'
import PromotionSection from '@/components/PromotionSection'
import PickUpSection from '@/components/PickUpSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {/* Promotional Section */}
        <PromotionSection />
        
        {/* PICK UP Section */}
        <PickUpSection />
      </main>
    </div>
  )
}
