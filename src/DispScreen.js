import { getAllMessages, sendMessage } from "./userService";
import Message from "./Message";
import {useState} from 'react';
const DispScreen = (props) => {
  // let [curruser,upcurruser]=useState("");
  let { messages, user, updateMessage, dd, getuser ,setUser} = props;
  let ele = document.getElementById("me");
  // ele.scrollTop = ele.scrollHeight;
  setInterval(() => {
    getAllMessages().then((doc) => {
      if (doc.length > messages.length) {
        updateMessage();
        // ele=document.getElementById("me");
        // ele.scrollTop = ele.scrollHeight;
        // console.log(doc.length," ",messages.length);
      }
    });
  }, 12000);
  function ss(id) {
    ele = document.getElementById(id);
    ele.scrollTop = ele.scrollHeight;
  }
  const handelUpdate=(event)=>{
    event.preventDefault();
    // console.log(event.target.value);
    setUser();
    getuser();
  }
  const handleMessage = (event) => {
    event.preventDefault();
    sendMessage({
      name: user.name,
      email: user.email,
      message: event.target[0].value,
    }).then((val) => {
      // console.log(val);
      updateMessage();
      // ss("me");
      event.target[0].value = "";
      ele = document.getElementById("me");
      ele.scrollTop = ele.scrollHeight;
    });
    ele = document.getElementById("me");
    ele.scrollTop = ele.scrollHeight;
  };
  setInterval(()=>{
    getuser()
  },18000)
  // const updateuser = (event) => {
  //   event.preventDefault();
  //   // console.log(event.target.value)
  //   updateUser({'user':user.name}).then((ans)=>{
  //     // curruser=ans
  //   //  upcurruser(ans)
  //     console.log(ans);
  //   })
  // };
  
  // setInterval(()=>{
  //   getUser().then((ans)=>{
  //     // console.log(ans);
  //     upcurruser(ans)
  //     // curruser=ans;
  //   })
  // },12000)
  console.log(dd);
  return (
    <div style={styles.disp}>
      <div id="me" style={styles.scr}>
        {/* <h6>{dd}</h6> */}
        <h3>
          {messages.map((item) => {
            return <Message item={item} key={item.id} email={user.email} />;
          })}
        </h3>
      </div>
      {/* {ss()} */}
      <form onSubmit={handleMessage}>
        <input
          onChange={handelUpdate}
          style={{
            width: "99%",
            height: "40px",
            border: "2px solid #006d77",
            marginTop: "3px",
            borderRadius: "10px",
            marginBottom: "3px",
          }}
          type="text"
          required
          placeholder="Type here"
          name="message"
        />
        <input
          style={{
            width: "20%",
            height: "30px",
            border: "3px solid #22223b",
            borderRadius: "5px",
            marginLeft: "40%",
          }}
          type="submit"
          value="Send"
        />
      </form>
      {
        new Date().getTime()-5000<dd.created && dd.user
      }
    </div>
  );
};

const styles = {
  disp: {
    border: "3px solid #6a040f",
    width: "50%",
    marginLeft: "25%",
    padding: "10px",
    alignText: "center",
    borderRadius: "3px",
  },
  scr: {
    // border: "2px solid red",
    width: "100%",
    height: "600px",
    overflowY: "scroll",
  },
};

export default DispScreen;
