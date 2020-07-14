

const canvas = document.getElementById('canvas')
const oTPic = document.createElement('img');
oTPic.setAttribute('src','images/OT_PIC.jpeg')
canvas.appendChild(oTPic)

const instructBar = document.createElement('div')

canvas.appendChild(instructBar)
instructBar.style.border = '2px solid rgb(255, 248, 220)'
instructBar.style.height = '100px'

const actionBar = document.createElement('div')

canvas.appendChild(actionBar)

actionBar.style.border = '2px solid rgb(255, 248, 220)'
actionBar.style.fontSize = '20px'
actionBar.style.height = '180px'

let inputCapacity = document.createElement('input')

instructBar.appendChild(inputCapacity)

inputCapacity.style.width = '400px'
inputCapacity.style.height = '25px'
inputCapacity.style.fontSize = '25px'
inputCapacity.style.bottom = 0





class Traveler {
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
hunt(){
 return this.food+=2
}
eat(){
    
    if (this.food > 0){

        this.food--
    }else{

        this.isHealthy = false
    }
    return this
}

}
class Wagon {

    constructor (capacity){
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount(){//I changed this method
        if (this.passengers.length <= this.capacity){
            return this.capacity - this.passengers.length
        }
    }

    join(traveler){
        if (this.getAvailableSeatCount()== 0){
           return 'no space left' 
        }else{
           
            actionBar.append(JSON.stringify(traveler))
            
        return this.passengers.push(traveler)
        }
    }
    shouldQuarantine(){
        const isInfected = this.passengers.some(passengers =>
            passengers.isHealthy === false
        )
       return isInfected
    } 
    totalFood(){
        
        const daFood = this.passengers.map(x => x.food )
       let allDaFood = daFood.reduce((a,b)=> a + b, 0)

        // console.log(daFood)
       return allDaFood
        
    }
    
    
}

