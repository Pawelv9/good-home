import './category-item.styles.scss'

const CategoryItem = ({ category, id }) => {
  const { imageUrl, title } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Discover</p>
      </div>
    </div>

  )
}

export default CategoryItem;