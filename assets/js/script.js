const gelasAContent = document.querySelector('#gelas-a div')
const gelasBContent = document.querySelector('#gelas-b div')
const gelasTransitContent = document.querySelector('#gelas-transit div')

let temp = ''

gelasAContent.addEventListener('click',
    () => {
        if (temp !== '' && gelasAContent.getAttribute('class').length > 0) {
            alert("gelas ada isinya")
        } else {
            if (temp === '') {
                temp = gelasAContent.getAttribute('class')
                gelasAContent.setAttribute('class', '')
            } else if (temp !== '') {
                gelasAContent.setAttribute('class', temp)
                temp = ''
            }
        }
    }
)
gelasBContent.addEventListener('click',
    () => {
        if (temp !== '' && gelasBContent.getAttribute('class').length > 0) {
            alert("gelas ada isinya")
        } else {
            if (temp === '') {
                temp = gelasBContent.getAttribute('class')
                gelasBContent.setAttribute('class', '')
            } else if (temp !== '') {
                gelasBContent.setAttribute('class', temp)
                temp = ''
            }
        }
    }
)
gelasTransitContent.addEventListener('click',
    () => {
        if (temp !== '' && gelasTransitContent.getAttribute('class').length > 0) {
            alert("gelas ada isinya")
        } else {
            if (temp === '') {
                temp = gelasTransitContent.getAttribute('class')
                gelasTransitContent.setAttribute('class', '')
            } else if (temp !== '') {
                gelasTransitContent.setAttribute('class', temp)
                temp = ''
            }
        }
    }
)