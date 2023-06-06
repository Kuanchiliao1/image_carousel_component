const imgRightBtn = document.querySelector('.arrow-right-btn')
const imgLeftBtn = document.querySelector('.arrow-left-btn')
const images = document.querySelectorAll('.img-container > img')

console.log(images, imgLeftBtn)

function findNewPicIndex(index, len, direction) {
  if (index === 0 && direction === -1) return len - 1
  if (index === (len - 1) && direction === 1) return 0

  return index + direction
}

function getActiveIndex() {
  const imagesArray = [...images]
  return imagesArray.findIndex(image => image.classList.contains('active'))
}

function setActiveIndex(index) {
  images.forEach((image, idx) => {
    index === idx
      ? image.classList.add('active')
      : image.classList.remove('active')
  })
}

function nextPicture(direction) {
  const pictureIndex = getActiveIndex()
  const newIndex = findNewPicIndex(pictureIndex, images.length, direction)
  setActiveIndex(newIndex)
}

function bindEventListeners() {
  imgRightBtn.addEventListener("click", () => {
    nextPicture(1)
  })

  imgLeftBtn.addEventListener("click", () => {
    nextPicture(-1)
  })
}

bindEventListeners()