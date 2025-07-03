export default function Education() {
    return (
        <section className="px-6 py-12 bg-gradient-to-br from-blue-50 to-gray-100 text-gray-800 flex flex-col min-h-screen items-center justify-center">
            <div className="max-w-10xl mx-auto">
                <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block mb-10">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 10th */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-700">SSLC (10th Standard)</h3>
                        <p className="mt-2 text-gray-700">
                            <strong>School:</strong> [Your School Name]
                        </p>
                        <p className="text-gray-700">
                            <strong>Year:</strong> [Year of Passing]
                        </p>
                    </div>
                    {/* 12th */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-700">HSC (12th Standard)</h3>
                        <p className="mt-2 text-gray-700">
                            <strong>School:</strong> [Your Higher Secondary School Name]
                        </p>
                        <p className="text-gray-700">
                            <strong>Year:</strong> [Year of Passing]
                        </p>
                    </div>
                    {/* College */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-700">Bachelor’s Degree - BE (ECE)</h3>
                        <p className="mt-2 text-gray-700">
                            <strong>College:</strong> [Your College Name]
                        </p>
                        <p className="text-gray-700">
                            <strong>Year:</strong> [Year of Graduation]
                        </p>
                    </div>
                    {/* Certification */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-700">Python Certification</h3>
                        <p className="mt-2 text-gray-700">
                            <strong>Institute:</strong> SLA Institute
                        </p>
                        <p className="text-gray-700">
                            <strong>Year:</strong> [Year of Completion]
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
