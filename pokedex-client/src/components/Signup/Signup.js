import { Link } from "react-router-dom"

function Signup() {
  return (
    <>
      <header className="bg-sky-900 rounded-br-3xl">
        <nav className="p-6 mx-auto container relative">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold uppercase">Poke-Catch</h1>
            </div>

            <div className="hidden md:flex space-x-8">

              <Link to="/" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
                login
              </Link>

              <Link to="Home/" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
                pokemon
              </Link>

            </div>
          </div>
        </nav>
      </header>

      <section className="pt-5 px-20 pb-20 width-md mx-auto mt-20 mb-10 rounded-2xl bg-red-600 w-96 shadow-2xl shadow-black flex-col flex items-center justify-center box-border">
        <div className="flex gap-3 mb-5">
          <div className="bg-green-900 rounded-3xl p-2 border hover:bg-green-500 animate-wiggling"></div>
          <div className="bg-blue-900 rounded-3xl p-2 border hover:bg-blue-500 animate-wiggle"></div>
          <div className="bg-red-900 rounded-3xl p-2 border hover:bg-red-500 animate-wiggled"></div>
        </div>

        <form className="container flex-col flex items-center justify-center gap-5 bg-black w-80 h-96 py-60 rounded-xl">
          <input
            type="text"
            placeholder="username"
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />

          <input
            type="password"
            placeholder="password"
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />

          <input
            type="password"
            placeholder="confirm password"
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />

          <input
            type="number"
            placeholder="phone number"
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />

          <input
            type="email"
            placeholder="email"
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />

          <button className="text-lg uppercase font-bold bg-red-600 px-6 py-2 text-white rounded-xl border-2 border-black shadow shadow-black hover:text-black">
            signup
          </button>

        </form>

        <div className="flex-col flex items-center justify-items-center mt-10 w-60 gap-3">
          <p className="text-white">already have an account</p>
          <Link to="/" className="text-lg uppercase font-bold text-white rounded-xl px-6 py-2 bg-green-600 hover:text-black shadow shadow-black">login</Link>
        </div>

      </section>
    </>
  )
}

export default Signup