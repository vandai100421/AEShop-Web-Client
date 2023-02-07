import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/">Tài khoản của tôi</Link>,
  },
  {
    key: "2",
    label: <Link to="/">Đơn mua</Link>,
  },
  {
    key: "3",
    label: <Link to="/">Đăng xuất</Link>,
  },
];

const AccountMenu = () => {
  return (
    <div>
      <Dropdown menu={{ items }} arrow>
        <Space>
          <Avatar
            size="small"
            src="https://cf.shopee.vn/file/9b328707c6e4774c0f4464ad8449d1ee_tn"
            alt=""
          />
          Dương Trọng Nghĩa
        </Space>
      </Dropdown>
    </div>
  );
};

export default AccountMenu;
