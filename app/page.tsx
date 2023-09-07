import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="ctp-latte dark:ctp-mocha relative">
      <div className="absolute top-0 right-0">
      <Navbar />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-start text-8xl gap-2 m-4">
          <div>Conrad</div>
          <div>Mo</div>
          <div className="flex flex-col text-5xl my-8 gap-6">
            <div className="text-ctp-rosewater">Software Developer</div>
            <div className="text-ctp-lavender">Studying CS @ University of Toronto</div>
          </div>
        </div>
      </div>
      <div className="flex h-screen">
        <div>About</div>
        <div>Hi! I'm Conrad Mo, a Computer Science undergrad at the University of Toronto. Coding and playing the piano are my two main passions. Music, in particular, holds a special place in my heart, allowing me to express myself in unique ways.</div>
        <div>When I'm not immersed in the world of music and coding, I enjoy dining out with friends and exploring Toronto's diverse culinary offerings. Food is a wonderful way to connect, but my true love is the piano. If you're as passionate about music and enjoy good company, let's connect and share our stories!</div>
      </div>
    </main>
  );
}
