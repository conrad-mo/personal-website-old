import Navbar from "../components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="ctp-latte dark:ctp-mocha relative">
      <div className="sticky top-0 max-h-0">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-screen" id="home">
        <div className="flex flex-col items-start text-8xl gap-2 m-4">
          <div>Conrad</div>
          <div>Mo</div>
          <div className="flex flex-col text-5xl my-8 gap-6">
            <div className="text-ctp-rosewater">Software Developer</div>
            <div className="text-ctp-lavender">
              Studying CS @ University of Toronto
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen justify-around gap-8 mx-8" id="aboutme">
        <div className="flex flex-col justify-center gap-11">
          <div className="text-6xl">About Me</div>
          <div className="max-w-lg text-ctp-subtext1">
            Hi! I&apos;m Conrad Mo, a Computer Science undergrad at the
            University of Toronto. Coding and playing the piano are my two main
            passions. Music, in particular, holds a special place in my heart,
            allowing me to express myself in unique ways.
          </div>
          <div className="max-w-lg text-ctp-subtext1">
            When I&apos;m not immersed in the world of music and coding, I enjoy
            dining out with friends and exploring Toronto&apos;s diverse
            culinary offerings. Food is a wonderful way to connect, but my true
            love is the piano. If you&apos;re as passionate about music and
            enjoy good company, let&apos;s connect and share our stories!
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/pfp.jpg"
            alt="Profile picture"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex h-screen justify-center items-center" id="skills">
        <div className="flex flex-col justify-start gap-4">
          <div className="text-6xl">Skills</div>
          <div className="flex gap-36">
            <div className="flex flex-col text-3xl gap-2">
              <div className="text-xl text-ctp-mauve">Programming</div>
              <div className="text-ctp-subtext0 gap-2 flex flex-col">
                <div>Python</div>
                <div>C</div>
                <div>Java</div>
                <div>Dart</div>
                <div>HTML/CSS</div>
                <div>Javascript/Typescript</div>
                <div>Bash</div>
                <div>Rust</div>
                <div>SQL</div>
              </div>
            </div>
            <div className="flex flex-col text-3xl gap-2">
              <div className="text-xl text-ctp-yellow">Frameworks/Libraries</div>
              <div className="text-ctp-subtext0 gap-2 flex flex-col">
                <div>Flutter</div>
                <div>React</div>
                <div>Node JS</div>
                <div>Riverpod</div>
                <div>Tailwind CSS</div>
                <div>CI/CD</div>
              </div>
            </div>
            <div className="flex flex-col text-3xl gap-2">
              <div className="text-xl text-ctp-peach">Tools</div>
              <div className="text-ctp-subtext0 gap-2 flex flex-col">
                <div>Git</div>
                <div>Github</div>
                <div>Linux</div>
                <div>Docker</div>
                <div>Firebase</div>
                <div>Postman</div>
                <div>AWS</div>
                <div>GCP</div>
                <div>Azure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
