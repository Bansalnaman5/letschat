
const Message=(props)=>{
    let item=props.item;
    let email=props.email;
    if(email!=item.email){
    return(
        <div style={styles.mess}>
            {/* <h4>{item.name} {item.email} {item.message}</h4> */}
            <div style={styles.name}>{item.name} ~ <span style={{alignText:'right'}}> {item.email} </span></div>
            <div style={styles.messa}>{item.message}</div> 
            <div style={styles.da}>{item.time}</div>
        </div>
    );
    }
    else{
        return(
            <div style={styles.mess1}>
                {/* <h4>{item.name} {item.email} {item.message}</h4> */}
                <div style={styles.name}>{item.name} ~ <span style={{alignText:'left'}}> {item.email} </span></div>
                <div style={styles.messa}>{item.message}</div> 
                <div style={styles.da}>{item.time}</div>
            </div>
        );
    }
}

const styles={
    mess:{
        border:'2px solid #219ebc',
        margin:'2px',
        borderRadius:'10px',
        maxWidth:'50%',
        // minWidth:'40%',
        padding:'10px',
        marginBottom:'5px'
    },
    mess1:{
        border:'2px solid #219ebc',
        margin:'2px',
        borderRadius:'10px',
        maxWidth:'50%',
        // minWidth:'40%',
        padding:'10px',
        textAlign:'right',
        marginLeft:'45%'
    },
    name:{
        // border:'1px solid blue',
        marginTop:'0',
        fontWeight:'10',
        fontSize:'15px',
        textAlign:'center'
    },
    da:{
        fontWeight:'10',
        fontSize:'10px',
        marginTop:'3px'
    },
    messa:{
        fontWeight:'20',
        fontSize:'18px',
        padding:'2px',
        marginBottom:'3px'
    }
}

export default Message;