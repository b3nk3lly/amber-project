import './App.css';
import Figure from './components/Figure';
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
            <TreeNode label="1">
              <ModalContent
                title="Building Permit (March 1920)"
                descriptions={
                  [
                    "This is the first mention of the Canadian Construction Company in The Halifax Herald on March 26, 1894. The Canadian Construction Co. was formed in 1849 and operated under the direction of the Eastern Trust Company. While Canadian Construction Co. served as the contractor responsible for physically building and staffing the Westminster Apartments, Eastern Trust provided the financial backing and project oversight (The Halifax Herald, March 26, 1894, p. 1).",
                    "Not long after the completion of the Westminster Apartments, Eastern Trust filed for bankruptcy in 1922 (Library and Archives Canada, RG13-A-2, Volume 272, File 1922-1923). However, they continued to own and build multiple apartment houses. After this, they were embroiled in a legal dispute in 1928. Busch v. The Eastern Trust Co. et al. involved a legal dispute over the interpretation of a will and the distribution of the deceased’s estate (Busch v. The Eastern Trust Co. et al., 1928). Despite these challenges, they continued to own and operate the Westminster Apartments until its sale in the 1940s (Cobden, Simon Spatz: From Holocaust to Halifax, 421)."
                  ]}
                figures={[<Figure key="trunk-fig-1" src="img/trunk/fig-1.jpg" alt="Figure 1" caption="(Nova Scotia Archives, Building Permit for Westminster Apartments, March 1920)" />]}
              />
            </TreeNode>
            <TreeNode label="2">
              <ModalContent
                title="The Blueprints (c. 1920)"
                descriptions={
                  ["The architecture firm responsible for designing the Westminster Apartments was Dolphin and Doswell, a short-lived partnership based in Montreal and Toronto. Formed in 1920—the same year construction began on the Westminster—this was likely one of their first commissions. The partnership dissolved only five years later, in 1925.",
                    "Following this, Harry Royden Doswell moved to New York City, where he joined Shreve, Lamb & Harmon in 1927, the firm famously credited with designing the Empire State Building in 1929. While it is unclear whether Doswell directly contributed to that project, the connection is interesting (The Biographical Dictionary of Architects in Canada 1800–1950, entry on Harry Royden Doswell, accessed April 2025)."
                  ]}
                figures={
                  [
                    <Figure key="trunk-fig-1" src="img/trunk/fig-2-1.jpg" alt="Figure 2.1" caption="Blueprint of ground floor level" />,
                    <Figure key="trunk-fig-2" src="img/trunk/fig-2-2.jpg" alt="Figure 2.2" caption="Blueprint of floors 2-5 (they are uniform)" />,
                    <Figure key="trunk-fig-3" src="img/trunk/fig-2-3.jpg" alt="Figure 2.3" caption="Blueprint of roof level, including dumbwaiter and multiple clotheslines." />,
                    <Figure key="trunk-fig-4" src="img/trunk/fig-2-4.jpg" alt="Figure 2.4" caption="Blueprint of Morris Street exterior of the building" />,
                    <Figure key="trunk-fig-5" src="img/trunk/fig-2-5.jpg" alt="Figure 2.5" caption="Blueprint of back of the building, notably with a chimney and the standing clotheslines as well as a fire escape in each unit." />,
                  ]}
              />
            </TreeNode>
            <TreeNode label="3">
              <ModalContent
                title="The Best in the East (1920-21)"
                descriptions={
                  [
                    "The Westminster Apartments were prominently featured in local newspapers throughout the construction process, with this image marking the first public reveal. Published as part of a full-page spread in the Evening Mail on March 8th, 1920, this launched the building’s advertising campaign. The Westminster was promoted as “the most modern and grand apartment house east of Montreal”—a tagline that has remained part of its legacy over a century later. This slogan was likely coined as it was to be the largest apartment building in Halifax. The Eastern Trust Co. also promised modernity akin to Montreal.",
                    "The development promised an impressive array of modern amenities for the time, including dumbwaiters, an elevator, on-site janitorial services, streamlined heating, and a fully fireproof structure—features that positioned it as a cutting-edge residence in early 20th-century Halifax."
                  ]}
                figures={[<Figure key="trunk-fig-3" src="img/trunk/fig-3.jpg" alt="Figure 3" caption="(The Evening Mail, March 8, 1920, p. 9)" />]}
              />
            </TreeNode>
            <TreeNode label="4">
              <ModalContent
                title="Don't Miss Your Opportunity! (March 8th, 1920)"
                descriptions={
                  [
                    "As part of the Westminster Apartments' promotional campaign, the public was encouraged not only to live in the building but to invest in it as well. The promise of modern amenities—such as elevators, dumbwaiters, and fireproof construction—was marketed as more than just convenience; it was an opportunity for financial gain.",
                    "Shares were offered at $100 each, which, adjusted for inflation, amounts to approximately $1,500 in 2025. This dual appeal of luxury living and potential return on investment made the Westminster a standout venture in Halifax's real estate scene, attracting both future tenants and local investors during a time of urban growth and change."
                  ]}
              />
              figures={[<Figure key="trunk-fig-4" src="img/trunk/fig-4.jpg" alt="Figure 4" caption="(The Evening Mail, March 8, 1920, p. 9)" />]}
            </TreeNode>
            <TreeNode label="5">
              <ModalContent
                title="April 15th, 1920 - Foundation Work Beginning"
                figures={[<Figure key="trunk-fig-5" src="img/trunk/fig-5.jpg" alt="Figure 5" caption="The Evening Mail (Halifax, NS), April 15, 1920, 11." />]}
              />
            </TreeNode>
            <TreeNode label="6">
              <ModalContent
                title="May 6th, 1920 - Work Underway "
                figures={[<Figure key="trunk-fig-6" src="img/trunk/fig-5.jpg" alt="Figure 6" caption="The Evening Mail (Halifax, NS), May 6, 1920, 13." />]}
              />
            </TreeNode>
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
                title="Land Acknowledgement"
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
                figures={[<Figure key="roots-fig-2" src="img/roots/fig-2.png" alt="Figure 2" />]}
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
                figures={[<Figure key="roots-fig-4" src="img/roots/fig-4.png" alt="Figure 4" caption={"(Nova Scotia Archives, \"Places: Halifax, Halifax Co.: Houses: Belle Vue: Tennis Courts\")"} />]}
              />
            </TreeNode>
            <TreeNode label="7">
              <ModalContent
                title="St. Luke's on Clear Day (1872)"
                descriptions={
                  [
                    "This is a photo taken from the Belle Vue Estate in 1872 with the church in the back right."
                  ]}
                figures={[<Figure key="roots-fig-6" src="img/roots/fig-6.png" alt="Figure 6" caption={"(Nova Scotia Archives, Photographic Collection: Places: Halifax, Halifax Co.: General Views: View from Bellevue House (1872) Looking Towards McNabb Island and Maugher's Beach) "} />]}
              />
            </TreeNode>

            <TreeNode label="9">
              <ModalContent
                title="1890"
                descriptions={
                  [
                    "Another interior shot c. 1890."
                  ]}
                figures={[<Figure key="roots-fig-8" src="img/roots/fig-8.png" alt="Figure 8" caption={"(Notman Studio, Nova Scotia Archives, accession no. 1983-310 no. 2451)"} />]}
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
                figures={[<Figure key="roots-fig-10" src="img/roots/fig-10.jpg" alt="Figure 10" />]}
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
                figures={[<Figure key="roots-fig-1" src="img/roots/fig-1.png" alt="Figure 1" />]}
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
                figures={[<Figure key="roots-fig-3" src="img/roots/fig-3.png" alt="Figure 3" caption="Taken from Benjamin Green's Will, 1827." />]}
              />
            </TreeNode>
            <TreeNode label="6">
              <ModalContent
                title="St. Luke's in Winter (c. 1900)"
                descriptions={
                  [
                    "This is another image of St. Luke's from the Belle Vue Estate, taken around 1900, roughly five years before it burned down. "
                  ]}
                figures={[<Figure key="roots-fig-5" src="img/roots/fig-5.png" alt="Figure 5" caption="(Nova Scotia Archives, Photographic Collection: Places: Halifax, Halifax Co.: General Views: Looking South from Bellevue House, c. 1900)" />]}
              />
            </TreeNode>
            <TreeNode label="8">
              <ModalContent
                title=""
                descriptions={
                  [
                    "This is an interior view of the church c. pre-1905"
                  ]}
                figures={[<Figure key="roots-fig-7" src="img/roots/fig-7.png" alt="Figure 7" caption="(Nova Scotia Archives, Album 36, photo 44, neg. no. N-5795, before 1905)" />]}
              />
            </TreeNode>
            <TreeNode label="10">
              <ModalContent
                title="Wedding Ceremony"
                descriptions={
                  [
                    "This is an interior shot of a wedding ceremony, before 1905."
                  ]}
                figures={[<Figure key="roots-fig-9" src="img/roots/fig-9.png" alt="Figure 9" caption="(Nova Scotia Archives, Album 36, photo 44, neg. no. N-5795, before 1905)" />]}

              />
            </TreeNode>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
