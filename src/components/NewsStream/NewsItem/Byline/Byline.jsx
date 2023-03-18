import './byline.css'

export function Byline({ data }) {

    return (
        <div className="dates-container">
            <span className="author">By: <a className="byline-link" href={data.link} target="blank"> {data.author}</a></span>
            <span className="date"> {data.date} | {data.time} </span>
        </div>
    );
}