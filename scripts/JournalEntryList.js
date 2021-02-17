/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries, deleteEntry, dispatchStateChangeEvent } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { getMoods, useMoods } from './MoodProvider.js'
const eventHub = document.querySelector('.bg') 
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalEntriesList")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
        // .then(getMoods)
        .then(() => {
            const entries = useJournalEntries()
            // const moods = useMoods()
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

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
    //    debugger
       deleteEntry(id)
        
    }
})