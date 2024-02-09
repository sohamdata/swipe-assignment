import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Invoice from "./pages/Invoice";
import InvoiceList from "./pages/InvoiceList";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <Routes>
            <Route path="/" element={<InvoiceList />} />
            <Route path="/create" element={<Invoice />} />
            <Route path="/create/:id" element={<Invoice />} />
            <Route path="/edit/:id" element={<Invoice />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </Container>
      </div>
    </>
  );
};

export default App;
