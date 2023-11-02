import Link from 'next/link'

export default function Article() {
    return <nav>
        <ul>
            <li><Link href="/?adpreview=test">Home</Link></li>
            <li><Link href="/xandr?adpreview=test">Xandr</Link></li>
            <li><Link href="/native?adpreview=test">Native</Link></li>
            {/* <li><Link href="/yaleo?adpreview=test">Yaleo</Link></li> */}
            <li><Link href="/admanager?adpreview=test">Google Admanager</Link></li>
        </ul>
    </nav>
  }