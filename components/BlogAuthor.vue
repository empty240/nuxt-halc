<template>
  <div class="author">
    <div class="profile-header">
      Profile
    </div>
    <div class="profile-icon">
      <img
        src="/img/icon_sample.png"
      />
    </div>
    <div class="profile-content">
      <p>30歳を過ぎてからプログラミングを始める。<br />
        今はフリーランス。<br />
      最近の技術スタックはLaravel、Vue、Nuxt。</p>
    </div>
  </div>
</template>

<style scoped>
.author {
  /* background-color: #f5f5f5; */
  border-radius: 4px;
  padding: 8px;
}
.profile-header {
  text-align: center;
}
.profile-icon {
  margin: 8px 0;
  text-align: center;
}
.profile-icon img {
  width: 50px;
}
.profile-content {
  padding: 4px;
  font-size: 14px;
}
</style>
