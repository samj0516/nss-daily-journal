import { saveJournalEntry } from './JournalDataProvider.js'
const contentTarget = document.querySelector('.journalForm')
const eventHub = document.querySelector('.bg')

const render = () =>{
    contentTarget.innerHTML = `
                <fieldset>
                    <legend>Daily Journal</legend>
                    <label for="journalDate">Date</label><br />
                    <input type="date" name="date" id="date"><br />
                 
                    <label for="conceptsCovered">Concepts Covered</label><br />
                    <input type="text" name="conceptsCovered" id="conceptsCovered"><br />
                 
                    <label for="mood">Mood</label><br />
                    <select id="mood">
                        <option value="ok">ok</option>
                        <option value="confident">confident</option>
                        <option value="confused">confused</option>
                        <option value="excited">excited</option>
                        <option value="overwhelmed">overwhelmed</option>
                        <option value="enlightened">enlightened</option>
                    </select><br />
               
                    <label for="entry">Entry</label><br />
                    <textarea name="entry" id="entry"></textarea><br />
              
                    <input type="button" id="saveEntry" value="+ Record Journal Entry" onclick="record()">
                </fieldset>`

}

export const JournalFormComponent = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        const dateId = document.querySelector("#date").value
        const conceptsId = document.querySelector("#conceptsCovered").value
        const moodId = document.querySelector("#mood").value
        const entryId = document.querySelector('#entry').value
        // Make a new object representation of a note
        const newEntry = {
            date: dateId,
            concept: conceptsId,
            mood: moodId,
            entry: entryId
        }

        // Change API state and application state
        saveJournalEntry(newEntry)
    }
})