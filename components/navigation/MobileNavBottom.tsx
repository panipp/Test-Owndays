export default function MobileNavBottom() {
  return (
    <div className="fixed bottom-0 right-0 z-50 lg:hidden">
      <div className="flex">
        <button className="bg-white border-2 border-black border-b-0 rounded-tl-lg px-4 py-3 font-bold text-sm">
          店舗を探す
        </button>
        <button className="bg-black text-white px-4 py-3 font-bold text-sm">
          商品を探す
        </button>
      </div>
    </div>
  )
}

