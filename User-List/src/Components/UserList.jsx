import axios from "axios";
import "../Components/UserList.css"
import { useEffect, useState } from "react";

export const UserList = () => {
  const [userList, setUserList] = useState([{}]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setUserList(response.data);
  };

  const deleteUserList = (id) => {
    const filteredUserList = userList?.filter((item) => item.id !== id);
    setUserList(filteredUserList);
  };

  return (
    <div>
      <div className="user-container">
        <h2>User List</h2>
        {userList?.map((item) => (
          <div key={item.id} className="user">
            <p>
              <b>{item.id}. </b>
              {item.title}
            </p>
            <span>
              <button
                onClick={() => deleteUserList(item.id)}
                className="dlt-btn"
              >
                X
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
