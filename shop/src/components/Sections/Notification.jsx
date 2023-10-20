function Notification ({title, text, className}){
    return (
        <div className={`notification_container + ${className}`}>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}
    

    export default Notification
