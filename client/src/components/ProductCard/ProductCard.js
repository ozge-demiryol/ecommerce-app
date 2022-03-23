/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const ProductCard = (props) => {
  
  return (
        // <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        //     <div key={props.id} className="group relative">
        //       <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        //         <img
        //           src={props.img}
        //           alt=""
        //           className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        //         />
        //       </div>
        //       <div className="mt-4 flex justify-between">
        //         <div>
        //           <h3 className="text-sm text-gray-700">
        //             <a href={props.href}>
        //               <span aria-hidden="true" className="absolute inset-0" />
        //               {props.title}
        //             </a>
        //           </h3>
        //         </div>
        //         <p className="text-sm font-medium text-gray-900">{props.price}</p>
        //       </div>
        //     </div>
        // </div>

      // <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
            <a key={props.id} href={props.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={props.img}
                  alt=""
                  className="w-full h-10 object-center object-contain group-hover:opacity-75 hover:cursor-pointer hover:scale-90"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
              <p className="mt-1 text-lg font-bold text-gray-900">{props.price} $</p>
            </a>
        </div>
)
}

// const ProductCard = (props) => {
//   return (
//     <>
//         <img 
//         src={props.img} 
//         alt="propsimage" 
//         className="h-28 w-28 object-contain"
//         />
//         <div className="mb-5">
//             <h5 className="text-center w-2/3">{props.title}</h5>
//             {/* <p>{props.description}</p> */}
//             <p>{props.price}</p>
//             {/* <button className="bg-zinc-800 py-2 px-4 rounded-md text-white">Add to Cart</button> */}
//         </div>
//     </>
//   )
// }
    
export default ProductCard