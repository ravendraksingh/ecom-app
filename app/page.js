import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Image
          src="/home-hero-1920x1080.png"
          alt="home-page-image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="container p-3 md:p-[5rem]">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-3">Innovative IT Solutions to Empower Your Business </h1>
        <p className="text-xl md:text-2xl">
          At Niyava, we help businesses thrive in the digital age through
          cutting-edge IT consulting, custom software development, CRM
          implementation, and technology outsourcing. Whether you're a growing
          enterprise or an established organization, our expert team delivers
          scalable, secure, and tailor-made solutions that accelerate your
          digital transformation. From optimizing operations to building
          future-ready platforms, we combine strategy, innovation, and deep tech
          expertise to turn your business challenges into opportunities. Let's
          build what's next - together.
        </p>
      </div>
    </>
  );
}
