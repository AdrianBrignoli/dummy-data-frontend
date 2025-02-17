import PathRender, { PathRenderArgs } from '../basic/PathRender';

export default function ApisAndText() {
  return (
    <section className="h-screen w-full flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex justify-center border border-gray-500 hover:border-gray-400 w-full p-20 rounded-lg">
        <div className="flex flex-col space-y-4 justify-center p-8">
          {PathRenderArgs.map((p, i) => (
            <PathRender key={i} label={p.label} value={p.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
