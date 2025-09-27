import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function AcademicPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Academic Levels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Academic Levels
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon="🎨"
              title="Kindergarten"
              className="bg-yellow-50 border-yellow-200"
            >
              <ul className="text-gray-600 space-y-2">
                <li>• Play-based learning approach</li>
                <li>• Basic literacy and numeracy</li>
                <li>• Social skills development</li>
                <li>• Creative arts and crafts</li>
                <li>• Character formation basics</li>
              </ul>
            </Card>

            <Card
              icon="📚"
              title="Elementary (Grades 1-6)"
              className="bg-blue-50 border-blue-200"
            >
              <ul className="text-gray-600 space-y-2">
                <li>• Core subject mastery</li>
                <li>• Critical thinking skills</li>
                <li>• Science and technology</li>
                <li>• Language development</li>
                <li>• Values education</li>
              </ul>
            </Card>

            <Card
              icon="🎓"
              title="High School (Grades 7-12)"
              className="bg-green-50 border-green-200"
            >
              <ul className="text-gray-600 space-y-2">
                <li>• Advanced academic curriculum</li>
                <li>• Specialized track programs</li>
                <li>• College preparation</li>
                <li>• Leadership development</li>
                <li>• Career guidance</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Senior High School Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Senior High School Tracks
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card icon="⚗️" title="STEM Track">
              <p className="text-gray-600 mb-4">
                Science, Technology, Engineering, and Mathematics track for
                students pursuing careers in scientific and technical fields.
              </p>
              <div className="space-y-2">
                <h5 className="font-medium text-gray-900">Core Subjects:</h5>
                <ul className="text-sm text-gray-600 grid grid-cols-2 gap-1">
                  <li>• Pre-Calculus</li>
                  <li>• Physics</li>
                  <li>• Chemistry</li>
                  <li>• Biology</li>
                  <li>• Statistics</li>
                  <li>• Research</li>
                </ul>
              </div>
            </Card>

            <Card icon="💼" title="ABM Track">
              <p className="text-gray-600 mb-4">
                Accountancy, Business, and Management track for future business
                leaders and entrepreneurs.
              </p>
              <div className="space-y-2">
                <h5 className="font-medium text-gray-900">Core Subjects:</h5>
                <ul className="text-sm text-gray-600 grid grid-cols-2 gap-1">
                  <li>• Business Math</li>
                  <li>• Economics</li>
                  <li>• Accounting</li>
                  <li>• Business Ethics</li>
                  <li>• Marketing</li>
                  <li>• Entrepreneurship</li>
                </ul>
              </div>
            </Card>

            <Card icon="🎭" title="HUMSS Track">
              <p className="text-gray-600 mb-4">
                Humanities and Social Sciences track for students interested in
                liberal arts, social work, and communication.
              </p>
              <div className="space-y-2">
                <h5 className="font-medium text-gray-900">Core Subjects:</h5>
                <ul className="text-sm text-gray-600 grid grid-cols-2 gap-1">
                  <li>• Philippine Politics</li>
                  <li>• World Religions</li>
                  <li>• Creative Writing</li>
                  <li>• Psychology</li>
                  <li>• Sociology</li>
                  <li>• Philosophy</li>
                </ul>
              </div>
            </Card>

            <Card icon="🎨" title="GAS Track">
              <p className="text-gray-600 mb-4">
                General Academic Strand providing flexibility for students who
                are still exploring their interests.
              </p>
              <div className="space-y-2">
                <h5 className="font-medium text-gray-900">Core Subjects:</h5>
                <ul className="text-sm text-gray-600 grid grid-cols-2 gap-1">
                  <li>• Applied Economics</li>
                  <li>• Organization</li>
                  <li>• Disaster Readiness</li>
                  <li>• Electives</li>
                  <li>• Research</li>
                  <li>• Community Service</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Special Programs */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Special Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card icon="🏆" title="Honors Program">
              <p className="text-gray-600">
                Advanced curriculum for academically gifted students with
                enhanced research projects and accelerated learning
                opportunities.
              </p>
            </Card>

            <Card icon="🌍" title="International Program">
              <p className="text-gray-600">
                Cambridge curriculum preparation and international exchange
                programs to broaden global perspectives and cultural
                understanding.
              </p>
            </Card>

            <Card icon="⭐" title="Leadership Development">
              <p className="text-gray-600">
                Comprehensive leadership training through student government,
                clubs, and community service initiatives.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
