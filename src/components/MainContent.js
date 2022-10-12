const MainContent = () => {
   return (
      <>
         <main className="px-9 py-6 bg-[#1A1B21]">
            <div>
               <h1 className="text-3xl font-bold">Riya Bulia</h1>
               <h2 className="text-s font-light text-[#F3BF99]">Full-stack developer</h2>
               <a href="https://riyabulia12.github.io/Portfolio/"
               className="transition ease-in-out delay-150
               text-xs font-light p-2 hover:text-[#F3BF99]">Portfolio</a>
            </div>
            <div className="py-2">
               <a href="https://www.linkedin.com/in/riya-bulia"
               className="transition ease-in-out delay-150 hover:bg-[#F3BF99] duration-300
               bg-[#5093E2] inline-flex rounded justify-center items-center space-x-2 w-full p-3">
               <svg className="w-4 h-4 text-white-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                     d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
               </svg>
                <span className="">LinkedIn</span>
               </a>
            </div>
            <div className="text-left py-4 mt-3">
               <h3 className="text-lg font-bold">About</h3>
               <p className="text-xs font-light leading-5">I am a frontend developer with a particular interest in making things simple and
                  automating daily tasks. I try to keep up with security and best practices, and am
                  always looking for new things to learn.</p>
               <h3 className="text-lg font-bold pt-3">Interest</h3>
               <p className="text-xs font-light leading-5">Philomath. Hodophile. Philanthropist. Tea Connoisseur. Organized (Not just health department clean, Monica Clean!)</p>
            </div>
         </main>
      </>
   )
}

export default MainContent;
