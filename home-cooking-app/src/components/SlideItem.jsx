import styles from './SlideItem.module.css'

const SlideItem = () => {
  return (
    <div className={styles["slide-item"]}>
      <div className={styles["avatar-wrapper"]}>
        <img src="./images/avatars/avatar_1.jpg" />
      </div>
      <div className={styles["image-wrapper"]}>
        <img src="./images/food/food_1.jpg" />
      </div>
      <div className={styles["text-wrapper"]}>
        <h2>Katie Whatever</h2>

        <div className={styles["tag-wrapper"]}>
          <div className={styles["tag"]}>Delivery</div>
          <div className={styles["tag"]}>Asian</div>
          <div className={styles["tag"]}>Private Chef</div>
        </div>
      </div>
    </div>
  )
}

export default SlideItem;