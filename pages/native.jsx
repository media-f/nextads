import Columns from '../components/columns'
import { useEffect } from 'react'

export default function Native() {

    useEffect(() => {
        if(window.pubonline) window.pubonline.loadAds()
      })

    return <>

    <h1>Native</h1>
    
    <Columns></Columns>

    <div data-placement="qbU0VKDGyS" data-items="3"></div>

    <Columns></Columns>

    <Columns></Columns><div data-placement="qbU0VKDGyS" data-items="1"></div>

    <Columns></Columns>

    <Columns></Columns>

    <div data-placement="qbU0VKDGyS" data-items="3"></div>

    <div className='adslot halfpage' id="adnz_halfpage_1"></div>
       
    </>
}