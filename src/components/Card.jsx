export default function Card({ thumb, series }) {
    //    const {thumb, series} = props

    return (
        <div className="col">
            <div className="card text-align-left">
                <img className="card-img-top rounded-0" src={thumb} alt="#" />
                <div className="card-body ">
                    <h6 className="card-title">{series}</h6>
                </div>
            </div>
        </div>
    )
}