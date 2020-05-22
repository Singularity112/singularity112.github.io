<template>
    <header>
        <div class="logo">
            Holubiev Dmytro
        </div>

        <div class="ui fluid icon input">
            <input type="text" placeholder="Search..." v-model="query" @keyup="onQueryChange" />
            <i class="search icon"></i>
        </div>
    </header>
</template>

<script>
import lodash from 'lodash';

export default {
    data: function() {
        return {
            query: ''
        }
    },
    methods: {
        onQueryChange : lodash.debounce(function() {
            this.$emit('onSearch', this.query);
        }, 500)
    }
}
</script>