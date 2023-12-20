const list = [
          "javascript",
          "react",
          "vue",
          "angular",
          "node",
          "express",
]
function ItemsList() {
  return (
    <div>
          <ul>
          {list.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
          </ul>
    </div>
  )
}

export default ItemsList