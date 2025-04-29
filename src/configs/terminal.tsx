import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
            I'm Likith Shet, a driven software engineer with a passion for building smart, user-focused web 
            and mobile apps. I've developed impactful solutions like ReimburseIt and VSmartCard Scanner during 
            my internship at Section Infin-8 Foundation. As a GDG On Campus Organizer and core member of 
            DevNation AJIET, I actively contribute to tech communities while constantly pushing my limits. I'm 
            always open to new opportunities, collaborations, and exciting projects that challenge me to grow.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Full-Stack Web & Mobile App Development / Developer Community Building / Creative Tech & Digital Art"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "Always open to meaningful collaborations and innovative project ideas—let’s build something impactful together!"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:shet.Iikith57@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                shet.Iikith57@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/shet27"
                target="_blank"
                rel="noreferrer"
              >
                @shet27
              </a>
            </li>
            {/* <li>
              <a
                className="text-blue-300"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li> */}
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/likith-shet/"
                target="_blank"
                rel="noreferrer"
              >
                Likith Shet
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                https://likith.me
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
