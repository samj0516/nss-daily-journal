const contentTarget = document.querySelector('.journalForm')


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
                        <option value="ok">confused</option>
                        <option value="confused">confused</option>
                        <option value="excited">excited</option>
                        <option value="overwhelmed">overwhelmed</option>
                    </select><br />
               
                    <label for="entry">Entry</label><br />
                    <textarea name="entry" id="entry"></textarea><br />
              
                    <input type="button" value="Record Journal Entry" onclick="record()">
                </fieldset>`

}

export const JournalFormComponent = () => {
    render()
}