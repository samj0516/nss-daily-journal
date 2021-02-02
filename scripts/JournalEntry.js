/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <fieldset id="entry--${entry.id}" class="journalEntry">
            <legend class="entry__date">${entry.date}</legend>
            <div class="entry__mood">Mood: ${entry.mood}</div>
            <div class="entry__concept">Concepts discovered: ${entry.concept}</div>
            <div class="entry__entry">${entry.entry}</div>
            <button>Edit</button>
            <button>Delete</button>
        </fieldset>
    `
}