<template>
    <div class="sidebar">
        <div class="ui attached tabular menu">
            <a  class="item" 
                v-for="tab in tabs"
                :key="tab.id"
                :class="{active: tab.isActive}"
                @click="changeSelection(tab.id)"
            >
                {{ tab.title }}
            </a>
        </div>
        <div class="ui bottom attached segment active tab">
            <appUsers 
                @onSelectUser="onSelectUser"
                :users="users"
                v-if="selectedComponent=='users'" 
            />
            <selectedUsers
                v-if="selectedComponent=='selectedUsers'"
                :users="selectedUsers"
                @deleteFullList="onDeleteFullList"
                @deleteUser="onDeleteUser"
            />
        </div>
    </div>
</template>

<script>
import appUsers from './users';
import selectedUsers from './selectedUsers';

export default {
    props: {
        users: Array,
        selectedUsers: Array
    },
    data() {
        return {
            tabs: [
                {
                    id: 1,
                    title: 'Users',
                    isActive: true,
                    selectedComponent: 'users'
                },
                {
                    id: 2,
                    title: 'Selected Users',
                    isActive: false,
                    selectedComponent: 'selectedUsers'
                }            
            ],
            selectedComponent: 'users'
        }
    },
    methods: {
        changeSelection(id) {
            this.tabs.forEach(tab => {
                if (tab.id === id) {
                    tab.isActive = true;
                    this.selectedComponent = tab.selectedComponent;
                } else {
                    tab.isActive = false;
                }
            });
        },
        onSelectUser(login) {
            this.$emit('onSelectUser', login);
        },
        onDeleteUser(id) {
            this.$emit('onDeleteUser', id);
        },
        onDeleteFullList() {
            this.$emit('onDeleteFullList');
        }
    },
    components: {
        appUsers,
        selectedUsers
    }
}
</script>