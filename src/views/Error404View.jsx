function Error404View() {
  return (
    <>
      <div className="text-center flex justify-center items-center min-h-full py-16">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>
          <img
            className="w-64 h-64"
            src="Images/404-error-page/errorimg.png"
            alt="error-img"
          />
          <p className="mb-4">Uh-oh!</p>
          <p className="mb-8">We can&apos;t find that page.</p>
          <a
            href="/"
            className=" bg-gray-700 cursor-pointer text-white px-4 py-2 transition-colors rounded duration-300 hover:text-gray-300 "
          >
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
}

export default Error404View;
