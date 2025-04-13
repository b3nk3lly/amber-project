import './App.css';
import { ModalContent } from './components/Modal';
import TreeNode from './components/TreeNode';

const buildingIconSrc = "img/icons/apartments.png";
const newspaperIconSrc = "img/icons/newspaper.png";
const blueprintIconSrc = "img/icons/blueprint.png";
const permitIconSrc = "img/icons/approve.png";

function App() {

  return (
    <div className="bg-[url(/big-tree.png)] w-[1024px] h-[1536px] bg-center bg-no-repeat" style={{ backgroundSize: "100% 100%" }}>
      {/* leaves */}
      <div id="leaves" className="w-full h-[30%] px-16 pt-24">
        <div className="flex flex-col items-center space-y-4">
          {/* leaves row 1 */}
          <div className="flex flex-row justify-evenly w-3/5">
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Application" description="This is..." imageSources={["img/permits/application.jpeg"]} />
            </TreeNode>
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-1.jpeg"]} />
            </TreeNode>
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-2.jpeg"]} />
            </TreeNode>
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-3.jpeg"]} />
            </TreeNode>
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-4.jpeg"]} />
            </TreeNode>
          </div>
          {/* leaves row 2 */}
          <div className="flex flex-row justify-between w-3/5">
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-5.jpeg"]} />
            </TreeNode>
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-6.jpeg"]} />
            </TreeNode>
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-7.jpeg"]} />
            </TreeNode>
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-8.jpeg"]} />
            </TreeNode>
            <TreeNode icon={permitIconSrc}>
              <ModalContent title="Permit" description="This is..." imageSources={["img/permits/permit-9.jpeg"]} />
            </TreeNode>
          </div>
        </div>
      </div>
      {/* trunk */}
      <div className="w-full h-[35%] py-4 flex">
        <div className="flex ml-112 mr-60 space-x-4">
          {/* trunk column 1 */}
          <div className="flex flex-col justify-between h-full">
            <TreeNode icon={newspaperIconSrc}>
              <ModalContent title="Newspaper Clipping" description="This is..." imageSources={["img/newspaper/clipping-1.jpg"]} />
            </TreeNode>
            <TreeNode icon={newspaperIconSrc}>
              <ModalContent title="Newspaper Clipping" description="This is..." imageSources={["img/newspaper/clipping-2.jpg"]} />
            </TreeNode>
            <TreeNode icon={newspaperIconSrc}>
              <ModalContent title="Newspaper Clipping" description="This is..." imageSources={["img/newspaper/clipping-3.jpg"]} />
            </TreeNode>
            <TreeNode icon={newspaperIconSrc}>
              <ModalContent title="Newspaper Article" description="This is..." imageSources={["img/newspaper/article-1.jpg"]} />
            </TreeNode>
            <TreeNode icon={newspaperIconSrc}>
              <ModalContent title="Newspaper Article" description="This is..." imageSources={["img/newspaper/article-2.jpg"]} />
            </TreeNode>
          </div>
          {/* trunk column 2 */}
          <div className="flex flex-col justify-between h-full">
            <TreeNode icon={blueprintIconSrc}>
              <ModalContent title="Blueprints" description="This is..." imageSources={["img/blueprints/blueprint-1.jpg"]} />
            </TreeNode>
            <TreeNode icon={blueprintIconSrc}>
              <ModalContent title="Blueprints" description="This is..." imageSources={["img/blueprints/blueprint-2.jpg"]} />
            </TreeNode>
            <TreeNode icon={blueprintIconSrc}>
              <ModalContent title="Blueprints" description="This is..." imageSources={["img/blueprints/blueprint-3.jpg"]} />
            </TreeNode>
            <TreeNode icon={blueprintIconSrc}>
              <ModalContent title="Blueprints" description="This is..." imageSources={["img/blueprints/blueprint-4.jpg"]} />
            </TreeNode>
            <TreeNode icon={blueprintIconSrc}>
              <ModalContent title="Blueprints" description="This is..." imageSources={["img/blueprints/blueprint-5.jpg"]} />
            </TreeNode>
          </div>
        </div>
      </div>
      {/* roots */}
      <div className="w-full h-[30%] px-40 my-16">
        <div className="flex flex-col items-center space-y-4">
          {/* roots row 1 */}
          <div className="flex flex-row justify-between w-full">
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Elevator" description="This is the elavator" imageSources={["img/building/elevator-1.jpg", "img/building/elevator-2.jpg", "img/building/elevator-5.jpg"]} />
            </TreeNode>
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Fire Plan" description="This is the fire plan" imageSources={["img/building/fire-plan.jpeg"]} />
            </TreeNode>
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Aerial Shot" description="This is..." imageSources={["img/building/aerial.jpeg"]} />
            </TreeNode>
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Spatz" description="This is..." imageSources={["img/building/spatz.jpeg"]} />
            </TreeNode>
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Entrance" description="This is..." imageSources={["img/building/entrance.jpeg"]} />
            </TreeNode>
          </div>
          {/* roots row 2 */}
          <div className="flex flex-row justify-evenly w-full">
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Frame" description="This is..." imageSources={["img/building/frame-1.jpeg", "img/building/frame-2.jpeg"]} />
            </TreeNode>
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Hallway" description="This is..." imageSources={["img/building/hallway-1.jpeg", "img/building/hallway-2.jpeg"]} />
            </TreeNode>
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Sides" description="This is..." imageSources={["img/building/side-1.jpeg", "img/building/side-2.jpeg"]} />
            </TreeNode>
            <TreeNode icon={buildingIconSrc}>
              <ModalContent title="Exterior" description="This is..." imageSources={["img/building/exterior.jpeg"]} />
            </TreeNode>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
