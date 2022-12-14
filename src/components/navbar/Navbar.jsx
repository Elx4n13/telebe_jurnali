import React from "react";
import styles from "./Navbar.module.scss";
import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Link to="/">
            <h1>Telebe Jurnali</h1>
          </Link>
        </div>
        <div className={styles.right}>
          <Link to="/contacts/new">
            <Button
              className={styles.addButton}
              type="primary"
              size="small"
              icon={<UserAddOutlined />}
            >
              yeni telebe
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
