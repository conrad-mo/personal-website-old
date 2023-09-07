import Navbar from "../components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="ctp-latte dark:ctp-mocha relative">
      <div className="sticky top-0 max-h-0">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-screen" id="Home">
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
      <div className="flex h-screen justify-around gap-8 mx-8">
        <div className="flex flex-col justify-center gap-11">
          <div className="text-8xl" id="AboutMe">About Me</div>
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
          <Image src="/pfp.jpg" alt="Profile picture" width={400} height={400}/>
        </div>
      </div>
    </main>
  );
}
