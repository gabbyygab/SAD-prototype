import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Application Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card icon="📝" title="Step 1" className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">
                Application Form
              </h4>
              <p className="text-sm text-gray-600">
                Complete and submit the online application form with required
                documents.
              </p>
            </Card>

            <Card icon="📋" title="Step 2" className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">
                Entrance Exam
              </h4>
              <p className="text-sm text-gray-600">
                Take the entrance examination and skills assessment.
              </p>
            </Card>

            <Card icon="💬" title="Step 3" className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Interview</h4>
              <p className="text-sm text-gray-600">
                Attend the family interview with student and parents.
              </p>
            </Card>

            <Card icon="✅" title="Step 4" className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Enrollment</h4>
              <p className="text-sm text-gray-600">
                Complete enrollment requirements and pay necessary fees.
              </p>
            </Card>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Application Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card icon="📄" title="For New Students">
              <ul className="text-gray-600 space-y-2">
                <li>• Completed application form</li>
                <li>• Birth certificate (NSO copy)</li>
                <li>• Report card from previous school</li>
                <li>• Certificate of good moral character</li>
                <li>• Medical certificate</li>
                <li>• 2x2 ID photos (4 pieces)</li>
                <li>• Baptismal certificate (for Catholics)</li>
                <li>• Transfer credentials (if applicable)</li>
              </ul>
            </Card>

            <Card icon="🔄" title="For Transferees">
              <ul className="text-gray-600 space-y-2">
                <li>• All requirements for new students</li>
                <li>• Official transcript of records</li>
                <li>• Certificate of transfer</li>
                <li>• Disciplinary clearance</li>
                <li>• Financial clearance</li>
                <li>• Principal's recommendation letter</li>
                <li>• Guidance counselor's report</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Important Dates
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  📅 Academic Year 2025-2026
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Opens:</span>
                    <span className="font-medium">January 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entrance Exam:</span>
                    <span className="font-medium">February 22, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interview Period:</span>
                    <span className="font-medium">March 1-15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enrollment:</span>
                    <span className="font-medium">April 1-30, 2025</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  💰 Tuition & Fees
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kindergarten:</span>
                    <span className="font-medium">₱85,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Elementary:</span>
                    <span className="font-medium">₱95,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Junior High:</span>
                    <span className="font-medium">₱105,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senior High:</span>
                    <span className="font-medium">₱115,000/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Scholarship Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card icon="🏆" title="Academic Excellence">
              <p className="text-gray-600 mb-2">
                For students with outstanding academic records
              </p>
              <div className="text-sm text-gray-500">
                <p>• 50% tuition discount</p>
                <p>• Maintained with 95% average</p>
              </div>
            </Card>

            <Card icon="⛪" title="Parish Partnership">
              <p className="text-gray-600 mb-2">
                For active members of partner parishes
              </p>
              <div className="text-sm text-gray-500">
                <p>• 25% tuition discount</p>
                <p>• Certificate of participation required</p>
              </div>
            </Card>

            <Card icon="🤝" title="Sibling Discount">
              <p className="text-gray-600 mb-2">
                For families with multiple children enrolled
              </p>
              <div className="text-sm text-gray-500">
                <p>• 15% off 2nd child</p>
                <p>• 25% off 3rd child onwards</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Ready to Apply?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">📞 Call Us</h4>
              <p className="text-gray-300">(02) 8123-4567</p>
              <p className="text-gray-300">(0917) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✉️ Email Us</h4>
              <p className="text-gray-300">admissions@nca.edu.ph</p>
              <p className="text-gray-300">info@nca.edu.ph</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📍 Visit Us</h4>
              <p className="text-gray-300">123 Education Ave.</p>
              <p className="text-gray-300">Malolos, Bulacan</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
