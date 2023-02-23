import "./Spinner.css"

function Spinner() {
    return (
        <div className={'container mx-auto flex justify-center items-center h-screen'}>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Spinner