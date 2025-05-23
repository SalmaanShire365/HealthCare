import Link from "next/link"

const ButtonBackgroundShine = () => {
    return (
      <Link href="/login">
      <button className='inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 animate-background-shine'>
        Sign In
      </button>
      </Link>
    );
  };
  
  export default ButtonBackgroundShine;
