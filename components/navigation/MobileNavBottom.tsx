export default function MobileNavBottom() {
  return (
    <nav className="fixed bottom-0 right-0 z-50 lg:hidden" aria-label="モバイルナビゲーション">
      <div className="flex" role="menubar">
        <button 
          className="bg-white border-2 border-black border-b-0 rounded-tl-lg px-4 py-3 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-owndays-red"
          aria-label="店舗を探す"
          role="menuitem"
        >
          店舗を探す
        </button>
        <button 
          className="bg-black text-white px-4 py-3 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-owndays-red"
          aria-label="商品を探す"
          role="menuitem"
        >
          商品を探す
        </button>
      </div>
    </nav>
  )
}

