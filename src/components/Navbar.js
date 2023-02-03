import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to={process.env.REACT_APP_BASE_DIR}>
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {isAuth ? (
        <>
          <Link to={`${process.env.REACT_APP_BASE_DIR}/createpost`}>
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to={`${process.env.REACT_APP_BASE_DIR}/logout`}>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </Link>
        </>
      ) : (
        <Link to={`${process.env.REACT_APP_BASE_DIR}/login`}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
