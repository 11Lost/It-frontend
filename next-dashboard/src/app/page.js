import Image from "next/image";
import Banner from "./components/banner";
import Header from './components/header';
import Services from './components/Services';
import BlogList from './components/Blogs-list';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Services />
    <BlogList />
    <Testimonials />
    <Footer />
    </>
  );
}
