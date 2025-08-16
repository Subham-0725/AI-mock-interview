
import { Headings } from "@/components/headings"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

const dashboard = () => {
  return (
    <>
    <div className="flex w-full items-center justify-between">

    <Headings title="Dashboard" description="Start your interview preparation here" />

    <Link to="/generate/create">
    <Button size={"sm"}>
        <Plus />Add New</Button></Link>

    </div>
    
    </>
  )
}

export default dashboard
