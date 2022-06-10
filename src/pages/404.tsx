// 404.js
import { NextPage } from 'next';
import Image from 'next/image';

const FourOhFour: NextPage = () => {
	return (
		<>
			<div className="container flex flex-wrap h-screen overflow-y-auto p-4 mx-auto md:pl-24 lg:pl-24 xl:pl-24">

        <div className="flex flex-grow flex-col md:w-2/5 justify-center items-start text-center md:text-left lg:w-1/2 xl:w-1/2">
          <div className="w-full my-3 text-4xl font-bold text-primary lg:text-9xl xl:text-8xl">
						404
          </div>
          <div className="w-full text-xl font-semibold lg:text-4xl xl:text-4xl">
						Page not found!<br/>
						Be careful there could be ghosts here.
          </div>
        </div>

        <div className="flex flex-wrap py-6">
					<Image src="/ghost.png" width={550} height={400}></Image>
        </div>

      </div>

		</>
	);
};

export default FourOhFour;
