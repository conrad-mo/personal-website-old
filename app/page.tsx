import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col ctp-latte dark:ctp-mocha">
      <Navbar />
      <div className="">
        <div className="flex mx-16 justify-between">
          <div className="flex flex-col items-start text-5xl gap-2">
            <div>Conrad</div>
            <div>Mo</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-ctp-rosewater">Software Developer</div>
            <div>Studying CS @ University of Toronto</div>
          </div>
        </div>
      </div>
    </main>
  );
}
