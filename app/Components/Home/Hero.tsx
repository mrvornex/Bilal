import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHubCalendar } from "react-github-calendar";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface GithubUser {
  followers: number;
  public_repos: number;
}

const Hero = () => {
  const [githubData, setGithubData] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/mrvornex")
      .then((res) => res.json())
      .then((data: GithubUser) => setGithubData(data));
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 font-mono">
      <div className="flex flex-col items-start gap-6">
        {/* Profile Image */}
        <img
          src="/Home_Img/bg10.png"
          alt="Muhammad Bilal"
          className="w-32 h-32 rounded-full border border-gray-300 object-cover"
        />

        {/* Name */}
        <h1 className="text-2xl font-semibold font-bold text-black">
          Muhammad Bilal
        </h1>

        {/* Role */}
        <p className="leading-7 text-zinc-600 text-gray-600">
          Full Stack Developer, Content Creator, Educator
        </p>

        {/* About */}
        <p className="max-w-3xl leading-7 text-zinc-600 text-gray-700 leading-8">
          I build modern web applications and share my coding journey online.
          Passionate about React, Firebase, MongoDB, Node.js and helping
          developers learn through practical projects.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-zinc-600 text-gray-600">
          <a
            href="https://github.com/mrvornex"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/mrvornex"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://www.youtube.com/@TalkingAIWorldOfficial"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>

          <a
            href="https://x.com/mrvornex"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-4 space-y-3 font-mono text-[16px] text-zinc-500">
          <p className="flex items-center gap-2 tabular-nums">
            <FontAwesomeIcon icon={faYoutube} /> <span>78.5K Subscribers</span>
          </p>

          {githubData && (
            <p className="flex items-center gap-2 tabular-nums">
              <FontAwesomeIcon icon={faGithub} /> {githubData.followers} Followers •{" "}
              {githubData.public_repos} Repositories
            </p>
          )}
        </div>

        {/* Resume Button */}
        <a
          href="/Bilal.pdf"
          download="Muhammad-Bilal-Resume.pdf"
          className="mt-2 px-5 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Download Resume
        </a>

        {/* Activity Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">ACTIVITY</h2>

          <p className="text-gray-600 mb-6">
            GitHub contributions over the last year.
          </p>
          <GitHubCalendar
            username="mrvornex"
            colorScheme="light"
            theme={{
              light: [
                "#ebedf0",
                "#d1d5db",
                "#9ca3af",
                "#6b7280",
                "#1f2937",
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;