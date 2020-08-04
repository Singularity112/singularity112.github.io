export default {
  state: {
    notes: [],
    nextId: 1
  },
  getters: {
    allNotes (state) {
      return state.notes
    },
    getNoteById (state) {
      return (id) => state.notes.find(item => item.id === id)
    },
    nextId (state) {
      return state.nextId
    }
  },
  mutations: {
    addNote (state, note) {
      note.id = state.nextId
      state.notes.push(note)
      state.nextId++
    },
    editNote (state, note) {
      state.notes = [
        ...state.notes.map(item => item.id === note.id ? { ...item, ...note } : item)
      ]
    },
    deleteNote (state, id) {
      state.notes = state.notes.filter(item => item.id !== id)
    },
    loadNotes (state) {
      const notes = (localStorage.getItem('notes') === 'undefined') || (!localStorage.getItem('notes')) ? [] : localStorage.getItem('notes')
      if (notes.length) {
        state.notes = JSON.parse(notes)
      }
      state.nextId = Math.max.apply(null, state.notes.map(item => item.id)) + 1
    }
  },
  actions: {
    loadNotes (ctx) {
      ctx.commit('loadNotes')
    },
    addNote (ctx, note) {
      ctx.commit('addNote', note)
      this.dispatch('saveNotes')
    },
    editNote (ctx, note) {
      ctx.commit('editNote', note)
      this.dispatch('saveNotes')
    },
    deleteNote (ctx, id) {
      ctx.commit('deleteNote', id)
      this.dispatch('saveNotes')
    },
    saveNotes (ctx) {
      localStorage.setItem('notes', JSON.stringify(ctx.state.notes))
    }
  }
}
