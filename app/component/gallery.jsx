import Image from "next/image"

function Gallery() {
  return (
    <div className="h-full bg-gallery bg-repeat">
      <div className="flex items-center justify-center">
      <h1 className="mt-14 text-xl font-bold tracking-widest">GALLERY</h1>
      </div>
      <div className="flex items-center justify-center px-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-gallery p-10 rounded-xl shadow-lg mb-10">
            <Image 
            src={'/1.jpg'}
            width={500}
            height={600}
            alt="Picture of the author"
            className="rounded-xl"
            />

          <Image 
            src={'/2.jpg'}
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-xl"
            />

            <Image 
            src={'/3.jpg'}
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-xl"
            />

            <Image 
            src={'/4.jpg'}
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-xl"
            />
        </div>

        </div>
    </div>
  )
}

export default Gallery