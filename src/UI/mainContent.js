import iphone15 from "../images/iphone15.jpg";
import ultra2 from "../images/ultra2.jpg";
import carbon from "../images/carbon.jpg";
import promax from "../images/promax.jpg";
import logo from "../images/logo.svg";

const Content = () => {
  return (
    <div style={{ overflowX: "none" }}>
      {/* 1 card */}
      <div class="card" style={{ marginTop: 60 }}>
        <div
          class="card-body text-center"
          style={{ backgroundColor: "rgb(246,245,248)" }}
        >
          <h1 class="card-title">iPhone15</h1>
          <h3>New Camera.New Design.Newphoria</h3>
          <h3>
            <small class="text-muted" style={{ color: "white" }}>
              Pre order from 5:30PM IST on 15 September
            </small>
          </h3>
          <div>
            <a href="#" class="" style={{ marginRight: 30 }}>
              Learn More {`>`}
            </a>
            <a href="#" class="">
              View Pricing {`>`}
            </a>
          </div>
        </div>
        <img class="card-img-top" src={promax} alt="Card image cap" />
      </div>
      {/* 1 card - 2*/}
      <div class="card">
        <div
          class="card-body text-center"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h1 class="card-title">iPhone15 Pro</h1>
          <h3>Titanium.So Strong.So Light. So Pro</h3>
          <h3>
            <small style={{ color: "rgb(134,134,139)" }}>
              Pre order from 5:30PM IST on 15 September
            </small>
          </h3>
          <div>
            <a href="#" class="" style={{ marginRight: 30 }}>
              Learn More {`>`}
            </a>
            <a href="#" class="">
              View Pricing {`>`}
            </a>
          </div>
        </div>
        <img class="card-img-top" src={iphone15} alt="Card image cap" />
      </div>
      {/* 2 cards */}
      <div class="row" style={{ marginTop: 10 }}>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div
              class="card-body text-center"
              style={{ backgroundColor: "rgb(250,250,250)", paddingTop: 50 }}
            >
              <h5 class="card-title h3">
                {" "}
                <img
                  src={logo}
                  style={{ height: 28, marginBottom: 10, marginRight: 5 }}
                />
                <strong>WATCH</strong>
              </h5>
              <h6 style={{color:'rgb(253,106,19)'}}><strong>ULTRA 2</strong></h6>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
            <img class="card-img-top" src={ultra2} alt="Card image cap" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <img class="card-img-top" src={carbon} alt="Card image cap" />
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
