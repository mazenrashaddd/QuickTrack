import "./style.css";

export default function CallToAction() {
  return (
    <>
      <div id = "cta"className="row d-flex flex-row text-center justify-content-center align-items-center mt-5 mb-5">
        <div className="col-12">
          <h1 className="cCTATitle">Ready to take control of your time?</h1>
        </div>
        <div className="col-12">
          <button className="mt-5 cCTABtn">Get Started Now</button>
        </div>
      </div>
    </>
  );
}
