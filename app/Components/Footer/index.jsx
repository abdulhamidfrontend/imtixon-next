import React from "react";
import FooterTop from "../Footer/TopFooter/index";
import FooterCenter from "../Footer/CenterFooter/index";
import FooterBottom from "../Footer/BottomFooter/index";

const index = () => {
  return (
    <div className="border-t border-green-700 pt-5">
      <FooterTop />
      <FooterCenter />
      <FooterBottom />
    </div>
  );
};

export default index;
