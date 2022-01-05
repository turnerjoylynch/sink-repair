import { fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const convertRequestToListElement = (request) => {
    return `<li>
    ${request.description}
    <button class="request__delete"
            id="request--${request.id}">
        DELETE
    </button>
    </li>`
}

export const Requests = () => {
    const requests = fetchRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement)
            }
        </ul>
    `

    return html
} 

