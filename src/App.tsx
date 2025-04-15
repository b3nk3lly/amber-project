import './App.css';
import DiagonalRow from './components/DiagonalRow';
import Figure from './components/Figure';
import { ModalContent } from './components/Modal';
import TreeNode from './components/TreeNode';

function App() {

  return (
    <div className="bg-[url(/big-tree.png)] w-[1024px] h-[1536px] bg-center bg-no-repeat flex flex-col items-center" >
      {/* leaves */}
      <div id="leaves" className="w-full h-[15%] px-16 pt-24">
        <div className="flex flex-col items-center space-y-8">
          {/* leaves row 1 */}
          <div className="flex flex-row justify-evenly w-3/5">

            <TreeNode label="2">
              <ModalContent
                title="1925 – Music Lessons"
                figures={
                  [
                    <Figure key="leaves-fig-2" src="img/leaves/fig-2.jpg" alt="Figure 2" caption="The Evening Mail, (Halifax, NS), January 22, 1925, 13." />
                  ]}
              />
            </TreeNode>

            <TreeNode label="4">
              <ModalContent
                title="1927 - Alcohol Fire"
                figures={
                  [
                    <Figure key="leaves-fig-3" src="img/leaves/fig-4-1.jpg" alt="Figure 4.1" caption="The Evening Mail, (Halifax, NS), June 15, 1927, 10." />,
                    <Figure key="leaves-fig-3" src="img/leaves/fig-4-2.jpg" alt="Figure 4.2" caption="The Evening Mail, (Halifax, NS), June 14, 1927, 11." />
                  ]}
              />
            </TreeNode>
            <TreeNode label="6">
              <ModalContent
                title="Late 1970s - Memories of a Grandparents Apartment"
                descriptions={["Tim Chilsom recalled his grandfather's apartment when visiting him in the late 70s “I was not actually a resident at 5300 Morris, although my Grandfather had an apartment there, which he referred to as ‘Pad 40’ - on the 4th floor as I recall, in the late 70s.” he wrote in an email, “I can recall things about the lobby and particularly about the elevator, which had a very interesting collapsing safety screen.” (Chisholm, personal communication, March 20th, 2025)"]}
                figures={
                  [
                    <Figure key="leaves-fig-6-1" src="img/leaves/fig-6-1.jpg" alt="Figure 6.1" caption="The Evening Mail, (Halifax, NS ), February 19, 1921." />,
                    <Figure key="leaves-fig-6-2" src="img/leaves/fig-6-2.jpg" alt="Figure 6.2" caption="Clifford, Amber. Photograph of the Turnbull Elevator, March 10, 2025." />
                  ]}
              />
            </TreeNode>
            <TreeNode label="8">
              < ModalContent
                title="Unit #15 – Throughout time"
                descriptions={
                  [
                    "2023-25 Author's Experience",
                    "During my two years living in the Westminster Apartments, I have greatly enjoyed my time here. It’s a beautiful and charming building. I, like many others, really like the old-school elevator—except when someone leaves the gate open, and I have to use the stairs (it only operates with the gate closed, and yes, I’ve opened it mid-ride, causing it to stop abruptly). My unit is #15, a ‘dinky little apartment,’ as it was first advertised in the 1920s. It’s a sunny bachelor with tall ceilings and a huge closet. Over 100 years later, I can confidently say that it’s fire-proof, but most certainly not soundproof. The other tenants in my unit are Angel and Baby, who give five stars for the quality of birds to watch. Overall, I love this building, I’ve enjoyed living here, and I look forward to continuing my research into its history.",
                    "Other Tenants of #15",
                    "I’ve only been able to get snapshots of previous tenants. I know that the girl who lived in the unit before me is now in a two-bedroom apartment on the fifth floor. Aside from this, the first recorded tenant in McAlpine’s 1921 edition was a woman named Mrs. Annie Steely, who worked as a stenographer and only lived here for one year. I focused on a few decades for reference: From 1943 to 1947 (approximate), a widow named Ellen T. Cullen lived here. In 1954, a woman named Elise Anthony lived here; she likely attended or worked at the University of King’s College. Ruth Gilis lived here in 1961 and worked as a helper at the HMC Dockyard. These are just a few examples, but they paint a picture of the people who have lived in the same space as me."
                  ]}
                figures={
                  [
                    <Figure key="leaves-fig-8-2" src="img/leaves/fig-8-2.jpg" alt="Figure 8.2" caption="Clifford, Amber. Photograph of Angel and Baby, 2025." />
                  ]}
              />
            </TreeNode>
            <TreeNode label="10">
              <ModalContent
                title="2015-16 – Personal Experience"
                descriptions={[
                  "Ben Wedge, a former resident of the Westminster Apartments in 2015/16, shared his experience via email: \"I lived there for about a year in 2015/16. My best friend lived down the hall. Great building. The supers were a lovely semi-retired couple from New Brunswick. Nancy Caldwell, I think was her name, the husband’s name escapes me.\" He also recalled his investigation into the elevator, noting, \"To the best of my knowledge, the elevator is the oldest passenger elevator still operating in NS. I did some digging through the permit system around that time but couldn’t reach a conclusive answer. Certainly, it’s a ship of Theseus now.\" Wedge expressed his fondness for the elevator, adding, \"It was always fun showing it to people and teasing them about whether it could complete the journey.\" (Wedge, personal communication, April 14, 2025)"]
                }
                figures={
                  [
                    <Figure key="leaves-fig-10-1" src="img/leaves/fig-10-1.jpg" alt="Figure 10.1" caption="Clifford, Amber. Photograph front door, unit 15, 2025." />,
                    <Figure key="leaves-fig-10-2" src="img/leaves/fig-10-2.jpg" alt="Figure 10.2" caption="Clifford, Amber. Photograph front door, unit 15, 2025." />,
                    <Figure key="leaves-fig-10-3" src="img/leaves/fig-10-3.jpg" alt="Figure 10.3" caption="Clifford, Amber. Photograph front door, unit 15, 2025." />
                  ]}
              />
            </TreeNode>
          </div>
          {/* leaves row 2 */}
          <div className="flex flex-row justify-between w-3/5">
            <TreeNode label="1">
              <ModalContent
                title="1921 - First Death"
                figures={
                  [
                    <Figure key="leaves-fig-1" src="img/leaves/fig-1.jpg" alt="Figure 1" caption="The Evening Mail, (Halifax, NS), July 25, 1921, 3." />
                  ]}
              />
            </TreeNode>
            <TreeNode label="3">
              <ModalContent
                title="1927 – Furniture Sale"
                figures={
                  [
                    <Figure key="leaves-fig-3" src="img/leaves/fig-3.jpg" alt="Figure 3" caption="The Evening Mail, (Halifax, NS), January 13, 1927, 20." />
                  ]}
              />
            </TreeNode>
            <TreeNode label="5">
              <ModalContent
                title="1944-47 – Chapel of Apartment 39"
                descriptions={["From 1944 until 1947, Reverend L. R. Donaldson officiated at least 29 marriages at his apartment in the Westminster Apartments. He lived in unit 39 for around four years, according to McAlpine’s City Directories. In the marriage certificate featured here, the groom was from Scotland, and his listed address was the HMCS Sault Ste. Marie, a boat that was anchored in the Halifax harbor at the time. Notably, these marriages took place around the end of World War II, so there may be a connection there (Nova Scotia Births, Marriages, and Deaths, 1945)."]}
                figures={
                  [
                    <Figure key="leaves-fig-5" src="img/leaves/fig-5.jpg" alt="Figure 5" caption="(Nova Scotia Births, Marriages, and Deaths, 1945)" />
                  ]}
              />
            </TreeNode>

            <TreeNode label="7">
              <ModalContent
                title="Westminster in the 90s"
                descriptions={["A former tenant, Nick Lindsay, who lived in the Westminster Apartments from 1991 to 1992 shared his memories of the building: \"I lived in the Westminster with my girlfriend, now wife, while I was attending Dalhousie. We have strong memories of it being a fine apartment—wooden floors, big windows, and little touches like the bathroom tile that looked very vintage.\" He went on to recall the elevator, which seems to be one of the most iconic aspects of the building to date, saying, \"One thing that always comes up when talking about the place is the elevator; it had this quirky habit of stopping just short of the floor—by an inch or two—especially if you were carrying something heavy or if there were a few people in it.\" Reflecting on the heating, he explained, \"The apartments didn’t have thermostats, so the heat was set to keep the basement apartments comfortable. We sometimes had the windows wide open on bitterly cold February days.\" (Former Tenant, personal communication, April 14, 2025) "]}
                figures={
                  [
                    <Figure key="leaves-fig-7" src="img/leaves/fig-7.jpg" alt="Figure 7" caption="Clifford, Amber. Photograph front door, unit 15, 2025." />
                  ]}
              />
            </TreeNode>

            <TreeNode label="9">
              <ModalContent
                title="1935 – 2003 - Dawson Family"
                descriptions={[
                  "The Westminster Apartments is the type of building where tenants tend to stay for long periods of time. One example of this is the Dawson family, who moved into the building in 1935. The family included Estella and Peter Dawson and their two children. One of whom, Jessie Dawson, remained in the unit until at least 2003, and likely longer (The Evening Mail, March 8, 1920, p. 9)."]}
              />
            </TreeNode>
            <TreeNode label="11">
              <ModalContent
                title="Bibliography"
                descriptions={[
                  "Busch v. The Eastern Trust Co. et al. 1928 CanLII 84 (SCC), [1928] SCR 479. ", "Chisholm, Tim. Personal communication with the author, April 14, 2025. ", "Church of All Saints. “History of the Cathedral.” Last modified April 2023. https://www.cathedralchurchofallsaints.com/history/pages/20th-century. ", "Clifford, Amber. 2025. Photograph of Angel and Baby. ", "2025. Photograph of the Turnbull Elevator, March 10, 2025. ", "2025. Photograph of Westminster Apartments' original elevator, March 2025. Halifax, Nova Scotia. ", "2025. Photograph front door, unit 15. ", "2025. Photograph of sealed laundry dumbwaiter at the Westminster Apartments, March 10, 2025. Halifax, Nova Scotia. ", "Cobden, Michael. 2006. Holocaust Survivor: The Story of Simon Spatz. Halifax: Southwest Properties. ", "Dictionary of Architects in Canada. “Dolphin & Doswell.” Last modified March 2024. https://web.archive.org/web/20240320081115/https://dictionaryofarchitectsincanada.org/node/2533. ", "The Evening Mail. 1920. “New Westminster Apartment Advertisement.” March 8, 1920. Halifax, Nova Scotia. ", "“Green, Benjamin.” The Canadian Encyclopedia. Last modified April 2023. https://www.biographi.ca/en/bio/green_benjamin_4E.html. ", "Halifax Municipal Archives. 1949. Deed of Sale: Harriette v. Cleveland Realty Group, January 5, 1949. Book 1079, Page 179. Halifax, Nova Scotia. ", "1976. Harrington House. Photograph by Pam Collins. CR30K-1-36.109. Halifax, Nova Scotia. ", "[ca. 1970]. Hfx [Halifax] Infirmary Complex [aerial photograph]. Series: Aerial Photographs and Streetscapes, 102-111-4-6.20. Photograph by Nova Scotia Communications and Information Centre. Accessed April 14, 2025. https://archive.halifax.ca/archive/final/portal.aspx?lang=en-US. ", "Halifax Municipal Archives. Blueprints for Westminster Apartments, May 1920. Church and Morris Streets, Halifax, Nova Scotia. Dolphin and Doswell, Architects, Montreal and Toronto. ", "Library and Archives Canada. Bankruptcy Filing, RG13-A-2, Volume 272, File 1922–1923. Library and Archives Canada, Ottawa, Ontario. ", "McGuigan, Peter. 2003. “The Westminster Apartments (1920–2003).” Southender, October 2003. ", "The Nova Scotian. December 15, 1905, p. 1. Reel 8118. Nova Scotia Archives, Halifax, Nova Scotia. ", "Nova Scotia Archives. Album 36, Photo 44, neg. no. N-5795. Before 1905. Nova Scotia Archives, Halifax, Nova Scotia. ", "Land Grants, Book 22, PANS MFM #13044. Page 59. Nova Scotia Archives, Halifax, Nova Scotia. ", "Map Collection: F/240, 1827. Nova Scotia Archives, Halifax, Nova Scotia. ", "Map Collection: V6 240 Halifax, Nova Scotia, 1749. Nova Scotia Archives, Halifax, Nova Scotia. ", "Morning Herald, May 17, 1898, p. 3. Reel 6724. Nova Scotia Archives, Halifax, Nova Scotia. ", "Photographic Collection: Places: Halifax, Halifax Co.: General Views: Looking South from Bellevue House. Ca. 1900. Nova Scotia Archives, Halifax, Nova Scotia. ", "Photographic Collection: Places: Halifax, Halifax Co.: General Views: View from Bellevue House (1872) Looking Towards McNabb Island and Maugher's Beach. Nova Scotia Archives, Halifax, Nova Scotia. ", "Will of Benjamin Green, Reel #19406 - G104. Nova Scotia Archives, Halifax, Nova Scotia. ", "Notman Studio. Ca. 1890. Nova Scotia Archives, Accession No. 1983-310 No. 77325. Nova Scotia Archives, Halifax, Nova Scotia. ", "Nova Scotia Archives, Accession No. 1983-310 No. 2451. Nova Scotia Archives, Halifax, Nova Scotia. ", "Nova Scotia Vital Statistics. “Marriage Certificate of Charles John Falconer and Sheila Ann Knickle.” May 14, 1945. Halifax, Halifax County. Registration Number: 131442. Accessed April 14, 2025. [Insert website URL here if applicable]. ", "Southwest Properties. 2021. Renovation of the Year Submission: The Westminster Apartments, 5300 Morris Street, Halifax, NS. Halifax: Southwest Properties. ", "Spatz, Jim. 2025. Handwritten note to the author, March 7, 2025. ", "The Halifax Herald. March 26, 1894, p. 1. Halifax, Nova Scotia, Canada. ", "Wedge, Ben. Personal communication with the author, April 14, 2025."
                ]}
              />
            </TreeNode>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/5 mx-auto items-center bg-gray-400/50 rounded-2xl shadow-sm py-4">
        <h1 className="text-xl font-bold px-4 w-full text-white text-center">
          The Westminster Apartments:
        </h1>
        <h2 className="text-lg font-bold px-4 w-full text-white text-center">
          a Brief Land, Building, and Community History Timeline
        </h2>
        <h3 className="text-md font-semibold px-4 py-2 w-full text-white text-center">
          This is a heritage tree! The roots contain information about the property and the land where the Westminster Apartments stand. The trunk showcases details and photos of the building itself. Finally, the leaves hold cherished memories and accounts from past residents, along with some fascinating vital statistics and newspaper clippings!
        </h3>
      </div>

      {/* trunk */}
      <div className="w-full h-[30%] flex justify-center mb-16">
        <div className="w-[20%] flex flex-col justify-center max-h-full">
          <DiagonalRow first={
            <TreeNode label="16">
              <ModalContent
                title="70s - In the Background"
                figures={
                  [
                    <Figure key="trunk-fig-16-1" src="img/trunk/fig-16-1.jpg" alt="Figure 16.1" caption="A photo from 1976 with the Westminster Apartments featured in the background to the right. (Halifax Municipal Archives, Harrington House, 1976)" />,
                    <Figure key="trunk-fig-16-2" src="img/trunk/fig-16-2.jpg" alt="Figure 16.2" caption="A photo of the Infirmary from the 1970s with the Westminster Apartments to the left. (Halifax Municipal Archives, Halifax Infirmary Complex, c. 1970) " />
                  ]}
              />
            </TreeNode>
          }
            second={
              <TreeNode label="17">
                <ModalContent
                  title="2021 - Award Winning Renovations"
                  descriptions={[
                    "In 2021, The Westminster Apartments underwent a major renovation to celebrate its 100th anniversary, which aimed to restore its vintage character, while refurbishing the lobby. The project focused on historical and sleek design, including new tile, carpets, lighting, and refurbished brass railings salvaged from Halifax's former CBC Radio building. The original gated Turnbull elevator, dating back to the early 1900s, was also restored and remains operational. The project was delayed due to COVID-19, however, it was nominated for the CFAA's “Renovation of the Year,” and won (Southwest Properties, 2021).",
                    "Notably, the submission refers to the earlier slogan of the Westminster being the “biggest apartment East of Montreal.”"
                  ]}
                  figures={
                    [
                      <Figure key="trunk-fig-17-1" src="img/trunk/fig-17-1.jpg" alt="Figure 17.1" caption="Amber Clifford, Photo of Westminster Apartments' 2021 Lobby Renovations, April 2025, Halifax, Nova Scotia." />,
                      <Figure key="trunk-fig-17-2" src="img/trunk/fig-17-2.jpg" alt="Figure 17.2" caption="Amber Clifford, Photo of Westminster Apartments' 2021 Lobby Renovations, April 2025, Halifax, Nova Scotia." />,
                      <Figure key="trunk-fig-17-3" src="img/trunk/fig-17-3.jpg" alt="Figure 17.3" caption="Amber Clifford, Photo of Westminster Apartments' 2021 Lobby Renovations, April 2025, Halifax, Nova Scotia." />
                    ]
                  }
                />
              </TreeNode>
            }
          />
          <DiagonalRow first={
            <TreeNode label="13">
              <ModalContent
                title="1965 - Under New Ownership"
                descriptions={[
                  "In 1965, Simon Spatz—a Holocaust survivor and prominent Halifax businessman—purchased the Westminster Apartments for $300,000, which would be approximately $2.9 million today, adjusted for inflation. Spatz had spent the previous decade acquiring smaller properties throughout Halifax, but the Westminster marked his largest and most ambitious purchase (Cobden 2016, 419).",
                  "Initially, Spatz was unimpressed with the building. According to his biography, he felt it was outdated and discovered that the water main wasn't even functioning at the time of purchase. Despite these challenges, the acquisition would become a key moment in what later became Southwest Properties, one of Halifax's most influential real estate companies, who continues to be owned and operated by his son Jim Spatz."
                ]}
                figures={
                  [
                    <Figure key="trunk-fig-13" src="img/trunk/fig-13.jpeg" alt="Figure 13" caption="Photograph of Simon Spatz on the steps of the Westminster Apartments, ca. 1966, photographer unknown, courtesy of Southwest Properties, Halifax, Nova Scotia." />,
                  ]}
              />
            </TreeNode>
          }
            second={
              <TreeNode label="14">
                <ModalContent
                  title="Late 60s - Renovation and Refurbishment"
                  descriptions={[
                    "Despite its initial issues, the Westminster Apartments went on to become one of Simon Spatz's most favourite properties. He admired its solid construction and considered the acquisition a turning point in his career, establishing him as a serious figure in Halifax's real estate landscape (Cobden 2016, 420).",
                    "Spatz invested both time and capital into revitalizing the building. He sealed the dumbwaiters, due to fire safety concerns, and upgraded the infrastructure by installing high-grade piping and modern kitchens. At the time of purchase, the apartments were equipped only with basic kitchenettes, which he replaced to meet a higher standard of living. Roof top access was also removed for safety concerns, with the laundry room being updated (Cobden 2006, 426)."
                  ]}
                  figures={
                    [
                      <Figure key="trunk-fig-14" src="img/trunk/fig-14.jpg" alt="Figure 14" caption="Jim Spatz, note to the author, March 7, 2025." />,
                    ]}
                />
              </TreeNode>
            }
            third={<TreeNode label="15">
              <ModalContent
                title="Bye-Bye Dumbwaiters"
                figures={
                  [
                    <Figure key="trunk-fig-15" src="img/trunk/fig-15.jpg" alt="Figure 15" caption="Amber Clifford, Photograph of sealed laundry dumbwaiter at the Westminster Apartments, March 10, 2025, Halifax, Nova Scotia." />
                  ]}
              />
            </TreeNode>
            } />
          <DiagonalRow first={
            <TreeNode label="10">
              <ModalContent
                title="More Delays"
                descriptions={[
                  "The building continued to face delays, which is not uncommon for large-scale construction projects. However, due to the public interest and ongoing media attention surrounding the Westminster, its progress was under close watch. The community was eager for its completion, and initial expectations for a January opening were eventually pushed back to March 1st, and again until June 1st, 1921, wherein tenants were finally able to move in. The delay was approximately 6 months.",
                  "The construction of the Westminster Apartments, beginning in 1920, is commemorated by a cornerstone installed above the main entrance, situated at the intersection of Church and Morris Streets."
                ]}
                figures={
                  [
                    <Figure key="trunk-fig-10-1" src="img/trunk/fig-10-1.jpg" alt="Figure 10.1" caption="The Evening Mail, (Halifax, NS,) January 6, 1921, 12." />,
                    <Figure key="trunk-fig-10-2" src="img/trunk/fig-10-2.jpg" alt="Figure 10.2" caption="Amber Clifford, Photo of Westminster Apartments' 1920 Corner Stone, April 2025, Halifax, Nova Scotia." />
                  ]}
              />
            </TreeNode>
          }
            second={
              <TreeNode label="11">
                <ModalContent
                  title="1920s - Apartments for Rent"
                  descriptions={[
                    "After the completion of the apartments in 1921, they received little mention in local newspapers outside of tenant-related updates and rental ads. There were no major fires or incidents—at least during the 1920s—linked to the building's infrastructure. The building became a Halifax staple as the community surrounding it continued to grow."
                  ]}
                  figures={
                    [
                      <Figure key="trunk-fig-11" src="img/trunk/fig-11.jpg" alt="Figure 11" caption="The Evening Mail, (Halifax, NS), June 9, 1922, 16" />,
                    ]}
                />
              </TreeNode>
            }
            third={<TreeNode label="12">
              <ModalContent
                title="From the 30s to the 40s"
                descriptions={[
                  "In January 1949, the Eastern Trust Company sold the Westminster Apartments to the Cleveland Realty Corporation."
                ]}
                figures={
                  [
                    <Figure key="trunk-fig-12" src="img/trunk/fig-12.jpg" alt="Figure 12" caption="The Evening Mail, (Halifax, NS), Aug. 2, 1929, 12." />,
                  ]}
              />
            </TreeNode>
            } />
          <DiagonalRow first={
            <TreeNode label="7">
              <ModalContent
                title="June 26th, 1920 - Credit to the City"
                figures={[<Figure key="trunk-fig-7" src="img/trunk/fig-7.jpg" alt="Figure 7" caption="The Evening Mail, (Halifax, NS), June 26, 1920, 12" />]}
              />
            </TreeNode>
          }
            second={
              <TreeNode label="8">
                <ModalContent
                  title="Fall, 1920s - Delays and Anxieties"
                  descriptions={[
                    "These three newspaper clippings offer a glimpse into the challenges  the Eastern Trust Co. was experiencing during the construction of the building. Originally slated for completion before the New Year of 1920, the project experienced notable delays. During this time, the Eastern Trust Company had publicly promised affordable rent for modern apartments, but mounting construction costs led to speculation that rents might need to be increased.",
                    "This speculation was quickly quashed when Eastern Trust issued a follow-up just two days later, reassuring shareholders and future tenants that rents would not be raised. The advertisement also reaffirmed that the Westminster would be the finest apartment building in Halifax, and because no other like it had been built, the construction process was different."
                  ]}
                  figures={
                    [<Figure key="trunk-fig-8-1" src="img/trunk/fig-8-1.jpg" alt="Figure 8.1" caption="Notice of delay. The Evening Mail, (Halifax, NS), Sept. 16, 1920, 10." />,
                    <Figure key="trunk-fig-8-2" src="img/trunk/fig-8-2.jpg" alt="Figure 8.2" caption="Rental Increase Due to Construction Costs. The Evening Mail, (Halifax, NS), Sept. 16, 1920, 10. " />,
                    <Figure key="trunk-fig-8-3" src="img/trunk/fig-8-3.jpg" alt="Figure 8.3" caption="Rent Will Not Increase. The Evening Mail, (Halifax, NS), Sept. 16, 1920, 10." />
                    ]}
                />
              </TreeNode>
            }
            third={<TreeNode label="9">
              <ModalContent
                title="Building Permit (March 1920)"
                descriptions={["The Evening Mail continued to publish updates—such as the installation of the boiler and other construction milestones—likely to keep the public informed about the building's progress and when it could be expected to be ready for tenancy."]}
                figures={[<Figure key="trunk-fig-9" src="img/trunk/fig-9.jpg" alt="Figure 9" caption="The Evening Mail, (Halifax, NS), Sept. 16, 1920, 10." />]}
              />
            </TreeNode>
            } />
          <DiagonalRow first={
            <TreeNode label="4">
              <ModalContent
                title="Don't Miss Your Opportunity! (March 8th, 1920)"
                descriptions={
                  [
                    "As part of the Westminster Apartments' promotional campaign, the public was encouraged not only to live in the building but to invest in it as well. The promise of modern amenities—such as elevators, dumbwaiters, and fireproof construction—was marketed as more than just convenience; it was an opportunity for financial gain.",
                    "Shares were offered at $100 each, which, adjusted for inflation, amounts to approximately $1,500 in 2025. This dual appeal of luxury living and potential return on investment made the Westminster a standout venture in Halifax's real estate scene, attracting both future tenants and local investors during a time of urban growth and change."
                  ]}
                figures={[<Figure key="trunk-fig-4" src="img/trunk/fig-4.jpg" alt="Figure 4" caption="(The Evening Mail, March 8, 1920, p. 9)" />]}
              />
            </TreeNode>
          }
            second={
              <TreeNode label="5">
                <ModalContent
                  title="April 15th, 1920 - Foundation Work Beginning"
                  figures={[<Figure key="trunk-fig-5" src="img/trunk/fig-5.jpg" alt="Figure 5" caption="The Evening Mail (Halifax, NS), April 15, 1920, 11." />]}
                />
              </TreeNode>
            }
            third={<TreeNode label="6">
              <ModalContent
                title="May 6th, 1920 - Work Underway "
                figures={[<Figure key="trunk-fig-6" src="img/trunk/fig-5.jpg" alt="Figure 6" caption="The Evening Mail (Halifax, NS), May 6, 1920, 13." />]}
              />
            </TreeNode>
            } />
          <DiagonalRow first={
            <TreeNode label="1">
              <ModalContent
                title="Building Permit (March 1920)"
                descriptions={
                  [
                    "This is the first mention of the Canadian Construction Company in The Halifax Herald on March 26, 1894. The Canadian Construction Co. was formed in 1849 and operated under the direction of the Eastern Trust Company. While Canadian Construction Co. served as the contractor responsible for physically building and staffing the Westminster Apartments, Eastern Trust provided the financial backing and project oversight (The Halifax Herald, March 26, 1894, p. 1).",
                    "Not long after the completion of the Westminster Apartments, Eastern Trust filed for bankruptcy in 1922 (Library and Archives Canada, RG13-A-2, Volume 272, File 1922-1923). However, they continued to own and build multiple apartment houses. After this, they were embroiled in a legal dispute in 1928. Busch v. The Eastern Trust Co. et al. involved a legal dispute over the interpretation of a will and the distribution of the deceased's estate (Busch v. The Eastern Trust Co. et al., 1928). Despite these challenges, they continued to own and operate the Westminster Apartments until its sale in the 1940s (Cobden, Simon Spatz: From Holocaust to Halifax, 421)."
                  ]}
                figures={[<Figure key="trunk-fig-1" src="img/trunk/fig-1.jpg" alt="Figure 1" caption="(Nova Scotia Archives, Building Permit for Westminster Apartments, March 1920)" />]}
              />
            </TreeNode>
          }
            second={
              <TreeNode label="2">
                <ModalContent
                  title="The Blueprints (c. 1920)"
                  descriptions={
                    ["The architecture firm responsible for designing the Westminster Apartments was Dolphin and Doswell, a short-lived partnership based in Montreal and Toronto. Formed in 1920—the same year construction began on the Westminster—this was likely one of their first commissions. The partnership dissolved only five years later, in 1925.",
                      "Following this, Harry Royden Doswell moved to New York City, where he joined Shreve, Lamb & Harmon in 1927, the firm famously credited with designing the Empire State Building in 1929. While it is unclear whether Doswell directly contributed to that project, the connection is interesting (The Biographical Dictionary of Architects in Canada 1800-1950, entry on Harry Royden Doswell, accessed April 2025)."
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
            }
            third={<TreeNode label="3">
              <ModalContent
                title="The Best in the East (1920-21)"
                descriptions={
                  [
                    "The Westminster Apartments were prominently featured in local newspapers throughout the construction process, with this image marking the first public reveal. Published as part of a full-page spread in the Evening Mail on March 8th, 1920, this launched the building's advertising campaign. The Westminster was promoted as “the most modern and grand apartment house east of Montreal”—a tagline that has remained part of its legacy over a century later. This slogan was likely coined as it was to be the largest apartment building in Halifax. The Eastern Trust Co. also promised modernity akin to Montreal.",
                    "The development promised an impressive array of modern amenities for the time, including dumbwaiters, an elevator, on-site janitorial services, streamlined heating, and a fully fireproof structure—features that positioned it as a cutting-edge residence in early 20th-century Halifax."
                  ]}
                figures={[<Figure key="trunk-fig-3" src="img/trunk/fig-3.jpg" alt="Figure 3" caption="(The Evening Mail, March 8, 1920, p. 9)" />]}
              />
            </TreeNode>
            } />
        </div>
      </div>
      {/* roots */}
      <div className="w-[50%] h-[30%] my-8 flex flex-col items-center space-y-8">
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
    </div >
  );
}

export default App;
