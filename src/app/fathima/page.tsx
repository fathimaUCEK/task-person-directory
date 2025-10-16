import Navbar from "@/components/Navbar";

export default function FathimaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-12">

        {/* Person Profile */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 px-8 py-12">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-4xl">
                    F {/* First letter of your name */}
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Fathima S
                  </h1>
                  <p className="text-xl text-blue-100 mb-2">Student</p>
                  <p className="text-blue-200">20 • Second Year</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Bio Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                 About
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi! I’m Fathima S, a B.Tech Computer Science student with a unique background in Biology. 
      I am passionate about exploring emerging technologies, expanding my creative and technical 
      skills, and applying interdisciplinary knowledge to solve real-world problems. Curious and 
      adaptable, I enjoy learning beyond boundaries and turning ideas into meaningful solutions.
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Skills & Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-white dark:text-white rounded-full text-sm font-medium">
                    <strong>Technical Skills</strong> : Web development basics: HTML, CSS . Figma (basic prototyping and design) 
                  </span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900  text-white dark:text-white rounded-full text-sm font-medium">
                    <strong>Soft Skills</strong>: Collaboration . Adaptability . Communication . Teaching . Organizational Skills  
                  </span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-white dark:text-white rounded-full text-sm font-medium">
                    <strong>Creative & Artistic Skills</strong>: Painting . Calligraphy . Crochet . Tiara Making . Pencil Carving (Name)  
                  </span>
                  {/* Add more skills/interests as needed */}
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h2>
                <div className="flex flex-wrap gap-3">
                  <p className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-white rounded-full text-sm font-medium">
                    <p>
                    <b>B.Tech in Computer Science</b>
                    <br />
                    University College of Engineering, Kariavattom | 2024-2028     
                    </p>
                    </p>
                </div> 
                <br></br>
                <div className="flex flex-wrap gap-3
                ">   
                  <p className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-white rounded-full text-sm font-medium">
                    
                    <p>
                        <b>Higher Secondary Education</b>
                    <br />
                    Seethi Sahib Memorial Higher Secondary School | 2021-2023 | 99.3%
                    </p>
                    </p>
                </div>
              </div>
              

              {/* Contact Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">📧</span>
                    <span className="text-gray-700 dark:text-gray-300">fadudaisy@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">🔗</span>
                    <a href="https://www.linkedin.com/in/fathima-s-75aa2b322" className="text-blue-600 dark:text-blue-400 hover:underline">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">🐙</span>
                    <a href="https://github.com/fathimaUCEK" className="text-blue-600 dark:text-blue-400 hover:underline">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}