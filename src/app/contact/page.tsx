import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function Contact() {
  return (
    <section className="h-screen flex flex-col justify-center">
      <div className="relative max-w-[1300px] w-full flex flex-col mx-auto items-center">
        <h1 className="text-[3em]">Contact</h1>
        <p className="text-gray-500 my-4">
          Feel free to reach out about any enquiries.
        </p>
        <div className="flex text-[3em] space-x-20 mt-2">
          <BsGithub />
          <BsLinkedin />
          <BsInstagram />
        </div>

        <div className="absolute -top-60 rotate-45 -z-10 w-full h-[50em] bg-[radial-gradient(ellipse_at_center,_rgba(120,40,80,0.4)_0%,_rgba(40,0,0,0)_50%)]"></div>
      </div>
    </section>
  );
}
