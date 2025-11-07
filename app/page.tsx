import NavBar from '@/components/NavBar'
import PromotionSection from '@/components/PromotionSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {/* Promotional Section */}
        <PromotionSection />
      </main>
    </div>
  )
}
