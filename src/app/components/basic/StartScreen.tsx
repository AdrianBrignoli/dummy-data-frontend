export default function StartScreen() {
  return (
    <section className="h-screen text-center">
      <div className="relative h-full flex flex-col justify-center mx-auto max-w-[1300px]">
        <h1 className="text-[3em] mb-4">Dummy Product data API</h1>
        <p className="text-gray-400 text-lg">
          Fetch AI generated product data from my end-point. Great for
          development projects. This is a hobby project of mine that will
          continue to expand as the need for a bigger variety of dummy data
          grows for my own projects. Will add GraphQL support in the future for
          those who want to have fun using this technology as well.
        </p>
        <div className="absolute top-30 -rotate-45 -z-10 w-full h-[50em] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,160,0.4)_0%,_rgba(0,0,240,0)_50%)]"></div>
      </div>
    </section>
  );
}
