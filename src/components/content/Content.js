import "./Content.css";


let subtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo non nunc faucibus euismod. Ut euismod pellentesque faucibus. Quisque varius velit vel erat porttitor, vel elementum lorem lacinia. Vivamus et dictum augue, eu gravida arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tempus ultrices leo at placerat. Mauris in accumsan metus. Aliquam porta, mauris ut pretium luctus, tortor elit blandit massa, sed ultrices nulla nulla ac ante. Donec ac dignissim nulla, vel vehicula leo. Aliquam consectetur libero non orci varius sollicitudin. Donec molestie porttitor ligula, sed pharetra odio sollicitudin placerat.";

const Content = (props) => {
    return (
      <div className="content-box">
        <h2 className="content-box__maintext">{props.maintext}</h2>
        <p className="content-box__subtext">{subtext}</p>
      </div>  
    );
}

export default Content;