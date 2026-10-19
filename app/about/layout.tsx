import AboutFooter from "@/components/AboutFooter"

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content grows to fill space */}
      <div className="flex-1">
        {children}
      </div>
      {/* Footer stays at bottom */}
      <AboutFooter />
    </div>
  )
}
