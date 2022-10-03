// const data = [
//   {id:1, name: 'dilshod1', address: 'tashkent1'},
//   {id:2, name: 'dilshod2', address: 'tashkent2'},
//   {id:3, name: 'dilshod3', address: 'tashkent3'},
// ]

// let tbody = document.querySelector('tbody');
// let btn = document.querySelector('button');
// let input = document.querySelectorAll('input');
// let delBtn = document.createElement('button')
// delBtn.classList.add = 'delBtn'
// delBtn.textContent = 'delete'
// let newUser = {}
// console.log(delBtn)

// //creating new user
// input.forEach(value => {
//   value.addEventListener('change', (e) => {
//     newUser = {...newUser ,id: data.length + 1, [e.target.name] : e.target.value}
//   })
// })


// //adding to list
// btn.addEventListener('click', (e) => {
//   data.push(newUser);
//   show()
// })



// // showing list on screen
// function show() {
//   let info = ''
//   data.map(value => {
//     info += `<tr>`
//     info += `<td>${value.id}</td>
//             <td>${value.name}</td>
//             <td>${value.address}</td>
//             <td>${delBtn}</td>
//             `;
//     info += `</tr>`
//   })
//   tbody.innerHTML = info;
// }
// show()