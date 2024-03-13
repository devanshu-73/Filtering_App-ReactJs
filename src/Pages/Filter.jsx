
const Filter = () => {
    const handleOnchange =()=>{
        console.log("Hello");
    }
    return (
    <>
     <input type="search" name="search" id="search" onChange={handleOnchange} placeholder="Search Here..." />   

    </>
  )
}

export default Filter
