import TopNav from '@/app/components/TopNav'
import Footer from '@/app/components/Layout/Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white">
      <TopNav />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  )
}
