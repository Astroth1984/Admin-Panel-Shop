import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://th.bing.com/th/id/R.f6b0233e61d11773a953c440943bb97e?rik=P%2fM45sOPPvNegA&riu=http%3a%2f%2fwww.pppsmasaurhi.com%2fimg%2fbg-img%2ft1.png&ehk=L2MfCzE0RP1jkiLDVhWo2%2fvpXMKpgNQj%2fV9W%2f9eOafQ%3d&risl=&pid=ImgRaw&r=0"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
