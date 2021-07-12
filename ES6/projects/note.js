const brand = document.getElementById("brand");
const result = document.getElementById("result");
const error = document.getElementById("error");
error.style.display = "none";

// Storage class
class Storage {
  // key
  constructor(key) {
    this.key = key;
  }
  // get notes
  get getData() {
    return JSON.parse(localStorage.getItem(this.key)) ?? [];
  }
  // static add into local memory
  setData(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
  // remove from local memory
  removeData(id) {
    const data = this.getData.filter(note => note.id !== id);
    this.setData(data);
  }
  clearData() {
    localStorage.clear();
  }
}

// notes
class Dataset extends Storage {
  constructor(key) {
    super(key);
    this.data = this.getData;
    this.editing = false;
    this.editData = {}
  }

  // add notes
  add(item) {
    const hasData = this.data.length > 0 && this.data.find(n => n.title.toLowerCase() === item.title.toLowerCase());
    if (hasData) throw new Error("item already existed!");
    this.data.push(note);
    this.setData(this.data);
  }

  // edit item
  edit(id) {
    const data = this.getData;
    const item = data.find(item => item.id === id);
    this.editData = item;
  }

  // remove notes
  remove(id) {
    this.data = this.data.filter(item => item.id !== id);
    this.removeData(id);
  }

  // validation
  validations(keys) {
    let str = keys.map(key => key.value == "" ? `<p class="mb-0">${key.name} is required</p>` : null).filter(x => x);
    if (str.length > 0) {
      error.style.display = 'block';
      error.innerHTML = str;
      setTimeout(() => {
        error.style.display = 'none';
        error.innerHTML = "";
      }, 3000)
      return true;
    }
  }


  render(fn) {
    Object.defineProperties(this, {
      data: {
        get() { }, 
        set() { }
      },
      editData: {
        get() { }, set() {
          fn()
        }
      },
      editing: {
        get() {
          console.log('hello');
        },
        set() {
          console.log('hello set');
          fn();
        }
      }
    })
  }
}





// note instance
const note = new Dataset('notes');

// single note
class Note {
  constructor(title, description, id) {
    this.id = id ?? Math.random().toString();
    this.title = title;
    this.description = description;
  }
}

// add notes
function saveNote(event) {
  event.preventDefault();
  const { description, title } = event.target;
  note.validations([title, description]);
  if (note.editing) {
    note.add(new Note(title.value, description.value, note.editData.id));
  } else {
    note.add(new Note(title.value, description.value));
  }
  description.value = "";
  title.value = "";
}



// render note item
function renderNoteItem(el, record, container) {
  el.innerHTML = `
    <div class="card">
       <div class="card-body">
          <h5 class="card-title">${record.title}</h5>
          <p class="card-text">${record.description.substr(0, 100)}... <a href="#">Read more</a></p>
          <hr/>
          <button class="btn btn-info btn-sm">Edit</button>
          <button class="btn btn-danger btn-sm">Delete</button>
      </div>
      </div>
      `
  el.id = record.id;
  const btns = Array.from(el.querySelectorAll("button"));
  btns[0].addEventListener("click", () => {
    note.editing = true;
    note.edit(record.id);
  });
  btns[1].addEventListener("click", () => {
    console.log(record.id);
    note.remove(record.id);
    document.getElementById(record.id).remove();
  });
  container.appendChild(el);
}


// initialize
function init() {
  const data = note.getData;
  const parentEl = document.createElement("div");
  parentEl.classList.add('row');
  for (let item of data) {
    const el = document.createElement("div");
    el.classList.add('col-md-3');
    renderNoteItem(el, item, parentEl);
  }
  result.append(parentEl);
}

// function onEditNote(note) {
//   const form = document.querySelector("#note-form");
//   form.title.value = note.title;
//   form.description.value = note.description;
// }


// function onFill(event) {
//   const value = event.target.value;
//   if (value == 'lorem') {
//     event.target.value = "Lacus voluptatibus, tortor sodales laborum provident ad maecenas earum? Potenti dapibus. Risus. Volutpat, sapiente cubilia diam inceptos sed, enim dictum expedita quos qui cillum, impedit erat ullamcorper, pharetra. Id laborum proin ducimus. Elit soluta. Quisquam similique. Tempor egestas, consequatur, debitis, reprehenderit nostra! Hendrerit impedit, explicabo facere fuga ipsam? Veritatis sem excepturi laboriosam recusandae, occaecati expedita sapien, suscipit dolores totam in, corporis quidem rerum, elementum, hendrerit ante amet repudiandae etiam? Recusandae, reprehenderit eu, provident suspendisse placerat sociis explicabo error veritatis, voluptatibus magni ullam diamlorem expedita elit dui incidunt, vulputate?"
//   }
// }

// render
function render(fn) {
  //fn();
}





note.render(init)
