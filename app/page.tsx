import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
		<h1 className="font-medium text-2xl mb-8 tracking-tighter">hi, I'm Nuno</h1>
		<p className="prose prose-neutral dark:prose-invert">
		  I like think of myself as an Architect. I am often at the nexus of technology and businness, strategically planning technical execution that drives business value.   
		</p>
		<p className="prose prose-neutral dark:prose-invert">
		  I am currently working as a Developer at {' '}
		  <Link href="https://coreflux.org/">Coreflux</Link>,
		  where I'm building the {' '}
		  <Link href="https://mqtt.coreflux.org/">Coreflux Cloud Platform</Link>.
		</p>
		<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/nunomiguelcg"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/nunomgoncalves"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">connect with me</p>
          </a>
        </li>

      </ul>
    </section>
  );
}

