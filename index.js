const $template = document.getElementById("template").content,
$fragment = document.createDocumentFragment(),
amounts = []


const getDataAmounts = async()=>{
    const res = await fetch('./data.json')
    const dataAmonut = await res.json()

    dataAmonut.forEach(el=>{
        amounts.push(el.amount)
    })
    
    const maxAmount = Math.max(...amounts)

    dataAmonut.forEach(el=>{
        $template.querySelector(".amount-day").textContent = `$${el.amount.toFixed(2)}`
        $template.querySelector(".bar-day").style.height = `${(140/maxAmount)*el.amount}px`
        $template.querySelector(".day").textContent=`${el.day}`
        
        $clone = $template.cloneNode(true)
        if(el.amount===maxAmount) $clone.querySelector(".bar-day").classList.add('isMaxAmount')
        $fragment.appendChild($clone)
    })
    document.getElementById("bar-chart").appendChild($fragment)
}
getDataAmounts()

