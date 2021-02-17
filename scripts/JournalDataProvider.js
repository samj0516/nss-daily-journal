/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.

const eventHub = document.querySelector('.bg')    

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

let entries = []
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

export const useJournalEntries = () => {
    
    const sortedByDate = entries.slice().sort(
        (currentEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

export const saveJournalEntry = (entryObj) => {
    // Use `fetch` with the POST method to add your entry to your API
    return fetch("http://localhost:8088/entries?_expand=mood", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
})
        .then(getEntries)  // <-- Get all journal entries
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}

// Listen for record new entry button click
export const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const deleteEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}