import "./portolist.scss"

export default function Protolist({id,title,active,setSelected}) {
    return (
        <li className={active ? "portolist active":"portolist"} onClick={()=>{ console.log("dsd"); setSelected(id)}} >
            {title}
        </li>
    )
}
