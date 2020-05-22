<template>
  <div class="content">
    <div class="ui link cards">
      <div class="card" v-for="item in users" :key="item.id">
        <div class="image">
          <img :src="item.avatar_url" />
        </div>
        <div class="content">
          <div class="header">{{ item.name || item.login }}</div>
          <div class="meta">
            <a :href="item.repos_url" target="_blank">Repo</a>
          </div>
          <div class="description">Bio: {{ item.bio || 'unknown' }}</div>
        </div>
        <div class="extra content">
          <span class="right floated">Joined in {{ getYear(item.created_at) }}</span>
          <span>
            <i class="user icon"></i>
            {{ item.followers }} followers
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        users: Array
    },
    methods: {
        getYear(date) {
            return new Date(date).getFullYear();
        }
    }
};
</script>