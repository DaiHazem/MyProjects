import React, { Component } from 'react';
import './App.css';
import Section from "./Section/Section";
import Layout from "./Layout/Layout";
import Products from "./Products/Products";
import Footer from "./FooterW/Footer";
import Modelgrid from "./Modeling/ModelingGrid";
import Mainparagraph from "./MainParagraph/MainParagraph";
import Brandgrid from "./Brands/BrandsGrid/BrandsGrid";
class App extends Component {
  render() {
    return (
      <div>
         <Layout>
           <Mainparagraph/>
           <Brandgrid/>
           <Section/>
           <Products/>
           <Modelgrid/>
           <Footer/>
         </Layout>

      </div>
    );
  }
}

export default App;
