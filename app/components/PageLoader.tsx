'use client'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#FD4F0C]"></div>
        </div>
        {/* Optional: Loading text */}
        <p className="text-sm font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
