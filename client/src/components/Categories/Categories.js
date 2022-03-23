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
const callouts = [
  {
    name: 'Electronics',
    imageSrc: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
      name: 'Jewelery',
      imageSrc: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
  {
    name: "Men's clothing",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: "Women's clothing",
    imageSrc: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function Categories() {
  return (
<section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-contain"
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
  </section>
  )
}

// const getProducts = (categoryName) => {
//   //   fetch(`https://fakestoreapi.com/category/${categoryName}`)
//   //   .then((res) => res.json())
//   //   .then((data) => setProducts(data))}
  
// };

