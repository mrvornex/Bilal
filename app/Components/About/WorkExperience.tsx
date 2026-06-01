const WorkExperience = () => {
  return (
    <section id="work-experience" className="mt-24">
      <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
        Work Experience
      </h2>

      <div className="flex flex-col gap-14">
        <div className="flex gap-10 max-sm:flex-col">
          <p className="text-light-gray whitespace-nowrap max-sm:hidden">
            2024 - Present
          </p>

          <div>
            <h3 className="text-white text-lg font-semibold">
              Software Development Trainee
            </h3>

            <p className="text-light-gray mb-4">
              Professional Software Development Course – Jawan Pakistan
              <span className="text-light-gray ml-2 max-sm:inline-block hidden">
                • (2024 - Present)
              </span>
            </p>

            <p className="text-light-gray">
              I am currently pursuing a Professional Software Development course
              at Jawan Pakistan, where I have gained hands-on experience in
              HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, and
              TypeScript. Since starting my web development journey in 2024, I
              have built a strong foundation in modern frontend development
              through consistent learning and practical projects.
              <br />
              <br />
              During my training, I completed projects including a Student
              Management System, Contact Book Application, and multiple
              responsive web applications. These projects strengthened my
              understanding of component-based architecture, state management,
              routing, and responsive design.
              <br />
              <br />
              I also have experience with Git and GitHub for version control and
              focus on writing clean, maintainable code. In addition, I create
              AI-generated content and manage a YouTube channel with 78.5K+
              subscribers. I also work with AI-powered image enhancement,
              professional portraits, and customized visual editing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;