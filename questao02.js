let towers = [[5,4,3,2,1],[],[]]
let positions = ['p1', 'p2', 'p3', 'p4', 'p5', 'p0','t1', 't2', 't3']
/*criando buffer de movimentos*/
let movements = []

function render (){
    towers.forEach((tower, towerid) => {
        tower.forEach((disk,position) => {
            let d = document.querySelector('.d'+disk)
            positions.forEach(position => {
                d.classList.remove(position)
            })
            d.classList.add('t'+(towerid+1))
            d.classList.add('p'+(position+1))
        })
    })
}

function move (fromtower, totower){
    if(!towers[fromtower].length) return
    let disk = towers[fromtower].pop()
    if(towers[totower].length){ /*Lógica para não permitir uma maior ficar por cima de uma menor */
        if(towers[totower][towers[totower].length-1]<disk){
            return towers[fromtower].push(disk)
        }
    }
    let d = document.querySelector('.d'+disk)
    d.classList.add('p0')
    towers[totower].push(disk)
    setTimeout(render,400)
}

/*Criando uma fila de movimentos */
function clicktower(n){
    if(movements.length && movements[0].length==1){
        movements[0].push(n)
    } else {
        movements.unshift([n])
    }
    console.log(movements);
}

setInterval(()=>{
    if (movements.length && movements[movements.length-1].length==2){
        let m=movements.pop()
        move(m[0], m[1])
    }
},600)

render()