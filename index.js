const Notification = (props) => {
  //  Write your code here.
  const { text, imgUrl, boxStyle } = props;
  return (
    <div className={boxStyle}>
      <img src={imgUrl} className="img" />
      <p className="msg">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.

  <div className="bg-container">
    <h1 className="title">Notifications</h1>
    <div className="cards-container">
      <Notification
        text="Information Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        boxStyle="information-card card"
      />
      <Notification
        text="Success Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        boxStyle="success-card card"
      />
      <Notification
        text="Warning Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        boxStyle="warning-card card"
      />
      <Notification
        text="Error Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        boxStyle="error-card card"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
