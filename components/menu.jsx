import Link from 'next/link'

export default function Menu(props) {
    return <nav>
        {props.children 
            ?
            <div>{props.children}</div>
            :
            <ul>
                <li><Link href="/?adpreview=test">Home</Link></li>
                <li><Link href="/xandr?adpreview=test">Xandr</Link></li>
                <li><Link href="/native?adpreview=test">Native</Link></li>
                {/* <li><Link href="/yaleo?adpreview=test">Yaleo</Link></li> */}
                <li><Link href="/admanager?adpreview=test">Google Admanager</Link></li>
                <li><Link href="/agri">Agri</Link></li>
            </ul>
        }
    </nav>
  }