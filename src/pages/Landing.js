import Header from "../components/Header"
import Cards from "../components/Cards"
import Container from "../components/Container"
import { useLocation } from "react-router-dom"

function Landing()
{
    const data = useLocation()
    console.log(data.state.user)
    const date= new Date()
    const day=date.getDate()
    const month=date.getMonth()
    const time=date.toLocaleTimeString()

    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header username={data.state.user}/>
        {/*Card*/}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Cards bgcolor={"#8272DA"} title={day} subtitle={"Chennai"} />
          <Cards bgcolor={"#FD6663"} title={"December"} subtitle={time} />
          <Cards bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        {/*Todo Container*/}
        <Container/>
      </div>

    </div>
    )
}

export default Landing 