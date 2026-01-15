const gelasA = document.getElementById('gelas-a')
const gelasB = document.getElementById('gelas-b')
const gelasTransit = document.getElementById('gelas-transit')
const gelasAContent = document.querySelector('#gelas-a div')
const gelasBContent = document.querySelector('#gelas-b div')
const gelasTransitContent = document.querySelector('#gelas-transit div')

let temp = ''

gelasAContent.addEventListener('click',
    () => {
        if (temp === '') {
            temp = gelasAContent.getAttribute('class')
            gelasAContent.setAttribute('class', '')
        } else if (temp !== '' && gelasAContent.getAttribute('class') === '') {
            gelasAContent.setAttribute('class', temp)
            temp = ''
        }
    }
)
gelasBContent.addEventListener('click',
    () => {
        if (temp === '') {
            temp = gelasBContent.getAttribute('class')
            gelasBContent.setAttribute('class', '')
        } else if (temp !== '') {
            gelasBContent.setAttribute('class', temp)
            temp = ''
        }
    }
)
gelasTransitContent.addEventListener('click',
    () => {
        if (temp === '') {
            temp = gelasTransitContent.getAttribute('class')
            gelasTransitContent.setAttribute('class', '')
        } else if (temp !== '') {
            gelasTransitContent.setAttribute('class', temp)
            temp = ''
        }
    }
)