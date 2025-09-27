import Card from "../components/Card";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card icon="🎯" title="Our Mission">
            <p className="text-gray-600 leading-relaxed">
              Notre Christi Academy is dedicated to providing exceptional
              Catholic education that nurtures the intellectual, spiritual, and
              moral development of our students. We strive to create a learning
              environment where students can grow in faith, knowledge, and
              service to others.
            </p>
          </Card>

          <Card icon="👁️" title="Our Vision">
            <p className="text-gray-600 leading-relaxed">
              To be the leading Catholic educational institution in the
              Philippines, forming confident, compassionate, and competent
              individuals who will contribute positively to society while living
              out their Catholic faith in their daily lives.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card icon="📖" title="Academic Excellence">
              <p className="text-gray-600">
                We maintain high academic standards and provide innovative
                learning experiences that prepare students for success in higher
                education and beyond.
              </p>
            </Card>

            <Card icon="❤️" title="Character Formation">
              <p className="text-gray-600">
                We emphasize the development of strong moral character rooted in
                Catholic teachings, fostering integrity, compassion, and respect
                for others.
              </p>
            </Card>

            <Card icon="🌱" title="Holistic Development">
              <p className="text-gray-600">
                We nurture the whole person through academic, spiritual,
                physical, and social development programs that prepare students
                for life's challenges.
              </p>
            </Card>
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our History
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1985
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Foundation</h4>
                <p className="text-gray-600">
                  Notre Christi Academy was established with a mission to
                  provide quality Catholic education to Filipino families.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1995
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Expansion</h4>
                <p className="text-gray-600">
                  Added senior high school program and expanded facilities to
                  accommodate growing student population.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-800 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                2010
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Technology Integration
                </h4>
                <p className="text-gray-600">
                  Launched comprehensive digital learning programs and
                  state-of-the-art computer laboratories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
