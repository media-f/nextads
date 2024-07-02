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
                <li><Link href="/agri">Agri</Link></li>
                <li><Link href="/lagruyere">LG</Link></li>
                <li><Link href="/labroye">LB</Link></li>
                <li><Link href="/lemessager">LM</Link></li>
            </ul>
        }
    </nav>
  }