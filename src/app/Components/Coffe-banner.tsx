import { Coffee } from 'lucide-react'

export default function CoffeeBanner() {
  return (
    <div className="flex items-center gap-4 bg-[#B69B7D] p-4 rounded-lg max-w-md">
      <div className="bg-white/10 p-3 rounded-lg">
        <Coffee className="w-8 h-8 text-white" />
      </div>
      <div className="text-left">
        <h2 className="text-xl font-semibold text-white">High quality coffee</h2>
        <p className="text-white/80 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh.
        </p>
      </div>
    </div>
  )
}

