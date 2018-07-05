<style lang="less">
@pxtorem: 24rem;

.integral-records {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80 / @pxtorem;
    background: #242424;
    padding: 0 1.25rem;
    button {
      background: none;
      img {
        width: 20 / @pxtorem;
        height: 36 / @pxtorem;
        vertical-align: bottom;
      }
    }
    span {
      font-size: 30 / @pxtorem;
      color: #ffffff;
      font-weight: bold;
    }
  }
}

</style>

<template>
  <div class="integral-records">
    <header class="header">
      <button class="back" @click="back">
        <img src="../../assets/img/goBack.png">
      </button>
      <span>{{ title }}</span>
      <span></span>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '欧莱雅'
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
