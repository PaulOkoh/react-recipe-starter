import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import css from "./RecipeCard.module.css"

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  return (
    <div className={css.card}>
      <div>
       <div className={css.img_parent}>
         <img src={recipe.image_url} />
         {/* <img src="https://images.albertsons-media.com/is/image/ABS/970020477?$ng-ecom-pdp-desktop$&defaultImage=Not_Available" /> */}
       </div>
       <h3>{recipe.recipe_name}</h3>
      </div>
      <button className={css.recipe_btn} onClick={handleClick}>See More</button>
    </div>
  )
}

export default RecipeCard


