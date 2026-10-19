import FooterImage from "@/public/tinylibrary-logo.png"

export default function AboutLayOut() {
  return (
    // Use text-center to center content horizontally
    <div className="text-center">
      {/* Image centered */}
      <img
        src={FooterImage.src}
        alt="Tiny Library logo"
        className="rounded-lg shadow-md h-20 w-20 object-cover mx-auto"
      />

      {/* Footer sits below the image */}
      <footer className="bg-gray-100 text-center py-6 mt-6">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Tiny Library
        </p>
      </footer>
    </div>
  )
}
