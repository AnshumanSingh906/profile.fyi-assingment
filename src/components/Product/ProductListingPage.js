// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import ProductCard from './ProductCard';
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, getProducts, getSinglProduct } from '../../store/product/action';
// import { PAGE_LIMIT } from '../../api-config/constant';
// import ProductModal from './ProductModal';

// const ProductListingPage = () => {
//   const [productsAvailable, setProductsAvailable] = useState([]);
//   const [productDetail, setProductDetail] = useState({ show: false, id: null, data: null });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(false); // Added state for loading
//   const dispatch = useDispatch();
  
//   const productsPerPage = PAGE_LIMIT;

//   // Ensure productsAvailable is an array and use filter
//   const filteredProducts = Array.isArray(productsAvailable) 
//     ? productsAvailable.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     : [];

//   const currentProducts = filteredProducts;

//   const totalPages = Math.ceil(100 / PAGE_LIMIT);

//   const handleClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     getProductList(pageNumber);
//   };

//   const handleAddToCart = async (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);

//     try {
//       await dispatch(addToCart(product)); // Pass the product to the action
//     } catch (error) {
//       console.error("Failed to add product to cart", error);
//     }

//     // Animate cart icon with a bounce effect
//     const cartIcon = document.querySelector('.cart-icon');
//     if (cartIcon) {
//       cartIcon.classList.add('animate-bounce');
//       setTimeout(() => {
//         cartIcon.classList.remove('animate-bounce');
//       }, 1000);
//     }
//   };

//   const getProductList = async (pageNumber) => {
//     setLoading(true); // Start loading
//     try {
//       const response = await dispatch(getProducts(pageNumber));
//       // Assuming the response has a data property with products
//       if (response && Array.isArray(response)) {
//         setProductsAvailable(response);
//       } else {
//         console.error("Unexpected response format", response);
//         setProductsAvailable([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch products", error);
//       setProductsAvailable([]);
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   const handleProductView = async (productDetail) => {
//     try {
//       const response = await dispatch(getSinglProduct(productDetail.id));
//       setProductDetail({ show: true, id: productDetail.id, data: response });
//     } catch (error) {
//       console.error("Failed to fetch product details", error);
//     }
//   };

//   useEffect(() => {
//     getProductList(currentPage);
//   }, [currentPage]);

//   return (
//     <>
//       {productDetail.show && productDetail.data && <ProductModal product={productDetail.data} onAddToCart={handleAddToCart} onClose={() => { setProductDetail({ show: false, id: null, data: null }) }} />}
//       <div className="bg-gray-50 min-h-screen flex flex-col items-center">
//         <Header cartItemCount={cartItems.length} onSearch={setSearchQuery} />

//         <main className="w-full max-w-screen-lg px-4 py-8">
//           <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">Our Products</h1>
          
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               {/* You can replace this with your loader component or spinner */}
//               <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                 {currentProducts.map((product) => (
//                   <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} onViewDetails={handleProductView} />
//                 ))}
//               </div>
              
//               <div className="flex justify-center mt-10 space-x-2">
//                 {Array.from({ length: totalPages }, (_, i) => (
//                   <button
//                     key={i + 1}
//                     onClick={() => handleClick(i + 1)}
//                     className={`mx-1 px-4 py-2 rounded-full transition-colors duration-300 ${
//                       currentPage === i + 1
//                         ? 'bg-blue-600 text-white shadow-lg transform scale-105'
//                         : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//               </div>
//             </>
//           )}
//         </main>
//       </div>
//     </>
//   );
// };

// export default ProductListingPage;































import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts, getSinglProduct } from '../../store/product/action';
import { PAGE_LIMIT } from '../../api-config/constant';
import ProductModal from './ProductModal';

const ProductListingPage = () => {
  const [productsAvailable, setProductsAvailable] = useState([]);
  const [productDetail, setProductDetail] = useState({ show: false, id: null, data: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false); // Added state for loading
  const dispatch = useDispatch();
  
  const productsPerPage = PAGE_LIMIT;

  // Ensure productsAvailable is an array and use filter
  const filteredProducts = Array.isArray(productsAvailable) 
    ? productsAvailable.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  const currentProducts = filteredProducts;

  const totalPages = Math.ceil(100 / PAGE_LIMIT);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    getProductList(pageNumber);
  };

  const handleAddToCart = async (product) => {
    setCartItems((prevItems) => [...prevItems, product]);

    try {
      await dispatch(addToCart(product)); // Pass the product to the action
      // toast.success("Item added to cart successfully!"); // Show success message
    } catch (error) {
      console.error("Failed to add product to cart", error);
    }

    // Animate cart icon with a bounce effect
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('animate-bounce');
      setTimeout(() => {
        cartIcon.classList.remove('animate-bounce');
      }, 1000);
    }
  };

  const getProductList = async (pageNumber) => {
    setLoading(true); // Start loading
    try {
      const response = await dispatch(getProducts(pageNumber));
      // Assuming the response has a data property with products
      if (response && Array.isArray(response)) {
        setProductsAvailable(response);
      } else {
        console.error("Unexpected response format", response);
        setProductsAvailable([]);
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
      setProductsAvailable([]);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleProductView = async (productDetail) => {
    setLoading(true); // Start loading for product detail
    try {
      const response = await dispatch(getSinglProduct(productDetail.id));
      setProductDetail({ show: true, id: productDetail.id, data: response });
    } catch (error) {
      console.error("Failed to fetch product details", error);
    } finally {
      setLoading(false); // End loading for product detail
    }
  };

  useEffect(() => {
    getProductList(currentPage);
  }, [currentPage]);

  return (
    <>
      {productDetail.show && productDetail.data && <ProductModal product={productDetail.data} onAddToCart={handleAddToCart} onClose={() => { setProductDetail({ show: false, id: null, data: null }) }} />}
      <div className="bg-gray-50 min-h-screen flex flex-col items-center">
        <Header cartItemCount={cartItems.length} onSearch={setSearchQuery} />

        <main className="w-full max-w-screen-lg px-4 py-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">Our Products</h1>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              {/* Loader component or spinner */}
              <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} onViewDetails={handleProductView} />
                ))}
              </div>
              
              <div className="flex justify-center mt-10 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handleClick(i + 1)}
                    className={`mx-1 px-4 py-2 rounded-full transition-colors duration-300 ${
                      currentPage === i + 1
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
      {/* <ToastContainer /> Render toast container */}
    </>
  );
};

export default ProductListingPage;
