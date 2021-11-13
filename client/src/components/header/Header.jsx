import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">IWP Project</span>
        <span className="headerTitleLg"><b>BLOG</b></span>
      </div>
      <img
        className="headerImg"
        src="https://i.imgur.com/HKHi8sW.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
