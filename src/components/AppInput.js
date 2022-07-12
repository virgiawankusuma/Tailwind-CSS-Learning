import React from 'react';

function AppInput() {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 dark:text-gray-100">Input</h2>
      <div className="px-6 py-4 rounded-lg border shadow-orange-200 shadow mb-6 max-w-lg mx-auto bg-white group dark:bg-gray-800 dark:border-none dark:shadow-none dark:text-gray-200 dark dark:hover:shadow-lg">
        <form>
          <label for="email">
            <span className="block mb-1 text-slate-600 after:content-['*'] after:text-orange-700 after:ml-0.5">Email</span>
            <input type="email" id="email" placeholder="Add email.." className="px-3 py-2 border shadow rounded w-full block text-sm focus:outline-none focus:ring-1 focus:ring-orange-300 invalid:text-orange-700 invalid:focus:ring-orange-700 invalid:focus:border-orange-700 peer dark:valid:text-black"/>
            <p className="text-sm m-1 text-orange-700 invisible peer-invalid:visible">Email not valid!</p>
          </label>
        </form>
      </div>
    </section>
  );
}

export default AppInput;