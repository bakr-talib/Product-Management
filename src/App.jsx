import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="bg-gray-500 min-h-screen">
      <header className="fixed top-0 w-screen bg-gray-900 text-white p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-400">عرض المنتجات </h1>
      </header>
      <main className='mt-12'>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
