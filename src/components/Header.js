import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Videos
      </Link>
      <Link href="/images" className="item">
        Images
      </Link>
      <Link href="/transaction" className="item">
        Transaction
      </Link>
    </div>
  );
};

export default Header;
