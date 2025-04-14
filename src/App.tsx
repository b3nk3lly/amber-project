import './App.css';
import { ModalContent } from './components/Modal';
import TreeNode from './components/TreeNode';

function App() {

  return (
    <div className="bg-[url(/big-tree.png)] w-[1024px] h-[1536px] bg-center bg-no-repeat" style={{ backgroundSize: "100% 100%" }}>
      {/* leaves */}
      <div id="leaves" className="w-full h-[30%] px-16 pt-24">
        <div className="flex flex-col items-center space-y-4">
          {/* leaves row 1 */}
          <div className="flex flex-row justify-evenly w-3/5">

          </div>
          {/* leaves row 2 */}
          <div className="flex flex-row justify-between w-3/5">

          </div>
        </div>
      </div>
      {/* trunk */}
      <div className="w-full h-[35%] py-4 flex">
        <div className="flex ml-112 mr-60 space-x-4">
          {/* trunk column 1 */}
          <div className="flex flex-col justify-between h-full">

          </div>
          {/* trunk column 2 */}
          <div className="flex flex-col justify-between h-full">

          </div>
        </div>
      </div>
      {/* roots */}
      <div className="w-full h-[30%] px-40 my-16">
        <div className="flex flex-col items-center space-y-4">
          {/* roots row 1 */}
          <div className="flex flex-row justify-between w-full">
            <TreeNode label="1">
              <ModalContent
                title="First Records (going earliest to the beginning of construction)"
                descriptions={["The Mi'kmaq have been in Nova Scotia since time immemorial. Halifax was originally referred to as Kjipuktuk by the Mi'kmaq people."]}
              />
            </TreeNode>
            <TreeNode label="3">
              <ModalContent
                title="1827 Map of Halifax"
                descriptions={
                  [
                    "The map from 1827 shows Halifax and gives us some context. The street at the bottom is the road to Fort Massey Church (presently known as Queen Street). Fort Massey is an important landmark, as Church Street eventually joins St. Luke's and Fort Massey. Based on this, we can infer the location where St. Luke's would be built, although this map does not show any buildings at that time. A disclaimer here: this map may not be entirely accurate since Tobin Street does not appear, even though it is visible on the earlier 1749 map, although unnamed.",
                    "Although no buildings are shown, some may have been constructed. By 1758, the land that included Lot 8 was under the ownership of Benjamin Green, though whether he purchased it or if it was redistributed to him by the crown is unclear."
                  ]}
                imageSources={["img/roots/fig-2.png"]}
              />
            </TreeNode>
            <TreeNode label="5">
              <ModalContent
                title="Saint Luke's Cathedral"
                descriptions={
                  [
                    "By 1844, Saint Luke's Chapel of Ease was built on this land. A chapel of ease is a church constructed in a more convenient location. The official Saint Luke's Cathedral was erected sometime between 1847 and 1848, depending on the source. St. Luke's was an Anglican church that stood in this spot for 57 years before it burned down in 1905.",
                    "The church can be seen in the background of this photo, taken in 1872 from the Belle Vue Tennis Court, prior to December 1905."
                  ]}
                imageSources={["img/roots/fig-4.png"]}
              />
            </TreeNode>
            <TreeNode label="7">
              <ModalContent
                title="St. Luke's on Clear Day (1872)"
                descriptions={
                  [
                    "This is a photo taken from the Belle Vue Estate in 1872 with the church in the back right."
                  ]}
                imageSources={["img/roots/fig-6.png"]}
              />
            </TreeNode>

            <TreeNode label="9">
              <ModalContent
                title="1890"
                descriptions={
                  [
                    "Another interior shot c. 1890."
                  ]}
                imageSources={["img/roots/fig-8.png"]}
              />
            </TreeNode>

            <TreeNode label="11">
              <ModalContent
                title="'Burned,' - 1905"
                descriptions={
                  [
                    "On December 14th, 1905, at 1:00 AM, St. Luke's fire alarm went off, signaling a fire. By 3:00 AM, the church's steeple had collapsed, and the fire eventually burned itself out. Miraculously, no one was killed, but the fire was believed to be incendiary—likely caused by arson. Further research needs to be done into whether an investigation was open and if anyone was subsequently charged.",
                    "Following the fire, All Saint's Cathedral was built about 500m west of the remains of St. Luke's as a replacement. It is likely that the lot remained vacant until 1920, when the Westminster Apartments were constructed."
                  ]}
                imageSources={["img/roots/fig-10.jpg"]}
              />
            </TreeNode>
          </div>
          {/* roots row 2 */}
          <div className="flex flex-row justify-evenly w-full">
            <TreeNode label="2">
              <ModalContent
                title="1749 Map of South Suburbs, in Halifax."
                descriptions={
                  [
                    "The earliest available records of Halifax date back to 1749. The image above shows a map of the South Suburbs of Halifax from that year. By cross-referencing this map with modern Google Maps, it appears that Church Street likely ran through Lots 6 and 7, which were originally allotted to Robert Davis and John Butler, respectively.",
                    "It's important to note that neither Church Street nor Harvey Street existed at the time, so this is an educated guess based on the available records.",
                    "The lots of greatest interest are Lots 8 and 9, as these are likely where St. Luke's Cathedral was eventually built.",
                    "While the land was initially allotted to Davis and Butler, this does not necessarily mean they settled on the land. This distinction is important when analyzing later maps of the area."
                  ]}
                imageSources={["img/roots/fig-1.png"]}
              />
            </TreeNode>
            <TreeNode label="4">
              <ModalContent
                title="After Benjamin Green, Before St. Luke's (1772-1827)"
                descriptions={
                  [
                    "Benjamin Green was Nova Scotia's first treasurer and owned many properties throughout the province. When he died in 1772, his property was not divided among his children until 1827, due to the lack of specific instructions in his will. His heirs drew straws for the land, and his son, Henry Green, received Lots 8 and 9.",
                    "The probate record from July 2nd, 1827, shows the division of Green's properties. The properties marked 'H' refer to Lots 8 and 9, inherited by Henry Green."
                  ]}
                imageSources={["img/roots/fig-3.png"]}
              />
            </TreeNode>
            <TreeNode label="6">
              <ModalContent
                title="St. Luke's in Winter (c. 1900)"
                descriptions={
                  [
                    "This is another image of St. Luke's from the Belle Vue Estate, taken around 1900, roughly five years before it burned down. "
                  ]}
                imageSources={["img/roots/fig-5.png"]}
              />
            </TreeNode>
            <TreeNode label="8">
              <ModalContent
                title=""
                descriptions={
                  [
                    "This is an interior view of the church c. pre-1905"
                  ]}
                imageSources={["img/roots/fig-7.png"]}
              />
            </TreeNode>
            <TreeNode label="10">
              <ModalContent
                title="Wedding Ceremony"
                descriptions={
                  [
                    "This is an interior shot of a wedding ceremony, before 1905."
                  ]}
                imageSources={["img/roots/fig-9.png"]}
              />
            </TreeNode>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
