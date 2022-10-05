let towers = [[5,4,3,2,1],[],[]]
let positions = ['p1', 'p2', 'p3', 'p4', 'p5', 'p0','t1', 't2', 't3']
/*criando buffer de movimentos*/
let diskMovements = []

function render (){
    towers.forEach((tower, towerId) => {
        tower.forEach((disk,position) => {
            let d = document.querySelector('.d' + disk)
            positions.forEach(position => {
                d.classList.remove(position)
            })
            d.classList.add('t'+(towerId + 1))
            d.classList.add('p'+(position + 1))
        })
    })
}

function move (fromTower, toTower){
    if(!towers[fromTower].length) return
    let disk = towers[fromTower].pop()
    if(towers[toTower].length){ /*Lógica para não permitir uma maior ficar por cima de uma menor */
        if(towers[toTower][towers[toTower].length-1] < disk){
            return towers[fromTower].push(disk)
        }
    }
    let d = document.querySelector('.d'+disk)
    d.classList.add('p0')
    towers[toTower].push(disk)
    setTimeout(render,400)
}

/*Criando uma fila de movimentos */
function clicktower(n){
    if(diskMovements.length && diskMovements[0].length == 1){
        diskMovements[0].push(n);
    } else {
        diskMovements.unshift([n]);
    }
    console.log(diskMovements);
    console.log(diskMovements.length);
    console.log(diskMovements[0].length == 1);
}

setInterval(()=>{
    if (diskMovements.length && diskMovements[diskMovements.length-1].length == 2){
        let movement = diskMovements.pop()
        move(movement[0], movement[1])
    }
},600)

render()