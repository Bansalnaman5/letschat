const SignInLogin = (props) => {
  return (
    <div className="master">
      <h3>Lets Chat</h3>
      {props.error && <h3>{props.myerror}</h3>}
      <h4 style={styles.inp}>Login or Sign Up</h4>
      <form onSubmit={props.handleSubmit}>
        <input
          style={styles.inp}
          type="text"
          name="name"
          placeholder="Name"
          required
          //   onChange={this.handleChange}
        />
        <input
          style={styles.inp}
          type="email"
          name="email"
          placeholder="Email"
          required
          //   onChange={this.handleChange}
        />
        <input type="submit" value="submit" />
      </form>
      {props.displayotp && (
        <input
          type="number"
          placeholder="Enter OTP"
          name="pot"
          onChange={props.checkotp}
        />
      )}
    </div>
  );
};
const styles = {
  inp: {
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px",
  },
};
export default SignInLogin;
