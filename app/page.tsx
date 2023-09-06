import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main className='flex flex-col justify-between'>
      <Navbar />
      <div className='flex mx-16 justify-between'>
        <div className='flex flex-col items-start text-5xl gap-2'>
          <h1>Conrad</h1>
          <h1>Mo</h1>
        </div>
        <div className='flex flex-col justify-center'>
          <h1>Software Developer</h1>
          <h1>Studying CS @ University of Toronto</h1>
        </div>
      </div>
    </main>
  )
}
