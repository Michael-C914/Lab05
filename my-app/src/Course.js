import  {Content} from "./Content.js"
import  {Header}  from "./Header.js"

export const Course = (props) => {
  return(
    <div>
      <Header name={props.course.name}/>
      <Content parts={props.course.parts} />
    </div>
  )
}