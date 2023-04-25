import { useCallback, useState } from "react"

export function useFetchAPI(url) {
    const [loading, setLoading] = useState(false)
    const [entities, setEntities] = useState([])

    const load = useCallback(async (offset) => {
        setLoading(true)

        if(offset !== null) {
            url += `?offset=${offset}`
        }
    
        await fetch(`http://127.0.0.1:8080${url}`, {
            headers: {
                "Accept": "application/ld+json",
                "Content-Type": "application/json"
            },
            method: "GET",
            mode: "cors"
        })
        .then((response) => {
            if(response.status === 200) {
                response.json().then((responseData) => setEntities(responseData))
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        });
        
        setLoading(false)
    }, [url])

    return {
        entities,
        load,
        loading,
    }
}

/**
 * Find a parent by class name
 * 
 * @param {*} element 
 * @param {*} className 
 * @returns 
 */
export function findParent(element, className) {

    if(className === undefined) {
        return null
    }

    let e = null
    let elements = []

    while(element) {
        elements.unshift(element)
        console.log([
            element.className,
            className
        ])
        element = element.parentNode
        if(element !== null && element.className === className) {
            e = element
            break
        }
    }

    return e
}

/**
 * Find a child by class name or tag name
 * 
 * @param {*} element 
 * @param {*} className 
 * @param {*} tagName 
 * @returns 
 */
export function findChildren(element, className, tagName) {
    let 
        childrens = element.children, 
        findElement = null
    ;
    
    for(let i = 0; i < childrens.length; i++) {
        if(
            (className && childrens[i] && childrens[i].className === className) ||
            (tagName && childrens[i] && childrens[i].tagName === tagName)
        ) {
            findElement = childrens[i]
            break
        }
    }

    return findElement
}