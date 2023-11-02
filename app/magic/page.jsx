import { Create, Get } from "./actions";

export default async function Page() {
  return (
    <>
      <section className="flex justify-center  pt-12">
        <form className="w-full max-w-sm" action={Create}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="@gmail.com"
              name="email"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <br />
      <main className="flex justify-center">
        <h1>Data:</h1>
        <Get />
      </main>
    </>
  );
}
