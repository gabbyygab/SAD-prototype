export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary)]/90 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-[color:var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-[color:var(--primary)] font-bold text-3xl">
              NC
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Notre Christi Academy
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--primary)]-[color:var(--foreground)]/90 mb-2">
            of the Philippines
          </p>
          <p className="text-lg text-[color:var(--primary)]-[color:var(--foreground)]/80 max-w-2xl mx-auto text-pretty">
            Excellence in Education, Character Formation, and Holistic
            Development
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[color:var(--secondary)] text-[color:var(--primary)] px-8 py-3 rounded-xl font-semibold hover:bg-[color:var(--secondary)]/90 transition-colors duration-200">
            Student Portal
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[color:var(--primary)] transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
