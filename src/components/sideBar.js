export const SideBar = () => {
  const menuItems = [
    {menuName: "Dashboard", iconName: "bi-house"},
    {menuName: "Enquiries", iconName: "bi-card-checklist"},
    {menuName: "Profile", iconName: "bi-table", active: true},
    {menuName: "Payment", iconName: "bi-credit-card"},
  ];
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-bar-container">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none side-bar-sub-container ">
          <span className="fs-5 d-none d-sm-inline blue-txt">PATIENT</span>
        </div>
        <ul
          className="nav nav-pills flex-column   mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          {menuItems.map(item => {
            return (
              <li key={item.menuName} className="nav-item">
                <span className="nav-link align-middle px-0">
                  <b>
                    <i
                      className={`fs-6 ${item.iconName}`}
                      style={{
                        color: item?.active ? "#52eec3" : "#d5d8e1",
                        fontSize: "22px",
                      }}
                    ></i>
                  </b>
                  <span
                    className="ms-1 ps-2 d-none d-sm-inline darkBlue-Text"
                    style={{color: item?.active ? "#52eec3" : "#405e7e"}}
                  >
                    {item.menuName}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
        <div className="bolded-bar" />
        <div className="box-border">
          <div className="pt-5 box align-items-center d-flex justify-content-center w-100">
            <div className="box-property">
              <div style={{display: "flex", flexDirection: "column"}}>
                <div className="darkBlue-Text"> Need our help?</div>
                <button className="side-button mt-2">
                  <span
                    style={{
                      fontSize: "15px",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Contact us
                  </span>
                </button>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};
