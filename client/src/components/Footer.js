import logo from "./images/SpannerLogo.png";

const Footer = () => {
  return (
    <div className="Footers">
      <img className="Footers__logoPic" src={logo} />
      <div className="footers__companyName">© 2020 FastFlow, Inc</div>
      <div className="Footers__body">
        <div className="footers__members">
          <div className="footers__member teamLeader">
            BackEnd & Team Leader:&nbsp;{" "}
            {
              <a className="team__member" href="https://github.com/doi-h">
                이정환
              </a>
            }{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="footers__member">
            FrontEnd:&nbsp;{" "}
            {
              <a className="team__member" href="https://github.com/yumboy8747">
                염정헌
              </a>
            }
            ,{" "}
            {
              <a className="team__member" href="https://github.com/CJ0823">
                최창준
              </a>
            }
            ,{" "}
            {
              <a className="team__member" href="https://github.com/ryhyn123">
                류종현
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
