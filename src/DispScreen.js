import { getAllMessages, sendMessage } from "./userService";
import Message from "./Message";
const DispScreen = (props) => {
  let { messages, user, updateMessage } = props;
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
  function ss(id){
    ele = document.getElementById(id);
    ele.scrollTop = ele.scrollHeight;
  };
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
      ele = document.getElementById('me');
      ele.scrollTop = ele.scrollHeight;
    });
    ele = document.getElementById('me');
    ele.scrollTop = ele.scrollHeight;
  };
  return (
    <div style={styles.disp}>
      <div id="me" style={styles.scr}>
        <h3>
          {messages.map((item) => {
            return <Message item={item} key={item.id} email={user.email} />;
          })}
        </h3>
      </div>  
      {/* {ss()} */}
      <form onSubmit={handleMessage}>
        <input style={{width:'99%',height:'40px' ,border:'2px solid #006d77',marginTop:'3px',borderRadius:'10px',marginBottom:'3px'}} type="text" required placeholder="Type here" name="message" />
        <input style={{width:'20%',height:'30px',border:'3px solid #22223b',borderRadius:'5px',marginLeft:'40%'}} type="submit" value="Send" />
      </form>
    </div>
  );
};

const styles = {
  disp: {
    border: "3px solid #6a040f",
    width: "50%",
    marginLeft: "25%",
    padding: "10px",
    alignText:'center',
    borderRadius:'3px'
  },
  scr: {
    // border: "2px solid red",
    width: "100%",
    height: "600px",
    overflowY: "scroll",
  },
};

export default DispScreen;
