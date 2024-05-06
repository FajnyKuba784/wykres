const rc = rough.svg(document.querySelector("#svg"));

var config = {
    "x" : 300,
    "y" : 700,
    "gap" : 20,
    "width" : 100,
    "height" : 100
}

var liczby = [58,30,45,11,100,130,78]

    var min = liczby[0]
    var max = liczby[0]
    var minl = 0
    var maxl = 0

for(let i = 0;i<=liczby.length-1;i++){

    
    if(liczby[i]>=0&&liczby[i]<=100){

        if(liczby[i]<min){
            
            
            minl = i
            min = liczby[i]
        }
        if(liczby[i]>max){
            
            maxl = i
            max = liczby[i]
        }
        
    }

}



for(let i = 0;i<=liczby.length-1;i++){

    if(i==0){

        var dlugosc = config.gap + config.width

        var linia2 = liczby.length * dlugosc 

        var linia = linia2 + config.gap

        let line = rc.line(config.x,config.y,config.x+linia,config.y)
        
        svg.appendChild(line)
    }
    if(liczby[i]>=0&&liczby[i]<=100){

        if(i==minl){
            let wysokosc = liczby[i]*5
            let kwadrat = rc.rectangle(config.gap+config.x,config.y-wysokosc,config.width,wysokosc,{fill: 'rgba(0,0,230,0.50)', fillStyle:"solid"})
            
            svg.appendChild(kwadrat)
        }
        else if(i==maxl){
            let wysokosc = liczby[i]*5
            let kwadrat = rc.rectangle(config.gap+config.x,config.y-wysokosc,config.width,wysokosc,{fill: 'rgba(230,0,0,0.50)', fillStyle:"solid"})
            
            svg.appendChild(kwadrat)
        }
        else{
            let wysokosc = liczby[i]*5
            let kwadrat = rc.rectangle(config.gap+config.x,config.y-wysokosc,config.width,wysokosc,{fill: 'rgba(0,230,0,0.50)', fillStyle:"solid"})
            
            svg.appendChild(kwadrat)
        }
    }
        
    config.x = config.x + config.gap + config.width
}