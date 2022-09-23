import { useContext } from 'react'
import ItemPreview from '../../components/item-preview/item-preview.component';
import { ItemsContext } from '../../contexts/items.context'

const ItemsPreview = () => {
  const { itemsMap } = useContext(ItemsContext);

  return (
    <>
      {Object.keys(itemsMap).map(title => {
        const items = itemsMap[title];
        return (
          <ItemPreview key={title} title={title} items={items} />
        )
      })}
    </>
  )
}

export default ItemsPreview;