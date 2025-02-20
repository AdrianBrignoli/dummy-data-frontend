import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const socialLinks = [
  { Icon: BsGithub, href: 'https://github.com/YourUsername', label: 'GitHub' },
  {
    Icon: BsLinkedin,
    href: 'https://linkedin.com/in/YourProfile',
    label: 'LinkedIn',
  },
  {
    Icon: BsInstagram,
    href: 'https://instagram.com/YourProfile',
    label: 'Instagram',
  },
];

export default function Contact() {
  return (
    <section className="h-screen flex flex-col justify-center">
      <div className="relative max-w-[1300px] w-full flex flex-col mx-auto items-center">
        <h1 className="text-[3em]">Contact</h1>
        <p className="text-gray-500 my-4">
          Feel free to reach out about any enquiries.
        </p>
        <div className="flex text-[3em] space-x-20 mt-2">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="absolute -top-60 rotate-45 -z-10 w-full h-[50em] bg-[radial-gradient(ellipse_at_center,_rgba(120,40,80,0.4)_0%,_rgba(40,0,0,0)_50%)]"></div>
      </div>
    </section>
  );
}
