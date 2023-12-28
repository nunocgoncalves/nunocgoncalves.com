import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">hi, I'm Nuno</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I call myself a Solutions Engineer since what I do is engineer solutions in any realm. 
        I currently work as a Fullstack Developer at, {' '}
        <Link href="https://coreflux.org/">Coreflux</Link>,
        where I'm building the {' '}
        <Link href="https://mqtt.coreflux.org/">Cloud Platform</Link>.
      </p>
    </section>
  );
}
