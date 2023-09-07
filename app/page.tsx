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
    </main>
  );
}
