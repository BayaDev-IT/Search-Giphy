const API = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=pVHK6217x7S2h52y3xPgbpWAQp5rSPlK'
const limit = '&limit='
const params = '&q='
const form = document.querySelector('form')
const count = document.querySelector('#count')
const output = document.querySelector('#output')
const input = document.querySelector('#inp')

const searchGiphy = async () => {
    let url = API + key + limit + count.value + params + input.value
    const req = await fetch(url)
    const res = await req.json()
    renderGiphys(res.data)
    input.value = ''
}

const renderGiphys = (data) => {
    output.innerHTML = ''
    data.length > 0 ? 
        data.map(el => {
            // console.log(el)
            const card = document.createElement('div')
            const title = document.createElement('h2')
            const giff = document.createElement('iframe')
            // const downloadLink = document.createElement('a')
            // downloadLink.href ='#'
            // downloadLink.classList.add('download-btn')
            // const img = document.createElement('img')
            // img.src = '../images/download.svg'

            title.textContent = el.title.length > 15 ? el.title.slice(0, 15) + '...' : el.title
            title.title = el.title
            giff.src = el.embed_url


            // downloadLink.append(img)
            card.append(giff, title)
            output.append(card)
        })
        :
        output.innerHTML = `<h1>По запросу ничего не найдено!</h1>` 
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchGiphy()
})
