import Navbar from "@/app/Components/Navbar";
import HeroSection from "@/app/Components/HeroSection";
import Trending from "./Components/Trending";
import Stats from "./Components/Stats";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Trending/>
     <Stats/>
     <Categories/>
     <Footer/>
    </>
     
  )
}
