import './App.css'
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import {filterData,apiUrl} from './data';
import {useEffect, useState} from 'react';
import Spinner from './components/Spinner';
import {toast} from "react-toastify";


function App() {
  const [courses,setcourses] = useState(null);
  const [loading,setloading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title)
  async function fetchdata(){
    setloading(true)
    try{
      //fetchdata function -> saare courses ka data fectch larke le atta hai 
       let response = await fetch(apiUrl);
       //output store the data in jason format
       let output = await response.json();
       //abb output ko store kara diya in setcourses props
       setcourses(output.data);
      
    }
    catch(error){
      //koi error aa gayi api call mai toh yeah toast appear hoga
      toast.error("Problem in api call");
    }
    setloading(false)
  }
  //to call api useeffect
  useEffect(()=>{
    fetchdata();
  },[]
  )
  return (

    // to fetch an api and use "useeffect" in it
  
    <div className='wrapper'>
        <div className='navbar'>
          <Navbar/>
        </div>
        <div className='filter'>
          <Filter filterData={filterData}
          category={category}
          setcategory = {setcategory}/>
        </div>
        <div >
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
    </div>
  );
}

export default App;
