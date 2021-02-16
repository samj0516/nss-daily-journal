/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
const eventHub = document.querySelector('.bg') 
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalEntriesList")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
        .then(() => {
            const entries = useJournalEntries()
            render(entries)
        })
    
}

const render = (journalArray) => {
    const entryHTMLRepresentations = journalArray.map(journalObject => {
        return JournalEntryComponent(journalObject)

    }).join("")

    entryLog.innerHTML = `
            <section class="journalEntries">
                ${entryHTMLRepresentations}
            </section>`
}

eventHub.addEventListener("journalStateChanged", event =>{
    EntryListComponent()
})