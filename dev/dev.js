import Vue from 'vue'
import Fuse from 'fuse.js'
import debounce from 'lodash/debounce'
import resource from 'vue-resource'
import vSelect from '../src/components/Select.vue'
import countries from './data/countryCodes'
import fuseSearchOptions from './data/books'

Vue.use(resource)
Vue.component('v-select', vSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    placeholder: "placeholder",
    value: null,
    options: countries,
    ajaxRes: [],
    people: [],
    fuseSearchOptions,
    selected1: ['444'],
    options1: [
      { id: '111', name: 'Vue.js 00000000', language: '1JavaScript' },
      { id: '222', name: 'Vue.js', language: '2Ruby' },
      { id: '333', name: 'Vue.js     ', language: '3Ruby' },
      { id: '444', name: 'Vue.js', language: '4PHP', $isDisabled: true }
    ],
    selectedx: 'Åland Islands'
  },
  methods: {
    search1(search, loading) {
      console.log('search1:',search);
      // if (typeof loading === 'function') {
        loading(true);
        loading(false)
      // }
    },
    search(search, loading) {
      loading(true);
      this.getRepositories(search, loading, this)
    },
    searchPeople(search, loading) {
      loading(true)
      this.getPeople(loading, this)
    },
    getPeople: debounce((loading, vm) => {
      vm.$http.get(`https://reqres.in/api/users?per_page=10`).then(res => {
        vm.people = res.data.data
        loading(false)
      })
    }, 250),
    getRepositories: debounce((search, loading, vm) => {
      vm.$http.get(`https://api.github.com/search/repositories?q=${search}`).then(res => {
        vm.ajaxRes = res.data.items;
        loading(false)
      })
    }, 250),
    fuseSearch(options, search) {
      return new Fuse(options, {
        keys: ['title', 'author.firstName', 'author.lastName'],
      }).search(search);
    }
  }
});