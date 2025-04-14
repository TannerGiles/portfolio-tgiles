import React from 'react';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <main>
      <div className="hero-section">
  <h1>Tanner Giles</h1>
</div>
    <div className="header">
  <h2 className="header-title">Mechanical Engineering Technologist | CAD Designer</h2>
  <h4 className="header-phone">519-212-4269</h4>
  <h3 className="header-email">tannergiles2003@icloud.com</h3>
</div>
<div className="section-divider"></div>




      <ImageGallery
        title="Pneumatic Crimping Machine"
        description="Burners in production required retainers to ensure gasket compression and component stability. These retainers, crafted from 18-gauge stainless steel, featured strategically placed tabs that were bent and secured to burners at the end of the assembly process. Initially, operators manually bent these tabs using an older fixture, causing discomfort over extended periods. To address this, a modular pneumatic crimping machine was designed, significantly enhancing ergonomics and reducing cycle times. This machine featured convertible tooling, enabling rapid changeover between crimping and staking processes. The improved system supported a total of 15 distinct products, allowing quick tooling swaps across different product types and providing additional capacity for future product development."
        folder="crimping"
        count={4}
      />
      <ImageGallery
        title="Pneumatic Tube Press"
        description="Designed a modular pneumatic tube press system featuring a precision-aligned, Poka-Yoke hole pattern for seamless integration of 15 interchangeable fixture plates. These custom-designed fixture plates securely supported burner plenum assemblies during the press-fitting of Venturi tubes, significantly improving repeatability, minimizing changeover times, and enhancing overall assembly quality and efficiency."
        folder="tube"
        count={4}
      />
      <ImageGallery
        title="Product Design - Ceramic Tile & Nextel Ceramic Fiber Burners"
        description="All burners were custom-designed to align with our company's specific production methods, ensuring seamless integration into our existing workflow. At the same time, they were engineered to meet the precise requirements of our clients—including exact dimensions, weight limitations, compatible fittings, and the necessary BTU output for optimal performance."
        folder="burner"
        count={4}
      />
      <ImageGallery
        title="Product Design - Coral Seeding Tool"
        description="This three-piece, hydraulicly pressed, ceramic coral seeding product was designed to meet specific requirements, including a simple geometry for efficient side-by-side placement on rods during the prepping stage, and a tetrahedral form to facilitate easy and stable coral seeding."
        folder="coral"
        count={1}
      />
      <ImageGallery
        title="Product Design - Transtech"
        description="A design-driven exploration of materials, form, and function, balancing precision craftsmanship with innovative manufacturing. New pieces are created through repurposing vintage objects and technology, giving them renewed purpose while preserving their artistic and historical value."
        folder="transtech"
        count={4}
      />
      <ImageGallery
        title="Gearbox Design"
        description="Designed a 3:1 reduction gearbox as part of a school project, utilizing SolidWorks for detailed 3D modeling and conventional mechanical design techniques. The project showcased applied mathematical analysis to achieve theoretical efficiency, strength, and gear ratios, integrating core principles learned throughout the program.
"
        folder="gearbox"
        count={3}
      />
    </main>
  );
}

export default App;
