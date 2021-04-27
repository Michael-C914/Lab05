import  {Part}  from "./Part.js"

export const Content = ({parts}) => {

    return(
        <div>
            {parts.map((part) => {
                return(
                    <Part key={part.id} part={part} />
                )
            })}
        </div>
    )
}