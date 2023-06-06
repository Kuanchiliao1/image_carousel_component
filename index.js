const images = document.querySelectorAll('.img-container > img')
const imageBtns = document.querySelectorAll('.dot-container button')

function findNewPicIndex(index, len, direction) {
  if (index === 0 && direction === -1) return len - 1
  if (index === (len - 1) && direction === 1) return 0

  return index + direction
}

function getActiveIndex() {
  const imagesArray = [...images]
  return imagesArray.findIndex(image => image.classList.contains('active'))
}

function setActiveImg(index) {
  images.forEach((image, idx) => {
    index === idx
      ? image.classList.add('active')
      : image.classList.remove('active')
  })
}

function setActiveBtn(index) {
  imageBtns.forEach((btn, idx) => {
    index === idx
      ? btn.classList.add('active')
      : btn.classList.remove('active')
  })
}

function nextPicture(direction) {
  const pictureIndex = getActiveIndex()
  const newIndex = findNewPicIndex(pictureIndex, images.length, direction)
  setActiveImg(newIndex)
  setActiveBtn(newIndex)
}

function bindEventListeners() {
  const imgRightBtn = document.querySelector('.arrow-right-btn')
  const imgLeftBtn = document.querySelector('.arrow-left-btn')

  imgRightBtn.addEventListener("click", () => {
    nextPicture(1)
  })

  imgLeftBtn.addEventListener("click", () => {
    nextPicture(-1)
  })

  imageBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      setActiveImg(idx)
      setActiveBtn(idx)
    })
  })
  
}

bindEventListeners()