import React from "react";
import "./index.css";
import {
  getAllMessages,
  getOtp,
  registerUser,
  isRegistered,
} from "./userService";
import SignInLogin from "./SigninLogin";
import DispScreen from "./DispScreen";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: 0,
      otp: 0,
      displayotp: 0,
      error: 0,
      myerror: "",
      user: {
        name: "",
        email: "",
      },
      messages: [],
    };
  }
  updateMessage = () => {
    getAllMessages().then((doc) => {
      let m = doc;
      this.setState({ messages: doc });
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.updateMessage();
    const name = event.target[0].value;
    const email = event.target[1].value;
    var user = this.state.user;
    user.name = name;
    user.email = email;
    this.setState({ user: user });
    // getOtp(user).then((val) => {
    //   // console.log(val);
    //   this.setState({
    //     otp: val.otp,
    //     displayotp: 1,
    //   });
    // });
    this.setState({
      otp: 123456,
      displayotp: 1,
    });
  };
  checkotp = (event) => {
    if (this.state.otp == event.target.value) {
      isRegistered({
        name: this.state.user.name,
        email: this.state.user.email,
      }).then((val) => {
        if (val) {
          registerUser({
            name: this.state.user.name,
            email: this.state.user.email,
          }).then((data) => {
            if (data.message == "Success") {
              this.setState({
                myerror: data.message,
                error: 1,
              });
            }
          });
        }
      });
      this.setState({
        isSignedIn: true,
        displayotp: 0,
      });
      // console.log(this.state.messages);
    }
  };
  render() {
    const { displayotp, error, myerror, isSignedIn } = this.state;
    if (!isSignedIn) {
      return (
        <SignInLogin
          displayotp={displayotp}
          error={error}
          myerror={myerror}
          handleSubmit={this.handleSubmit}
          checkotp={this.checkotp}
        />
      );
    } else {
      // return <div>naman is good boy</div>;
      return (
        <DispScreen
          displayotp={displayotp}
          error={error}
          myerror={myerror}
          messages={this.state.messages}
          user={this.state.user}
          updateMessage={this.updateMessage}
        />
      );
    }
  }
}

// const styles = {
//   inp: {
//     marginBottom: "10px",
//     marginLeft: "10px",
//     marginRight: "10px",
//   },
// };

export default App;
