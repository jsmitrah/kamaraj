import React from "react";

export const Content = () => {
  const patients = [
    {
      days: "2d ago",
      firstName: "Jonathan",
      sName: "Smith",
      image: "https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg",
      active: "Active",
      storage: "45%",
      color: "#4f81cc",
      bgColor: "white",
    },
    {
      days: "15d ago",
      firstName: "Kate",
      sName: "Smith",
      image:
        "https://media.istockphoto.com/photos/smiling-indian-young-businesswoman-wear-white-suit-looking-at-camera-picture-id1158915109?b=1&k=20&m=1158915109&s=170667a&w=0&h=WJ7Nhg9Yy6MmitqecuFSTSwLq995cb1Jj9zb5iMMbwI=",
      active: "Active",
      storage: "81%",
      color: "#fbd771",
      bgColor: "#f5f6f8",
    },
    {
      days: "30d ago",
      firstName: "Alexandra",
      sName: "Smith",
      image:
        "https://media.istockphoto.com/photos/portrait-of-small-girl-in-living-room-at-home-picture-id1352096257?b=1&k=20&m=1352096257&s=170667a&w=0&h=pxFX9aF1TREb1bnF9jJIJlfioIHpEOjo92wi5sYIg5w=",
      active: "Inactive",
      storage: "21%",
      color: "#5feec8",
      bgColor: "#f5f6f8",
    },
  ];
  return (
    <div className="col py-3">
      <div className="ps-3 pt-5 pb-5 pe-5" style={{marginLeft: "2%"}}>
        <div
          style={{display: "flex", flexDirection: "row", alignItems: "center"}}
        >
          <i
            class="fs-5 bi bi-search"
            style={{color: "#1a59be", fontWeight: "600"}}
          ></i>
          <div
            style={{
              color: "#c4cbd6",
              fontSize: "14px",
              marginLeft: "10px",
              fontWeight: "500",
            }}
          >
            Search...{" "}
          </div>
        </div>
        <h3 className="pt-3 pb-5">My patient profiles</h3>
        <div className={"card-parent"}>
          {patients.map((patient, index) => {
            return (
              <div
                key={index}
                className={`pt-2 card`}
                style={{
                  backgroundColor: patient.bgColor,
                  marginLeft: index === 0 ? 0 : null,
                }}
              >
                <div style={{paddingLeft: "10%", paddingRight: "10%"}}>
                  <div className="more-icon mt-2">
                    <div
                      style={{
                        color: index === 0 ? "#7a7a7a" : "#c4cbd6",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                    >
                      {patient.days}
                    </div>
                    <i class="fs-5 bi bi-three-dots"></i>
                  </div>
                  <div className="parent-img mt-2 mb-3">
                    <img
                      alt={patient.image}
                      src={patient.image}
                      className="profile-image"
                    />
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      color: index === 0 ? "#404040" : "#c4cbd6",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    {patient.firstName}
                  </div>
                  <div
                    style={{
                      color: index === 0 ? "#404040" : "#c4cbd6",
                      fontWeight: "500",
                      fontSize: "17px",
                    }}
                  >
                    {patient.sName}
                  </div>
                  <div
                    className="active-green mt-2"
                    style={{
                      color: patient.active === "Inactive" ? "red" : "#5beec7",
                      fontWeight: "900",
                      fontSize: "13px",
                    }}
                  >
                    {patient.active}
                  </div>
                  <div
                    class="progress mt-3 mb-3"
                    style={{height: "2%", borderRadious: "2%"}}
                  >
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{
                        width: patient.storage,
                        backgroundColor: patient.color,
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: "13px",
                      color: index === 0 ? "#6f6f6f" : "#c4cbd6",
                    }}
                  >
                    storage :{patient.storage}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-2 card" style={{border: "dotted 0.5px gray"}}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div style={{width: "50%"}}>
                <div style={{textAlign: "center"}}>
                  <i className="fs-1 bi bi-plus-lg active-green" />
                  <div style={{color: "#5b5b5b", fontWeight: "600"}}>
                    create new patient profiles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            borderColor: "gray",
            border: "0.5px solid #f2f3f7",
            marginTop: "125px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <div className="pt-3" style={{height: "100px"}}>
            <div className="gray-text" style={{paddingBottom: "5px"}}>
              Available patient profiles:{" "}
              <span style={{color: "#464646"}}>
                <b>3 of 5</b>
              </span>{" "}
            </div>
            <div class="progress" style={{height: "5%", borderRadious: "2%"}}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{width: "60%", backgroundColor: "#5df2c8"}}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div>
            <button className="button"> Upgrade</button>
          </div>
        </div>
      </div>
    </div>
  );
};
