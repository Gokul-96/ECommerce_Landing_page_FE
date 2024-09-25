import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { getProducts } from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Add category state
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    setFilteredProducts(data); // Initially display all products
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterProducts(e.target.value, selectedCategory);
  };



  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    filterProducts(searchTerm, e.target.value);
  };

  const filterProducts = (searchTerm, category) => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }



    if (category !== 'All') {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products..."
        className="border p-2 w-full mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="border p-2 w-full mb-4"
      >
        <option value="All">All Categories</option>
        <option value="Home Appliance">Home Appliance</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Kitchen Appliance">Kitchen Appliance</option>
        
      </select>




      {/* Responsive Grid for Product Cards */}



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default Home;
