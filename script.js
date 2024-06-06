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
  div.style.margin = "5px";
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
const box = document.querySelector('#box');
let count = 0;
document.querySelectorAll('button')[0].addEventListener('click', () => {
  box.style.display = "flex";
  count++;
  if (count <= 20) {
    box.appendChild(setElementToBox());
  }

})


document.querySelectorAll('.color-cell').forEach(cell => {
  cell.addEventListener('click', () => {
    const color = cell.getAttribute('data-color');
    document.getElementById('text').style.color = color;
  })
})


document.getElementById('commentForm').addEventListener('submit', function (event) {


  const name = document.getElementById('name_in').value;
  const text = document.getElementById('text_area').value;
  const date = new Date().toLocaleString();

  const commentSection = document.getElementById('comments');
  const newComment = document.createElement('div');
  newComment.classList.add('comment');

  newComment.innerHTML = `
      <h5 style="margin:0;" class="name">${name}</h5>
      <small style="margin:0;" class="date">${date}</small>
      <p style="margin:0;" class="text">${text}</p>
  `;

  commentSection.appendChild(newComment);
  event.preventDefault();

  document.getElementById('commentForm').reset();
});



