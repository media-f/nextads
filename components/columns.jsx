export default function Columns(props) {
    return <>
    <div className="columns-3">
        <div className='flow'>
            <div className="imgplaceholder"></div>
            Loremv ipsum, dolor sit amet consectetur adipisicing elit. Dicta necessitatibus, consequatur libero quae enim ut natus illum cupiditate similique, unde officia veniam nulla aspernatur est quo vitae deserunt iure magni.
        </div>
        
        {props.children 
            ?
            <div className='flow'>{props.children}</div>
            :
            <div className='flow'>
                <div className="imgplaceholder"></div>
                Loremv ipsum, dolor sit amet consectetur adipisicing elit. Dicta necessitatibus, consequatur libero quae enim ut natus illum cupiditate similique, unde officia veniam nulla aspernatur est quo vitae deserunt iure magni.
            </div>
        }

        <div className='flow'>
            <div className="imgplaceholder"></div>
            Loremv ipsum, dolor sit amet consectetur adipisicing elit. Dicta necessitatibus, consequatur libero quae enim ut natus illum cupiditate similique, unde officia veniam nulla aspernatur est quo vitae deserunt iure magni.
        </div>
                   
    </div>
    </>
  }