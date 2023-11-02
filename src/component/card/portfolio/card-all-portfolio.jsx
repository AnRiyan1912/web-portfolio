import Pos1 from "../../../assets/portfolio/pos-system/pos1.PNG";
import Pos2 from "../../../assets/portfolio/pos-system/pos2.PNG";
import Sosialbook from "../../../assets/portfolio/sosialbook/sosialbook.PNG";
import EventManagement from "../../../assets/portfolio/event-ticket-management/eventmanagement.PNG";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const imagePos = [Pos1, Pos2];
// const imageEventManagement = [EventManagement];
// const imageSosialbook = [Sosialbook];

export const CardAllPortfolio = () => {
  return (
    <div className="col-auto 2xl:mt-4 mt-1">
      <div className="flex justify-center gap-4 max-sm:grid">
        {/* col one */}
        <div className="col-auto w-5/12 h-52 2xl:h-72 max-sm:w-full max-sm:mt-4">
          {/* port one */}
          <Carousel>
            {/* {imagePos.map((image, index) => {
              return ( */}
            {/* <> */}
            <div>
              <img src={Pos1} />
            </div>
            <div>
              <img src={Pos2} />
            </div>
            {/* </> */}
            {/* );
            })} */}
          </Carousel>
        </div>
        <div className="col-auto w-5/12 h-52 2xl:h-72   max-sm:w-full max-sm:mt-12">
          {/* port two */}
          <Carousel>
            {/* {imageEventManagement.map((image, index) => {
              return (
                <> */}
            <div>
              <img src={Sosialbook} />
            </div>
            {/* </>
              );
            })} */}
          </Carousel>
          {/* port two */}
        </div>
      </div>

      {/* col two */}
      <div className="flex justify-center gap-4 mt-4 max-sm:grid">
        <div className="col-auto w-5/12 h-52 2xl:h-72 max-sm:w-full  max-sm:mt-12">
          {/* port one */}
          <Carousel>
            {/* {imagePos.map((image, index) => {
              return (
                <> */}
            <div>
              <img src={EventManagement} />{" "}
            </div>
            {/* </> */}
            {/* );
            })} */}
          </Carousel>
        </div>
        <div className="col-auto w-5/12 h-52 2xl:h-72">{/* port two */}</div>
      </div>
    </div>
  );
};
