import "./PageStyles.css";
// import "./Assets";



function Page(props) {

    return (
        <>
            <div className={props.cName}>
                <img alt="pageImg" src={props.pageImg} />

                <div className="page-text">
                <center>
                    <h1>{props.title}</h1>
                    <p> {props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText} </a>
                    </center>
                </div>
            </div>




        </>
    )
}
export default Page;