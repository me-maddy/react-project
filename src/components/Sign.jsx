function Sign() {
  return (
    <section className="section section-register">
      <div className="container">
        <div className="r-top flex flex-row">
          <div className="r-left-top flex flex-column">
            <p className="r-head">Personal Information :</p>
            <div className="r-pic-cont">
              <img src="./images/upload.svg" alt="Loading..." />
              <p className="r-head">Upload Photo</p>
            </div>
          </div>
          <div className="r-right-top flex flex-column">
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              required
              autoComplete="off"
            />
            <input
              type="text"
              className="input"
              placeholder="Email Address"
              required
              autoComplete="off"
            />
            <input
              type="text"
              className="input"
              placeholder="Phone Number"
              required
              autoComplete="off"
            />
            <input
              type="text"
              className="input"
              placeholder="DOB"
              required
              autoComplete="off"
            />
          </div>
        </div>
        {/* LOwer part start */}
        <div className="r-bottom flex flex-column">
          <div className="r-categories-cont flex flex-column">
            <div className="r-head">Areas of Expertise :</div>
            <div className="r-bottom-categories flex flex-row">
              <select name="mySelect1" id="select1" value="Category">
                <option value="commu">Good Communication skill</option>
                <option value="obs">Observer and Analyst</option>
                <option value="Reader">Reader</option>
              </select>
              <select name="mySelect2" id="select2" value="Sub Category">
                <option value="commu">Good Communication skill</option>
                <option value="obs">Observer and Analyst</option>
                <option value="Reader">Reader</option>
              </select>
            </div>
          </div>
          <div className="r-avai-cont flex flex-column">
            <div className="r-head">Availability :</div>
            <div className="select-cont">
              <select name="mySelect3" id="select3" value="Sub Category">
                <option value="commu">Good Communication skill</option>
                <option value="obs">Observer and Analyst</option>
                <option value="Reader">Reader</option>
              </select>
            </div>
          </div>
          <div className="r-text-cont flex flex-column">
            <div className="r-head">About Experience :</div>
            <textarea name="myText" id="text" cols="30" rows="10"></textarea>
          </div>
          <div className="btn flex flex-row get-start">
            <div className="btn-data">Register</div>
            <img src="./images/arrow.svg" alt="-" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sign;
