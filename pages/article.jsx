import Columns from '../components/columns'
import { useEffect } from 'react'

export default function Article() {

    useEffect(() => {
        if(window.pubonline) window.pubonline.loadAds()
      })
    return <>

    <h1>Native</h1>

    <div><i>Le contenu natif doit apparaitre ci-dessous :</i></div>
    
    <hr />
    
    <div id="native-content" className="paidpost"></div>

    <hr />

    </>
}