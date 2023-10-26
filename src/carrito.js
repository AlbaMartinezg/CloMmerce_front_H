
/* El siguiente código es para colocar el link de dicionar al carro de compras

<div className="mt-6">
  <a
    href={product.href}
    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
  >
    Add to bag<span className="sr-only">, {product.name}</span>
  </a>
</div>

 <div className="flex-1 bg-white">
          <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Navega por Categoría</h2>

              <a href="/" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Más Categorías
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

          <div className="mt-4 flow-root rounded-r-full">
            <div className="-my-2">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
               
                {categoria.map((category) => (
                  <a
                    key={category.nombre}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imagen} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    /> <br/><br/>
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.nombre}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>        
      </div>
      </div>

*/