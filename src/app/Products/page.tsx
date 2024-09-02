import AppliancesSection from "./components/Appliances";
import DeckingSection from "./components/Decking";
import DoorsSection from "./components/Doors";
import FlooringSection from "./components/Flooring";
import KitchenBathSection from "./components/KitchenBath";
import LumberSection from "./components/Lumber";
import InsulationSection from "./components/Insulation";
import RoofingSection from "./components/Roofing";
import SidingSection from "./components/Siding";
import WallCeilingSection from "./components/WallCoveringsCeilingTiles";
import WindowsSection from "./components/Windows";
const ProductsPage: React.FC = () => {
  return (
    <div>
      <AppliancesSection />
      <DeckingSection />
      <DoorsSection />
      <FlooringSection />
      <KitchenBathSection />
      <LumberSection />
      <InsulationSection />
      <RoofingSection />
      <SidingSection />
      <WallCeilingSection />
      <WindowsSection />
    </div>
  );
};

export default ProductsPage;
