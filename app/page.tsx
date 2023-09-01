'use client'
import Image from 'next/image'
import MainLayout from './components/MainLayout'
import Carousel from './components/Carousel';

const images = [
  'https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=2000',
  'https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=2000',
  'https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=2000',
  // Add more image URLs as needed
];

export default function Home() {
  return (
    <main>
      <MainLayout>
      <div className="container mx-auto ">
        <Carousel images={images} />
      </div>
      </MainLayout>
    </main>
  )
}
