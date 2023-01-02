import { FooterWrapper, FooterTamplate, Footertxt, FooterRight } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTamplate>
        <Footertxt>
          <p>
            Editha
            <br />
            (우) 00000 대한민국 서울특별시
            <br />
            010.7180.8017
            <br />
            hyounji375@naver.com
            <br />
            Copyright 2022, Ltd. All rights reserved.
          </p>
        </Footertxt>
        <FooterRight>
          <ul>
            <li>
              <span> Editha SNS </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </FooterRight>
      </FooterTamplate>
    </FooterWrapper>
  );
};
export default Footer;
