import { saveJournalEntry } from './JournalDataProvider.js'
import { getMoods, useMoods } from './MoodProvider.js'
const contentTarget = document.querySelector('.journalForm')
const eventHub = document.querySelector('.bg')
const allMoods = useMoods()



const render = (moodCollection) =>{
    const moodDropdown = moodCollection.map((mood) => {
        // debugger
        return `<option value="${ mood.id }">${ mood.label }</option>`
    }
).join("")
    contentTarget.innerHTML = `
                <fieldset>
                    <legend>Daily Journal</legend>
                    <label for="journalDate">Date</label><br />
                    <input type="date" name="date" id="date"><br />
                 
                    <label for="conceptsCovered">Concepts Covered</label><br />
                    <input type="text" name="conceptsCovered" id="conceptsCovered"><br />
                 
                    <label for="mood">Mood</label><br />
                    <select id="mood">
                    <option value="0">How are you feeling?</option>
                        ${moodDropdown}
                    </select><br />
               
                    <label for="entry">Entry</label><br />
                    <textarea name="entry" id="entry"></textarea><br />
              
                    <input type="button" id="saveEntry" value="+ Record Journal Entry" >
                </fieldset>`

}


  


export const JournalFormComponent = () => {
    getMoods()
    .then(() => {
        const allMoods = useMoods()
        render(allMoods)
    })
    
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
            moodId: parseInt(moodId),
            entry: entryId
        }

        // Change API state and application state
        saveJournalEntry(newEntry)
    }
})