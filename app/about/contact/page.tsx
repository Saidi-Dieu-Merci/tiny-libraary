export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16 pt-24">
      {/* Contact Header */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">WAYS TO REACH US</h2>
        <h3 className="text-xl font-semibold text-gray-700">Contact</h3>
      </section>

      {/* Contact Details */}
      <section className="max-w-3xl mx-auto space-y-6 text-left">
        <ul className="space-y-4">
          <li>
            <span className="font-semibold">Book suggestions:</span> Tell us
            what we should add to the shelf.
          </li>
          <li>
            <span className="font-semibold">Corrections:</span> Spotted an
            error? Let us know so we can fix it.
          </li>
          <li>
            <span className="font-semibold">Careers:</span> Interested in
            joining Tiny Library? Send a short note and we will get back to you.
          </li>
        </ul>

        <div className="mt-8">
          <p className="flex items-center gap-2 text-lg font-medium">
            📧{" "}
            <a
              href="mailto:hello@tinylibrary.example"
              className="text-blue-600 hover:underline"
            >
              hello@tinylibrary.example
            </a>
          </p>
          <p className="mt-2 text-gray-600">
            We are a small team, so we do not list a phone number — email is
            best.
          </p>
        </div>
      </section>
    </main>
  );
}
