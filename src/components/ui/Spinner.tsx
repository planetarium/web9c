export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden">
      <div className="inline-block w-96 rounded-full" role="status">
        <p className="font-semibold text-center text-2xl">Web9c</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="-inline-block rounded-full"
        >
          <g className="animate-spinner5">
            <circle cx="500" cy="500" r="479" fill="#fff" />
            <path
              fill="#ff2500"
              d="M500.63 20c239.42 0 438.11 175.86 473.98 405.4.04.26-97.97.1-98.22 0-.5-.22.88 150.92.95 150.94.07.03 97.11-.76 96.99 0C937.73 805.03 739.44 980 500.63 980 235.85 980 20.88 764.93 20.88 500c0-264.92 214.97-480 479.75-480"
            />
            <circle cx="500" cy="500" r="385" fill="#fff" />
          </g>
          <g className="animate-spinner4">
            <circle cx="500" cy="500" r="375" fill="#222" />
            <path
              fill="#fff"
              d="M777.77 442.35h98.06s10.2 32.67 10.2 57.67-10.2 59.01-10.2 59.01h-91.95l-6.1-116.68Z"
            />
            <circle cx="500" cy="500" r="295" fill="#fff" />
          </g>
          <g className="animate-spinner3">
            <circle cx="500" cy="500" r="275" fill="#ff6500" />
            <circle cx="500" cy="500" r="210" fill="#fff" />
            <path
              fill="#fff"
              d="M615 457.12h157.18s7.67 24.28 7.67 42.87c0 18.58-7.67 43.87-7.67 43.87H616.39l-9.43-86.74Z"
            />
          </g>
          <g className="animate-spinner2">
            <circle cx="500" cy="500" r="185" fill="#444" />
            <circle cx="500" cy="500" r="145" fill="#fff" />
            <path
              fill="#fff"
              d="M580 472.2h103.81s5.07 15.75 5.07 27.8c0 12.06-5.07 28.45-5.07 28.45h-97.58l-6.23-56.25Z"
            />
          </g>
          <g className="animate-spinner1">
            <circle cx="500" cy="500" r="100" fill="orange" />
            <circle cx="500" cy="500" r="64" fill="#fff" />
            <path
              fill="#fff"
              d="M540.73 484.54h58.3s1.32 8.76 1.32 15.46c0 6.7-1.18 15.82-1.18 15.82H544.2l-3.47-31.28Z"
            />
          </g>
        </svg>
        <p className="font-semibold text-center text-xl">Booting WASM.</p>
      </div>
    </div>
  );
};
