import SectionHeading from "./section-heading"

export default function About() {
  return (
    <section id="about" className="py-16">
      <SectionHeading title="About Me" subtitle="Get to know more about me and my background" />

      <div className="max-w-3xl mx-auto">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I am Mallangouda Patil, a passionate Electronics and Telecommunications Engineering student at N B Navale
          Sinhgad College of Engineering with a strong academic record (CGPA - 8.76). I have a keen interest in
          developing innovative solutions using technology.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          As the Co-Technical Secretary at NBNSCOE Solapur, I've had the opportunity to lead and participate in various
          technical events and projects. My experience includes working on Arduino-based projects, AI/ML models, and
          gesture recognition systems.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I'm dedicated to continuous learning and have completed several certifications in areas like Arduino
          Programming, Sensor Technologies, Java Programming, and Digital Marketing. I enjoy sharing my knowledge with
          others and have conducted AI and Robotics seminars for school students.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
        Outside of academics and tech, I’m an avid traveler who loves exploring new places and cultures. I also enjoy playing 
        football, which keeps me active and teaches teamwork in a fun way. Whether I’m debugging code, organizing a tech event,
         or scoring a goal on the field, I always bring passion and energy to what I do. I believe in staying curious, constantly 
         learning, and making the most of every opportunity that comes my way.
         </p>


      </div>
    </section>
  )
}
