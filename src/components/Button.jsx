
export function Button( {children} ) {
    return(
        <button className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition">
              {children}
        </button>
    )
}