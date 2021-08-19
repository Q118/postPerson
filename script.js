import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

// section where we are going to add in the ke value pairs

const queryParamsContainer = document.querySelector('[data-query-params]')

const requestHeadersContainer = document.querySelector('[data-request-headers]')

const keyValueTemplate = document.querySelector('[data-key-value-template]')

queryParamsContainer.append(createKeyValuePair())
requestHeadersContainer.append(createKeyValuePair())

function createKeyValuePair() {
    const element = keyValueTemplate.textContent.cloneNode(true)
}