const Movie = (props) => {
    return (
        <div id={props.title} className="group relative animate-entranceMovie">
            <figure className="h-full">
                <img
                    className="w-full h-full object-cover animate-entranceImage"
                    src={props.thumbPath}
                    alt={props.title}
                />
                <figcaption
                    className="absolute group-hover:top-24 group-hover:translate-y-[-50%] group-hover:z-10 group-hover:animate-txtFadeIn invisible group-hover:visible">
                    <p className="p-4 text-center">{props.synopsis}</p>
                    <div className="flex justify-center">
                        <a
                            className="block text-center uppercase -skew-y-6 border-2 px-2 border-title"
                            href={props.trailerLink}
                        >
                            {" "}
                            watch trailer{" "}
                        </a>
                    </div>
                </figcaption>
            </figure>
            <div
                className="absolute bottom-0 w-full h-3/5 bg-gradient-to-t from-background group-hover:to-background group-hover:opacity-80 group-hover:h-full group-hover:animate-imgFadeIn"></div>
            <div className="absolute bottom-4 w-full mx-2">
                <h2 className="text-title text-xl font-bold uppercase font-barlow primary-color leading-6">
                    {props.title}
                    <span className="text-text text-sm"> {props.year}</span>
                </h2>
                <ul className="flex flex-col leading-4">
                    <li>Running Time {props.runningTime}</li>
                    <li>Directed by {props.director}</li>
                    <li>
                        {props.categories.map((category) => category.name).join(" - ")}{" "}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Movie
