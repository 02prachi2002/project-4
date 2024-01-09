import './Filter.css'
function Filter(props){
    let filterData = props.filterData;
    return(
        <div className='filter'>
            {
                filterData.map((data) =>(
                    <button>{data.title}</button>
                ))
            }
        </div>
    );
}
export default Filter;