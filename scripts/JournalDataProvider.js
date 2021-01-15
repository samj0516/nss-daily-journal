/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "01/04/2021",
        mood: "Ok",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        
    },
    {
        id: 2,
        date: "01/08/2021",
        mood: "Ok",
        concept: "Git and Github workflow",
        entry: "We learned git commands in the terminal and the process of pushing a pulling to and from git hub.",
        
    },
    {
        id: 3,
        date: "01/15/2021",
        mood: "Ok",
        concept: "Automate with Javascript",
        entry: "We learned how to automate the fish in martin's aquarium using javascript.",
        
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}