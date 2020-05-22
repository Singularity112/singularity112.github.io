<template>
    <div id="app" class="layout">
        <appHeader @onSearch="onSearch" />
        <appSidebar 
            :users="filteredUsers"
            @onSelectUser="onSelectUser"
            :selectedUsers="filteredSelected"
            @onDeleteUser="onDeleteUser"
            @onDeleteFullList="onDeleteFullList"
        />
        <appContent :users="selectedUsers" />
        <appFooter />
    </div>
</template>

<script>
import 'semantic-ui-css/semantic.min.css';
import appHeader from './components/header';
import appSidebar from './components/sidebar';
import appContent from './components/content';
import appFooter from './components/footer';
import './scss/global.scss';

export default {
  name: 'App', 
  components: {
    appHeader,
    appSidebar,
    appContent,
    appFooter
  },
  methods: {
    onSearch(query) {
      this.searchQuery = query;
      this.filter();
    },
    getUsers() {
      fetch('https://api.github.com/users', {
          headers: new Headers({
                'Authorization': 'token 2580ef3cafe781e11dd1454745736d61e7636f64'
            })
        })
        .then(res => res.json()).then(res => {
            this.users = res;
            this.filteredUsers = res;
        });
    },
    onSelectUser(login) {
      fetch(`https://api.github.com/users/${login}`, {
          headers: new Headers({
                'Authorization': 'token 2580ef3cafe781e11dd1454745736d61e7636f64'
            })
        })
        .then(res => res.json()).then(res => {
            const copy = this.selectedUsers.find(user => user.id === res.id);
            if (!copy) {
                this.selectedUsers.push(res);
            }
        });
    },
    onDeleteUser(id) {
        const idx =this.selectedUsers.findIndex(item => item.id === id);
        this.selectedUsers.splice(idx, 1);
    },
    onDeleteFullList() {
        this.selectedUsers = [];
    },
    save() {
        localStorage.setItem('selectedUsers', JSON.stringify(this.selectedUsers));
    },
    load() {
        this.selectedUsers = JSON.parse(localStorage.getItem('selectedUsers')) || [];
    },
    filter() {
        this.filteredUsers = this.users.filter(user => {
            const isID = user.id.toString().includes(this.searchQuery);
            const isLogin = user.login.includes(this.searchQuery);

            return isID || isLogin;
        });

        this.filteredSelected = this.selectedUsers.filter(user => {
            const isID = user.id.toString().includes(this.searchQuery);
            const isLogin = user.login.includes(this.searchQuery);

            return isID || isLogin;
        });
    }
  },
  data: function() {
    return {
      users: [],
      selectedUsers: [],
      filteredUsers: [],
      filteredSelected: [],
      searchQuery: ''
    }
  },
  mounted() {
    this.getUsers();
    this.load();
  },
  watch: {
      selectedUsers() {
          this.save();
          this.filter();
      }
  }
}
</script>

