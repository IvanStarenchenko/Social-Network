import React , {useState} from "react"

const Paginator = ({onPageChanged , currentPage , totalItemsCount , pageSize }) => {
  let pagesCount = Math.ceil(totalItemsCount /  pageSize)
  let pages = [];
  for (let i=1 ; i <= pagesCount; i++){
    pages.push(i);
  }
  let portionSize = 10
  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber , setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize
  
    return (
      <div className="pagination">
        {portionNumber > 1 
          ?<button onClick = {() => {setPortionNumber(portionNumber - 1) }}>Prev</button>
          :<button disabled>Prev</button>}
       <div className='find-user-page'>  
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => (
            <span key={p} onClick={(e) => onPageChanged(p)} className={currentPage === p ? 'page page-active' : 'page'}>{p}</span>
          ))}
       </div>

        {portionCount > portionNumber 
        ?<button onClick = {() => {setPortionNumber(portionNumber + 1) }}>Next</button>
        :<button disabled>Next</button>}
      </div>
    )
}
 
export default Paginator