import Carousel from "./components/Carousel"
import Header from "./components/Header"

function App() {

  return (
    <main className=" max-w-screen-2xl mx-auto my-auto relative flex flex-col h-full max-h-full">
      <Header />
      <section>
        <Carousel />
      </section>
      
      <section className="flex flex-col xl:flex-row">
        <img src="/image-about-dark.jpg" alt="About Us image" />
        <div className="py-10 lg:py-14 px-6 lg:px-10">
          <h3 className="font-bold uppercase text-lg tracking-[.3em] my-4">About our furniture</h3>
          <p className="text-dark-gray ">
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <img src="/image-about-light.jpg" alt="About Us image" />
      </section>
    </main>
  )
}

export default App
