import './meta.css'

export function MetaData({ data }) {

    return (
        <div className="meta">

            <div className="link">
                <a href={data.homepage} target="blank">
                    <div className="abstract">
                        <h2 className="title">{data.title}</h2>
                        <p className="description">
                            {data.description}
                        </p>
                    </div>
                </a>
                <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="thumbnail"
                />
            </div>
        </div>
   );
}