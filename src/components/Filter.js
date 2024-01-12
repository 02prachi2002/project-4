import './Filter.css'
function Filter(props){
    let filterData = props.filterData;
    let category = props.category
    let setcategory = props.setcategory;
    function filterhandler(title){
        setcategory(title)
    }
    return(
        <div className='filter'>
            {/* to map the data given in filterdata to make buttons  */}
            {
                filterData.map((data) =>(
                    <button key={data.id} onClick={() => filterhandler(data.title)}>{data.title}</button>
                ))
            }
        </div>
    );
}
export default Filter;