
const brand = document.getElementById("brand");
const result = document.getElementById("result");
const error = document.getElementById("error");
error.style.display = "none";


// Storage class
class Storage {
  // get notes
  get getNotes() {
    return JSON.parse(localStorage.getItem("notes")) ?? [];
  }
  // static add into local memory
  addIntoLocalMemory(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  // remove from local memory
  removeItemFromMemory(id) {
    const notes = this.getNotes.filter(note => note.id !== id);
    this.addIntoLocalMemory(notes);
  }
}

// notes
class Notes extends Storage {
  constructor() {
    super();
    this.notes = this.getNotes
  }

  // add notes
  addNote(note) {
    const hasNote = this.notes.length > 0 && this.notes.find(n => n.title.toLowerCase() === note.title.toLowerCase());
    if (hasNote) throw new Error("note already existed");
    this.notes.push(note);
    this.addIntoLocalMemory(this.notes);
  }

  // remove notes
  remoteNote(id) {
    this.notes = this.notes.filter(n => n.id !== id);
    this.removeItemFromMemory(id);

  }

  // validation
  validations(keys) {
    let str = keys.map(key => key.value == "" ? `<p class="mb-0">${key.name} is required</p>` : null).filter(x => x);
    if (str.length > 0) {
      error.style.display = 'block';
      error.innerHTML = str;
      setTimeout(() => {
        error.style.display = 'none';
        error.innerHTML = ""
      }, 3000)
      return true;
    }
  }

  // display notes

  displayNoteItem(el, note, container) {
    el.innerHTML = `
    <div class="card">
       <div class="card-body">
          <h5 class="card-title">${note.title}</h5>
          <p class="card-text">${note.description}</p>
          <button class="btn btn-danger btn-sm"> Delete</button >
      </div>
      </div>
      `
    el.querySelector("button").setAttribute('id', note.id)
    container.appendChild(el);
  }


  // initialize
  init() {
    const notes = this.getNotes;
    const parentEl = document.createElement("div");
    parentEl.classList.add('row');
    for (let item of notes) {
      const el = document.createElement("div");
      el.classList.add('col-md-3');
      this.displayNoteItem(el, item, parentEl);
      // el.querySelector("#" + item.id).addEventListener("click", this.remoteNote(item.id))
    }
    result.append(parentEl);
  }

}

// single note
class Note {
  constructor(title, description) {
    this.id = Math.random().toString();
    this.title = title;
    this.description = description;
  }
}

// notes istance
const note = new Notes();

// save notes
function onSaveNote(event) {
  event.preventDefault();
  const { description, title } = event.target;
  note.validations([title, description]);
  note.addNote(new Note(title.value, description.value));
  note.init();
}

// initialize
note.init();
