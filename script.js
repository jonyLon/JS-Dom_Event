let item = document.querySelector("#inputer");
item.addEventListener("keypress", (e) => {
  if (e.key) {
    e.preventDefault();
  }
});


let getRandom = () => Math.floor(Math.random() * 256);

let getRGB = () => `rgb(${getRandom()},${getRandom()},${getRandom()})`


function setElementToBox() {
  let div = document.createElement('div')
  div.style.width = div.style.height = '50px'
  let rgb = getRGB();
  div.style.backgroundColor = rgb;
  // div.style.justifyContent = 'center';
  // div.style.alignItems = 'center';
  // let p = document.createElement('p')
  // p.textContent = rgb;
  // div.append(p)
  //document.querySelector('.root').append(div)
  // if (!flag)
  //   document.querySelector('.root').insertAdjacentElement('afterbegin', div)
  // else
  //   document.querySelector('.root').insertAdjacentElement('beforeend', div)
  return div
}

document.querySelectorAll('button')[0].addEventListener('click', () => {
  document.querySelector('#box').appendChild(setElementToBox())



})


document.querySelectorAll('.color-cell').forEach(cell => {
  cell.addEventListener('click', () => {
    const color = cell.getAttribute('data-color');
    document.getElementById('text').style.color = color;
  })
})




